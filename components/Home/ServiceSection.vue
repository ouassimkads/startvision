<script setup>
const cards = [
  {
    title: 'Conseil en Stratégie et Management',
    description: 'Pour améliorer des plans d\'actions efficaces et duebles.',
    image: 'https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Services Informatiques',
    description: 'Instalation et maintenance de réseaux, assistance technique rt accompagnement digital.',
    image: 'https://images.pexels.com/photos/31854238/pexels-photo-31854238/free-photo-of-man-performing-diy-computer-maintenance-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Service Logistique',
    description: 'Recherche de transport gestion de stock, mise en relation avec des fournisseurs fiables.',
    image: 'https://images.pexels.com/photos/4484151/pexels-photo-4484151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Formation en Présentiel et en Ligne ',
    description: 'Pour accompagner à distance la gestion informatique et le développement des compétences.', 
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Service en Ressources Humaines',
    description: 'Diffusion d\'offre d\'empmoi gestion de CV, recrutement et des compétences métiers.',
    image: 'https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Espace Publicitaire',
    description: 'Promotion de produits et services via notre plateforme interactive',
    image: 'https://images.unsplash.com/photo-1707960119803-3b2880e847b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRzJTIwYmFubmVyfGVufDB8fDB8fHww',
  },

  // أضف المزيد حسب الحاجة
];
</script>


<template>
  <div class="container mx-auto w-full font-[Inter] my-10">
    <h1 class="text-4xl text-center font-bold font-[Inter] my-20">
      <div class="divider">Services</div>
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-4">
      <HomeServiceCard
        v-for="(card, index) in cards"
        :key="index"
        :card-title="card.title"
        :card-description="card.description"
        :image-src="card.image"
        class="w-full"
      />
    </div>
  </div>
</template>



<style scoped>
.card {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.card.animate__fadeInUp {
  opacity: 1;
}
</style>