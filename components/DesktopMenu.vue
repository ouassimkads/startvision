<script setup lang="ts">


const items = ref([
  {
  label: 'Home',
  icon: 'i-lucide-house',
  to: '/',
  },
  {
    label: 'Services',
    icon: 'i-lucide-box',
    to: '/services',
    active: false,
  },
  {
    label: 'À propos',
    icon: 'i-lucide-users',
    to: '/a-propos',
    active: false,
  },
  {
    label: 'Contactez-nous',
    icon: 'i-lucide-circle-help',
    to: '/contact',
    active: false,
  }
])
</script>

<template>
  <div class="hidden lg:flex">
    <UNavigationMenu :items="items" class="font-[Inter] text-blue-950"/>
  </div>
</template>

