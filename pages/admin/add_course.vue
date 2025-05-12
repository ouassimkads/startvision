<script setup lang="ts">
import { ref } from 'vue'
import { useNuxtApp } from '#app'

const supabase = useNuxtApp().$supabase

// بيانات النموذج
const title = ref('')
const description = ref('')
const startDate = ref('')
const endDate = ref('')
const price = ref('')

// حالة التحميل أو الخطأ
const loading = ref(false)
const error = ref(null)
const success = ref(false)

async function submitCourse() {
  if (!title.value || !description.value || !startDate.value || !endDate.value) {
    error.value = 'Veuillez remplir tous les champs obligatoires.'
    return
  }

  loading.value = true
  error.value = null
  success.value = false

  const { data, error: insertError } = await supabase
    .from('courses')
    .insert([
      {
        title: title.value,
        description: description.value,
        start_date: startDate.value,
        end_date: endDate.value,
        price: price.value || null // إذا كان السعر اختياريًا
      }
    ])

  if (insertError) {
    error.value = insertError.message
    loading.value = false
    return
  }

  success.value = true
  title.value = ''
  description.value = ''
  startDate.value = ''
  endDate.value = ''
  price.value = ''
  loading.value = false
}
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Ajouter une nouvelle formation</h1>

    <!-- رسالة الخطأ إذا كانت البيانات غير مكتملة -->
    <div v-if="error" class="alert alert-error shadow-sm mb-4">
      ❌ {{ error }}
    </div>

    <!-- رسالة النجاح بعد الإضافة -->
    <div v-if="success" class="alert alert-success shadow-sm mb-4">
      ✅ La formation a été ajoutée avec succès !
    </div>

    <div class="max-w-md mx-auto">
      <div class="mb-4">
        <label class="label">Titre de la formation</label>
        <input type="text" v-model="title" class="input input-bordered w-full" placeholder="Entrez le titre de la formation" />
      </div>

      <div class="mb-4">
        <label class="label">Description</label>
        <textarea v-model="description" class="textarea textarea-bordered w-full" placeholder="Entrez une description détaillée de la formation"></textarea>
      </div>

      <div class="mb-4">
        <label class="label">Date de début</label>
        <input type="date" v-model="startDate" class="input input-bordered w-full" />
      </div>

      <div class="mb-4">
        <label class="label">Date de fin</label>
        <input type="date" v-model="endDate" class="input input-bordered w-full" />
      </div>

      <div class="mb-4">
        <label class="label">Prix (optionnel)</label>
        <input type="number" v-model="price" class="input input-bordered w-full" placeholder="Entrez le prix de la formation" />
      </div>

      <button @click="submitCourse" :disabled="loading.value" class="btn btn-primary w-full">
        <span v-if="loading.value" class="loading loading-spinner"></span>
        <span v-else>Ajouter la formation</span>
      </button>
    </div>
  </div>
</template>
