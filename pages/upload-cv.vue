<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

definePageMeta({
  middleware: ['auth-role'],
})

const { $supabase } = useNuxtApp()

const file = ref(null)
const success = ref(false)
const error = ref(null)
const loading = ref(false)
const user = ref(null)
const alreadyUploaded = ref(false)

onMounted(async () => {
  // 🟢 جلب المستخدم الحالي
  const { data, error: userError } = await $supabase.auth.getUser()
  if (userError) {
    error.value = "Erreur lors de la récupération de l'utilisateur"
    return
  }
  user.value = data.user

  // 🟢 التحقق من حالة رفع السيرة الذاتية
  const { data: userData, error: fetchError } = await $supabase
    .from('users')
    .select('cv')
    .eq('auth_id', user.value.id)
    .single()

  if (fetchError) {
    error.value = "Erreur lors de la récupération des données utilisateur"
    return
  }

  if (userData?.cv === true) {
    alreadyUploaded.value = true
  }
})

function handleFileUpload(event) {
  file.value = event.target.files[0]
  success.value = false
  error.value = null
}

async function submitCV() {
  if (!file.value || !user.value || alreadyUploaded.value) return

  loading.value = true
  error.value = null
  success.value = false

  const filePath = `${user.value.id}/${file.value.name}`

  // ⬆️ رفع الملف إلى Supabase
  const { error: uploadError } = await $supabase
    .storage
    .from('userfiles')
    .upload(filePath, file.value, {
      cacheControl: '3600',
      upsert: true
    })

  if (uploadError) {
    error.value = uploadError.message
    loading.value = false
    return
  }

  // ✅ استخراج الرابط العام للملف
  const { data: urlData } = $supabase
    .storage
    .from('userfiles')
    .getPublicUrl(filePath)

  const publicUrl = urlData?.publicUrl || null

  // ✅ تحديث بيانات المستخدم مع رابط CV
  const { error: updateError } = await $supabase
    .from('users')
    .update({ cv: true, cv_url: publicUrl }) // ← إضافة الحقل cv_url
    .eq('auth_id', user.value.id)

  if (updateError) {
    error.value = updateError.message
    loading.value = false
    return
  }

  success.value = true
  alreadyUploaded.value = true
  file.value = null
  loading.value = false
}

</script>

<template>
  <section class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-xl mx-auto">
      <div class="card bg-white shadow-xl p-6">
        <h2 class="text-2xl font-semibold mb-4">Déposer votre CV</h2>

        <p class="text-gray-700 mb-4">
          Téléversez simplement votre CV. Notre équipe analysera votre profil et se chargera de rechercher les meilleures opportunités correspondant à vos compétences. 
          Vous serez ensuite contacté(e) par téléphone ou par e-mail.
        </p>

        <!-- ✅ رسالة في حال تم الرفع سابقًا -->
        <div v-if="alreadyUploaded" class="mb-4 alert alert-info shadow-sm">
          ✅ Vous avez déjà téléversé votre CV. Merci !
        </div>

        <!-- 🟡 حقل رفع الملف وزر الإرسال فقط إذا لم يُرفع بعد -->
        <div v-if="!alreadyUploaded">
          <div class="mb-4">
            <label class="label">
              <span class="label-text">Sélectionner un fichier (PDF, DOCX)</span>
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              @change="handleFileUpload"
              class="file-input file-input-bordered w-full"
            />
          </div>

          <button class="btn btn-primary w-full" @click="submitCV" :disabled="!file || loading">
            <span v-if="loading" class="loading loading-spinner"></span>
            <span v-else>Envoyer le CV</span>
          </button>
        </div>

        <!-- ✅ رسالة نجاح -->
        <div v-if="success" class="mt-4 alert alert-success shadow-sm">
          ✅ Votre CV a été envoyé avec succès.
        </div>

        <!-- ❌ رسالة خطأ -->
        <div v-if="error" class="mt-4 alert alert-error shadow-sm">
          ❌ Une erreur s'est produite : {{ error }}
        </div>
      </div>
    </div>
  </section>
</template>
