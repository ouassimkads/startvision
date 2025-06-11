<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const supabase = useNuxtApp().$supabase;
const router = useRouter();

const courses = ref([]);
const selectedCourse = ref(null);
const showModal = ref(false);

const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  loading.value = true;

  const { data, error: fetchError } = await supabase
    .from("courses")
    .select("id, title, description, price");

  if (fetchError) {
    error.value = `Erreur lors du chargement des cours: ${fetchError.message}`;
    loading.value = false;
    return;
  }

  courses.value = data;
  loading.value = false;
});

const confirmReservation = (course) => {
  selectedCourse.value = course;
  showModal.value = true;
};

const reserveCourse = async () => {
  showModal.value = false;

  const course = selectedCourse.value;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    alert("Veuillez d'abord vous connecter");
    return;
  }

  const { data: existingReservation } = await supabase
    .from("course_reservations")
    .select("id")
    .eq("course_id", course.id)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingReservation) {
    alert("J'ai déjà réservé ce cours.");
    return;
  }

  const { error: insertError } = await supabase
    .from("course_reservations")
    .insert({
      course_id: course.id,
      user_id: user.id,
      status: "pending",
    });

  if (insertError) {
    console.error("Erreur lors de la réservation:", insertError.message);
    alert("Une erreur s'est produite lors de la réservation");
    return;
  }

  router.push("/mes-reservations");
};
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Cours disponibles</h1>

    <div class="flex w-full justify-center">
      <div v-if="loading" class="text-center text-gray-500">Chargement...</div>

      <div
        v-for="course in courses"
        v-else
        :key="course.id"
        class="card w-96 bg-base-100 shadow-sm m-4"
      >
        <div class="card-body">
          <!-- استخدام flex بين العنوان والسعر -->
            <h2 class="text-3xl font-bold">{{ course.title }}</h2>
            <span class="text-xl">{{ course.price }} DZD</span>
          <p class="mt-4 text-sm text-gray-700">
            {{ course.description }}
          </p>
          <div class="mt-6 flex justify-center">
            <button
              class="btn btn-primary btn-block"
              @click="confirmReservation(course)"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
    <dialog v-if="showModal" class="modal modal-open">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Confirmer l'inscription</h3>
        <p class="py-4">
          Êtes-vous sûr de vouloir vous inscrire au cours:
          <strong>{{ selectedCourse?.title }}?</strong
          >
        </p>
        <div class="modal-action">
          <button class="btn btn-success text-white" @click="reserveCourse">CONFIRMATION</button>
          <button class="btn " @click="showModal = false">
            ANNULER
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>
