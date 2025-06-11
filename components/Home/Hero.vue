<script setup></script>
<template>
  <div class="font-[Inter]">
    <div class="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2">
      <div class="flex flex-col self-center gap-10">
        <h1 class="text-[#222222] text-2xl sm:text-3xl lg:text-4xl font-bold">
          Découvrez comment nous pouvons faire évoluer votre entreprise !
        </h1>
        <div>
          <p class="text-[#222222] text-base sm:text-lg md:text-md font-light">
            Nous proposons des solutions intégrées aux entreprises dans les
            domaines de la formation, de la logistique, des ressources humaines
            et de l’IT.
          </p>
          <p class="text-[#222222] text-base sm:text-lg md:text-md font-light">
            Parcourez nos services ou contactez-nous pour une offre sur mesure
            adaptée à vos besoins.
          </p>
        </div>
        <div class="flex gap-2">
          <UButton
            icon="i-lucide-binoculars"
            size="md"
            color="neutral"
            variant="solid"
            class="text-lg"
          >
            <NuxtLink to="/services"> Voir tous les services</NuxtLink>
          </UButton>
          <UButton
            icon="i-lucide-phone"
            size="md"
            color="primary"
            variant="outline"
            class="text-lg bg-blue-600 text-white hover:text-blue-600 border-blue-600 hover:bg-white"
          >
            <NuxtLink to="/contact">Nous contacter</NuxtLink>
          </UButton>
        </div>
      </div>

      <div class="bg-red-500 place-self-center">
        <NuxtImg
          src="/logistic.jpg"
          alt="hero section image"
          width="800"
          height="500"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>
    <section class="relative h-screen overflow-hidden">
      <!-- خلفية الفيديو -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://videos.pexels.com/video-files/3195441/3195441-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        <!-- نص بديل في حال لم يُعرض الفيديو -->
        متصفحك لا يدعم عرض الفيديو.
      </video>

      <!-- طبقة تغطية خفيفة فوق الفيديو -->
      <div class="absolute inset-0 bg-black/50 z-10"></div>

      <!-- المحتوى النصي -->
      <div
        class="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Faisons passer votre entreprise au niveau supérieur.
        </h2>
        <p class="text-lg md:text-xl max-w-2xl mb-6">
          Solutions professionnelles en formation, ressources humaines,
          technologie et logistique. Contactez-nous pour savoir comment nous
          pouvons vous aider.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            icon="i-lucide-factory"
            size="md"
            color="neutral"
            variant="solid"
            class="text-lg"
          >
            <NuxtLink to="/inscription"
              >Inscription Entreprise</NuxtLink
            ></UButton
          >
          <UButton
            icon="i-lucide-phone"
            size="md"
            color="primary"
            variant="outline"
            class="text-lg bg-blue-600 text-white hover:text-blue-600 border-blue-600 hover:bg-white"
          >
            <NuxtLink to="/contact">Nous contacter</NuxtLink></UButton
          >
        </div>
      </div>
    </section>
  </div>
</template>
