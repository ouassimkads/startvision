<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

const goToLogin = () => {
  navigateTo('/connexion');
}
const goToSignUp = () => {
  navigateTo('/inscription');
}
const handleLogout = async () => {
  try {
    await auth.signout()
    await navigateTo('/');
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error)
  }
}

onMounted(async () => {
  await auth.fetchUser()
  await auth.fetchUserRName()
  console.log("User fetched:", auth.user)
})

</script>

<template>
  <ClientOnly>
    <div class="hidden lg:block">
    <div v-if="!auth.user" class="flex gap-1 font-[Inter]">
      <UButton class="bg-blue-500 hover:bg-blue-400" @click="goToLogin">Connexion</UButton>
      <UButton class="bg-blue-500 hover:bg-blue-400" @click="goToSignUp">S'inscrire</UButton>
    </div>

    <div v-else class="flex gap-1 font-[Inter]">


      <div v-if=" auth.role === 'user'"  class="dropdown dropdown-hove">
        <div tabindex="0" role="button" class="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>{{ auth.userName }}</div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><NuxtLink to="/upload-cv">Upload cv</NuxtLink></li>
              <li class="text-red-600"><button @click="handleLogout">Déconnecter</button></li>
          </ul>
        </div>

        <div v-if=" auth.role === 'company'"  class="dropdown dropdown-hove">
        <div tabindex="0" role="button" class="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>{{ auth.userName }}</div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><NuxtLink to="/mes-reservations">mes reservations</NuxtLink></li>
              <li><NuxtLink to="/courses_list">liste des cours</NuxtLink></li>
              <li class="text-red-600"><button @click="handleLogout">Déconnecter</button></li>
          </ul>
        </div>
        <div v-if=" auth.role === 'admin'"  class="dropdown dropdown-hove">
        <div tabindex="0" role="button" class="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>{{ auth.userName }}</div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><NuxtLink to="/admin/users">Users</NuxtLink> </li>
            <li><NuxtLink to="/admin/add_course">Ajouter un cours</NuxtLink> </li>
            <li><NuxtLink to="/admin/AdminReservations">Reservations</NuxtLink> </li>
            
              <li class="text-red-600"><button @click="handleLogout">Déconnecter</button></li>
          </ul>
        </div>
      
     

    </div>
  </div>
  </ClientOnly>
</template>


