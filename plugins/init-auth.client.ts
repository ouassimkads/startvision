import { defineNuxtPlugin } from '#app'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async () => {
  if (import.meta.server) return;

  const auth = useAuthStore()
  await auth.fetchUser()
})
