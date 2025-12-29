<template> 
    <div>
      <AppHeader/>
      <slot />
      <AppFooter/>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const auth = useAuthStore();

onMounted(() => {
  auth.initAuthListener();
});
</script>