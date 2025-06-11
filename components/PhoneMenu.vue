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
  {
    label: 'Connexion',
    icon: 'i-lucide-log-in',
    to: '/connexion',
    active: currentPath === '/connexion',
  }, 
  {
    label: 'Inscription',
    icon: 'i-lucide-user-round-plus',
    to: '/inscription',
    active: currentPath === '/inscription',
  }

]})
</script>
<template>
  <UNavigationMenu orientation="vertical" :items="items" class="w-full" />
</template>
