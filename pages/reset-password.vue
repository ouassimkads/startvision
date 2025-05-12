<template>
  <div class="h-screen place-content-center">
    <div class="max-w-md  mx-auto p-6 rounded-lg shadow-lg">
      <h1 class="text-3xl font-semibold text-center mb-6">
        Réinitialiser le mot de passe
      </h1>
      <form @submit.prevent="resetPassword" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-blue-950"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Entrez votre email"
          >
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Envoyer le lien de réinitialisation
          </button>
        </div>

        <div v-if="message" class="text-center text-green-500 mt-4">
          {{ message }}
        </div>
        <div v-if="error" class="text-center text-red-500 mt-4">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const message = ref("");
const error = ref("");
const $supabase = useNuxtApp().$supabase;

const resetPassword = async () => {
  try {
    error.value = "";
    message.value = "";
    const { error: resetError } = await $supabase.auth.resetPasswordForEmail(
      email.value,
      {
        redirectTo: "http://localhost:3000/change-password", // رابط صفحة تغيير كلمة المرور
      }
    );
    if (resetError) {
      throw resetError;
    }
    message.value =
      "Un lien pour réinitialiser votre mot de passe a été envoyé à votre email.";
  } catch (err) {
    error.value = err.message || "Une erreur est survenue.";
  }
};
</script>
