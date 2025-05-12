<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const password = ref('');
const confirmPassword = ref('');
const message = ref('');
const error = ref('');
const $supabase = useNuxtApp().$supabase;
const router = useRouter();

onMounted(async () => {
  // Supabase يقوم تلقائيًا بتسجيل الدخول إذا كان الرابط يحتوي على access_token
  const { data, error: userError } = await $supabase.auth.getUser();
  if (userError || !data.user) {
    error.value = 'Lien invalide ou expiré.';
  }
});

const updatePassword = async () => {
  if (password.value !== confirmPassword.value) {
    error.value = 'Les mots de passe ne correspondent pas.';
    return;
  }

  try {
    error.value = '';
    message.value = '';

    const { data, error: updateError } = await $supabase.auth.updateUser({
      password: password.value,
    });

    if (updateError) throw updateError;

    message.value = 'Mot de passe mis à jour avec succès.';
    // يمكنك إعادة التوجيه هنا مثلاً:
    // router.push('/login');
  } catch (err) {
    error.value = err.message || 'Erreur lors de la mise à jour.';
  } 
};
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
    <h1 class="text-xl font-bold mb-4">Réinitialiser le mot de passe</h1>

    <input
      v-model="password"
      type="password"
      placeholder="Nouveau mot de passe"
      class="w-full mb-3 border p-2 rounded"
    />
    <input
      v-model="confirmPassword"
      type="password"
      placeholder="Confirmer le mot de passe"
      class="w-full mb-3 border p-2 rounded"
    />

    <button @click="updatePassword" class="w-full bg-blue-500 text-white p-2 rounded">
      Réinitialiser
    </button>

    <p v-if="message" class="text-green-600 mt-2">{{ message }}</p>
    <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
  </div>
</template>
