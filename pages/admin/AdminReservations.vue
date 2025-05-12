<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4"> Panneau de contrôle des réservations </h1>

    <table class="w-full table-auto border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="border p-2">utilisateur</th>
          <th class="border p-2">formation</th>
          <th class="border p-2">SITUATION</th>
          <th class="border p-2">URL</th>
          <th class="border p-2">procédure</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in reservations" :key="reservation.id">
          <td class="border p-2">{{ reservation.user_email }}</td>
          <td class="border p-2">{{ reservation.formation_title }}</td>

          <!-- Dropdown لتغيير الحالة -->
          <td class="border p-2">
            <select v-model="reservation.status" @change="updateStatus(reservation)" class="border p-1">
              <option value="pending">En attente</option>
              <option value="confirmed">comfermed</option>
              <option value="canceled">Annulé</option>
            </select>
          </td>

          <!-- إدخال الرابط -->
          <td class="border p-2">
            <input
              v-model="reservation.link"
              class="border rounded p-1 w-full"
              placeholder="Entrez le lien ici"
            />
          </td>

          <!-- زر حفظ الرابط -->
          <td class="border p-2 text-center">
            <button
              @click="updateLink(reservation)"
              class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
            Enregistrer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { $supabase } = useNuxtApp(); 
const reservations = ref([]);

onMounted(async () => {
  const { data, error } = await $supabase
    .from('course_reservations')
    .select(`
      id,
      status,
      join_url,
      user_id,
      course_id,
      courses (title), 
      users(email)
    `);

  if (!error) {
    reservations.value = data.map(r => ({
      id: r.id,
      status: r.status,
      link: r.join_url,
      user_email: r.users?.email || "غير معروف",
      formation_title: r.courses?.title || "غير معروف"
    }));
  } else {
    console.error(error.message);
  }
});

const updateStatus = async (reservation) => {
  await $supabase
    .from('course_reservations')
    .update({ status: reservation.status })
    .eq('id', reservation.id);
};

const updateLink = async (reservation) => {
  const { data, error } = await $supabase
    .from('course_reservations')
    .update({ join_url: reservation.link }) // تحديث الرابط
    .eq('id', reservation.id);
  
  if (error) {
    console.error("Error updating link:", error.message);
  } else {
    console.log("رابط الدورة تم تحديثه بنجاح!");
  }
};
</script>
