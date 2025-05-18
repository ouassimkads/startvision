<template>
  <section
    class="relative w-full h-[calc(100vh-50px)] overflow-hidden font-sans"
  >
    <!-- Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="
        currentIndex === index
          ? 'opacity-100 z-10'
          : 'opacity-0 z-0 pointer-events-none'
      "
    >
      <NuxtImg
  :src="slide.image"
  alt="slide image"
  class="w-full h-full object-cover"
  width="1920"
  height="1080"
/>
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
      ></div>

      <!-- Content -->
      <div
        class="absolute inset-0 flex flex-col justify-center items-start text-white ml-10 px-4 md:px-8 animate-fade-in"
      >
        <h1
          class="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-4"
        >
          {{ slide.title }}
        </h1>
        <p class="text-lg md:text-xl max-w-2xl drop-shadow-md">
          {{ slide.description }}
        </p>
      </div>
    </div>

    <!-- Controls -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-1 -translate-y-1/2 text-9xl font-thin text-white rounded-full p-3 z-20 transition-all duration-200 ease-in-out transform hover:scale-110 hover:text-[10rem] hover:text-blue-300 hover:drop-shadow-2xl"
    >
      ‹
    </button>
    <button
      class="absolute top-1/2 right-1 -translate-y-1/2 text-9xl font-thin text-white rounded-full p-3 z-20 transition-all duration-200 ease-in-out transform hover:scale-110 hover:text-[10rem] hover:text-blue-300 hover:drop-shadow-2xl"
      @click="nextSlide"
    >
      ›
    </button>

    <!-- Dots -->
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20"
    >
      <button
        v-for="(slide, idx) in slides"
        :key="'dot-' + idx"
        @click="goToSlide(idx)"
        class="w-3 h-3 rounded-full border border-white"
        :class="currentIndex === idx ? 'bg-white' : 'bg-transparent'"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const slides = [
  {
    image:
       "/hero_metting.jpg",
    
      title: "Nous construisons avec vous des plans de réussite solides et durables.",
    description:
      "Grâce à notre expertise en conseil en gestion, nous vous aidons à élaborer des plans d’affaires intelligents qui améliorent les performances et atteignent les objectifs.",
  },
  {
    image:
      "/computer-repair.jpg",
    title: "Des solutions technologiques fiables pour soutenir votre entreprise",
    description: "Nous proposons des services complets incluant l'installation et la maintenance de réseaux, le support technique et l'accompagnement numérique pour développer votre entreprise.",
  },
  {
    image:
      "/online-learn.jpg",
    title: "Nous développons les compétences de votre équipe... en présentiel ou à distance",
    description: "Nous proposons des programmes de formation personnalisés pour accompagner les équipes professionnelles au sein des organisations, améliorer les performances et développer les compétences techniques et administratives en fonction de vos besoins.",
  },
];

const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
};
const goToSlide = (idx) => {
  currentIndex.value = idx;
};

onMounted(() => {
  interval = setInterval(nextSlide, 7000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
