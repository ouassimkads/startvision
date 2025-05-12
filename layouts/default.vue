<template>
  <div>
    <NuxtLayout />
    <SpeedInsights /> <!-- 👈 إضافة هنا -->
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
