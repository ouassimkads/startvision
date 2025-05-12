<script setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const auth = useAuthStore();
const show = ref(false)

const handleLogin = async () => {
  errorMessage.value = "";
  try {
    if (import.meta.server) return;

    
    await auth.login(email.value, password.value);

    await auth.fetchUser();
    await auth.fetchUserRName()
    navigateTo("/");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    errorMessage.value = "Échec de la connexion. Vérifiez vos identifiants.";
  }
};
definePageMeta({
  middleware: ["redirect-if-auth"],
});
</script>
<template>
  <ClientOnly>
    <div class="bg-gradient-to-r from-blue-100 to-white h-screen place-content-center">
      <div
        class="flex bg-white rounded-2xl h-4/5 shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl"  
      >
        <div
          class="hidden lg:block lg:w-1/2 bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          "
        />
        <div class="w-full p-8  place-content-center  lg:w-1/2">
          <h2 class="text-4xl font-bold text-gray-700 text-center">
            StartVision
          </h2>
          <p class="text-xl text-gray-600 text-center">Content de te revoir!</p>

          <form class="space-y-4" @submit.prevent="handleLogin">
            <div class="mt-4">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Adresse Email</label
              >
              <UInput
                id="email"
                v-model="email"
                required
                type="email"
                trailing-icon="i-lucide-at-sign"
                placeholder="Enter your email"
                size="xl"
                class="w-full"
              />
            </div>
            <div class="mt-4">
              <div class="flex justify-between">
                <label class="block text-gray-700 text-sm font-bold mb-2"
                  >Mot de passe</label
                >
                <NuxtLink to="/reset-password" class="text-xs text-black hover:text-blue-400 underline"
                  >Mot de passe oublié ?</NuxtLink
                >
              </div>
              <UInput
                v-model="password"
                placeholder="Password"
                :type="show ? 'text' : 'password'"
                :ui="{ trailing: 'pe-1' }"
                size="xl"
                required
                class="w-full"
              >
                <template #trailing>
                  <UButton
                    color="neutral"
                    variant="link"
                    size="sm"
                    :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                    :aria-label="show ? 'Hide password' : 'Show password'"
                    :aria-pressed="show"
                    aria-controls="password"
                    @click="show = !show"
                  />
                </template>
              </UInput>
            </div>
            <div class="mt-8">
              <button
                class="bg-blue-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-400"
                :disabled="auth.loading"
                type="submit"
              >
                {{ auth.loading ? "Connexion..." : "Se connecter" }}
              </button>
            </div>
          </form>
          <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/5 md:w-1/4" />
            <NuxtLink to="inscription" class="text-xs text-gray-500 uppercase"
              >ou inscrivez-vous</NuxtLink
            >
            <span class="border-b w-1/5 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
