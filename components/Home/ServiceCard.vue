
<script setup>
defineProps({
  imageSrc: String,
  imageAlt: String, 
  cardTitle: String, 
  cardDescription: String
})

</script>

<template>
<div class="relative group w-96 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 overflow-hidden rounded-xl">


<div
class="absolute bottom-0 right-0 w-0 h-0 bg-blue-500 rounded-full 
            group-hover:w-[300%] group-hover:h-[300%] 
            transition-all duration-700 ease-out 
            transform translate-x-1/2 translate-y-1/2 z-0 pointer-events-none"/>

<figure class="relative z-10">
  <NuxtImg
  :src="imageSrc"
  :alt="imageAlt"
  class="w-full h-48 object-cover"
  width="600"
  height="300"
/>
</figure>

<div class="card-body relative z-10 text-black group-hover:text-white">
  <h2 class="card-title hover:underline transition duration-300 ease-in-out">{{ cardTitle }}</h2>
  <p>{{ cardDescription }}</p>
  <div class="card-actions justify-end">
  </div>
</div>

</div>

</template>

