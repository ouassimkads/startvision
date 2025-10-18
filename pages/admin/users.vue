<script setup lang="ts">
import { ref, onMounted } from 'vue'

const supabase = useNuxtApp().$supabase
const users = ref([])
const loading = ref(true)
const roleMap = {
  admin: 'Administrateur',
  company: 'Entreprise',
  user: 'Utilisateur'
};
onMounted(async () => {
  loading.value = true

  const { data, error } = await supabase
    .from('users')
    .select('id, email, role, name, phone, cv_url')

  if (error) {
    console.error('Erreur lors du chargement des utilisateurs:', error.message)
  } else {
    users.value = data
  }

  loading.value = false
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Liste des utilisateurs</h1>

    <div v-if="loading" class="text-center text-gray-500">Chargement...</div>

    <table v-else class="table-auto w-full border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="border px-4 py-2">Nom</th>
          <th class="border px-4 py-2">Téléphone</th>
          <th class="border px-4 py-2">Email</th>
          <th class="border px-4 py-2">Rôle</th>
          <th class="border px-4 py-2">CV</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.phone }}</td>
          <td class="border px-4 py-2">{{ user.email }}</td>
          <td class="border px-4 py-2 capitalize">{{ roleMap[user.role] || user.role }}</td>
          <td class="border px-4 py-2">
            <span v-if="user.cv_url">
              ✅ <a :href="user.cv_url" target="_blank" class="text-blue-500 underline">Voir</a>
            </span>
            <span v-else>❌</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
