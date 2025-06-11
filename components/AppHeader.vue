<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="container mx-auto flex justify-between items-center px-2">
    <NuxtLink to="/">
      <!-- <h1 class="text-2xl text-red-400 font-extrabold font-[Inter]">START<span class="text-green-400 -ml-1">VISION</span></h1> -->
      <div class="flex items-center h-[60px] overflow-hidden w-[200px]">
        <img src="../public/logo-startvision.png" alt="logo">
      </div>
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


