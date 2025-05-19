<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const items = computed(() => {
  const currentPath = route.path
  return [
    {
      label: 'Home',
      icon: 'i-lucide-house',
      to: '/',
      active: currentPath === '/',
    },
    {
      label: 'Services',
      icon: 'i-lucide-box',
      to: '/services',
      active: currentPath === '/services',
    },
    {
      label: 'À propos',
      icon: 'i-lucide-users',
      to: '/a-propos',
      active: currentPath === '/a-propos',
    },
    {
      label: 'Contactez-nous',
      icon: 'i-lucide-circle-help',
      to: '/contact',
      active: currentPath === '/contact',
    },
  ]
})
</script>


<template>
  <div class="hidden lg:flex">
    <UNavigationMenu :items="items" class="font-[Inter] text-blue-950"/>
  </div>
</template>

