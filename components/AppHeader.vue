<template>
  <div class="container mx-auto flex justify-between items-center py-5 px-4">
    <h1 class="text-2xl font-bold font-[Inter]">STARTVISION</h1>

    <DesktopMenu />
    <div class="lg:hidden flex items-center">
      <button @click="toggleMenu" class="text-2xl">
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
      class="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg"
    >
      <PhoneMenu />
    </div>
    <ActionButton />
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
