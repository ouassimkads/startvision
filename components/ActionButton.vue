<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const auth = useAuthStore();

const goToLogin = () => {
  navigateTo("/connexion");
};
const goToSignUp = () => {
  navigateTo("/inscription");
};
const handleLogout = async () => {
  try {
    await auth.signout();
    await navigateTo("/");
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
  }
};

onMounted(async () => {
  await auth.fetchUser();
  await auth.fetchUserRName();
});
</script>

<template>
  <ClientOnly>
    <div class="hidden lg:block">
      <div v-if="!auth.user" class="flex gap-1 font-[Inter]">
        <UButton class="bg-blue-500 hover:bg-blue-400" @click="goToLogin"
          >Connexion</UButton
        >
        <UButton class="bg-blue-500 hover:bg-blue-400" @click="goToSignUp"
          >S'inscrire</UButton
        >
      </div>

      <div v-else class="flex gap-1 font-[Inter]">
        <div
          v-if="auth.role === 'user'"
          class="dropdown dropdown-bottom dropdown-end dropdown-hover"
        >
          <UButton
            :avatar="{
              src: 'https://github.com/nuxt.png',
            }"
            size="md"
            color="neutral"
            variant="outline"
          >
            {{ auth.userName }}
          </UButton>

          <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li><NuxtLink to="/upload-cv">Télécharger le CV</NuxtLink></li>
            <li class="text-red-600">
              <button @click="handleLogout">Déconnecter</button>
            </li>
          </ul>
        </div>

        <div
          v-if="auth.role === 'company'"
          class="dropdown dropdown-bottom dropdown-end dropdown-hover"
        >
          <UButton
            :avatar="{
              src: 'https://github.com/nuxt.png',
            }"
            size="md"
            color="neutral"
            variant="outline"
          >
            {{ auth.userName }}
          </UButton>
          <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <NuxtLink to="/mes-reservations">Mes reservations</NuxtLink>
            </li>
            <li><NuxtLink to="/courses_list">Liste des cours</NuxtLink></li>
            <li class="text-red-600">
              <button @click="handleLogout">Déconnecter</button>
            </li>
          </ul>
        </div>
        <div
          v-if="auth.role === 'admin'"
          class="dropdown dropdown-bottom dropdown-end dropdown-hover"
        >
          <UButton
            :avatar="{
              src: 'https://github.com/nuxt.png',
            }"
            size="md"
            color="neutral"
            variant="outline"
          >
            {{ auth.userName }}
          </UButton>
          <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li><NuxtLink to="/admin/users">Utilisateurs</NuxtLink></li>
            <li>
              <NuxtLink to="/admin/add_course">Ajouter un cours</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/AdminReservations">Reservations</NuxtLink>
            </li>

            <li class="text-red-600">
              <button @click="handleLogout">Déconnecter</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
