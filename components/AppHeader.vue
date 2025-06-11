<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="container mx-auto flex justify-between items-center px-2">
    <NuxtLink to="/">
      <h1 class="text-2xl font-extrabold font-[Inter]">STARTVISION</h1>
    </NuxtLink>
    
    <!-- Menu in desktop -->
    <DesktopMenu />


     <!-- Button of open the menu -->
    <div class="lg:hidden flex items-center">
      <button class="text-2xl" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-align-justify-icon lucide-align-justify"
        >
          <path d="M3 12h18" />
          <path d="M3 18h18" />
          <path d="M3 6h18" />
        </svg>
      </button>
    </div>
    <div
      v-if="isMenuOpen"
      class="lg:hidden absolute top-8 left-0 w-full bg-white shadow-lg z-99"
    >
    <!-- Menu in phone -->
      <PhoneMenu />
    </div>
    
    <ActionButton />
  </div>
</template>


