<template>
  <div class="container mx-auto px-2">
    <div
      class="overflow-hidden rounded-4xl bg-[url('/study_online.jpg')] bg-right bg-no-repeat  bg-cover lg:bg-contain lg:bg-repeat"
    >
      <div
        class="w-full md:w-4/5 h-full backdrop-blur-[20px]  bg-white/60 place-content-center md:px-3 rounded-xl md:backdrop-blur-[90px] md:mask-r-from-60% md:mask-r-to-90%"
      >
        <div
          class="flex flex-col w-full gap-4  p-5  px-5  text-black font-black  md:py-20 md:gap-8 md:w-6/8"
        >
          <h1 class="text-xl md:text-6xl font-bold text-sky-950">
            Apprenez de n'importe où, avec les meilleurs experts
          </h1>
          <p class="text-md font-light">
            Participez à des sessions de formation en ligne en direct, animées
            par des professionnels qualifiés. Interagissez avec les formateurs
            et échangez avec d'autres apprenants du monde entier — depuis le
            confort de votre domicile.
          </p>
          <div class="flex flex-col justify-center items-center gap-2 w-full sm:flex-row md:justify-start md:items-center md:gap-5 md:max-w-3/4">
            <button
            @click='navigateTo("/courses_list")'  class="btn btn-neutral w-fit text-sm font-bold rounded-full shadow-lg border-none hover:bg-blue-500"
            >

            Explorer Les Formations
            </button>
            <button
              @click='navigateTo("/inscription")' class="btn btn-soft w-fit font-bold rounded-full bg-gray-200 shadow-lg border-none hover:bg-blue-500 hover:text-white"
            >
              inscrivez-vous gratuitement
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>




</script>
