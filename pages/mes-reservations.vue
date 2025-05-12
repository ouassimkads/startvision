<script setup lang="ts">
import { ref, onMounted } from 'vue'

const supabase = useNuxtApp().$supabase
const reservations = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  loading.value = true

  const user = (await supabase.auth.getUser()).data.user

  const { data, error: fetchError } = await supabase
    .from('course_reservations')
    .select('id, status,join_url, courses(title, price)')
    .eq('user_id', user.id)
    

  if (fetchError) {
    error.value = `Erreur: ${fetchError.message}`
    loading.value = false
    return
  }

  reservations.value = data
  loading.value = false
})
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Mes Réservations</h1>

    <div v-if="loading" class="text-center text-gray-500">Chargement...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else-if="reservations.length === 0" class="text-center text-gray-500">
      Aucune réservation pour le moment.
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="reservation in reservations"
        :key="reservation.id"
        class="card w-full bg-base-100 shadow-xl"
      >
        <div class="card-body">
          <h2 class="card-title">{{ reservation.courses.title }}</h2>
          <p class="text-gray-700">Prix: ${{ reservation.courses.price }}</p>
          <p class="text-sm text-gray-500">Statut: 
            <span
              :class="reservation.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'"
            >
              {{ reservation.status }}
            </span>
          </p>
          <div class="mt-4">
            <template v-if="reservation.status === 'confirmed' && reservation.join_url">
              ✅ <a :href="reservation.join_url" target="_blank" class="link link-primary">Lien de la session</a>
            </template>
            <template v-else>
              ⏳ Le lien sera disponible après confirmation.
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
