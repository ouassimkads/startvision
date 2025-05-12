<template>
  <div
    class="bg-gradient-to-r from-blue-100 to-white min-h-screen flex items-center justify-center py-10"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl overflow-hidden flex max-w-4xl w-full"
    >
      <!-- صورة جانبية -->
      <div class="w-1/2 hidden md:block">
        <img
          src="https://plus.unsplash.com/premium_photo-1663134310533-fc3b59225810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1lbiUyMHdvcmt8ZW58MHx8MHx8fDA%3D"
          alt="Signup visual"
          class="h-full w-full object-cover"
        >
      </div>

      <!-- نموذج التسجيل -->
      <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div class="mb-6">
          <div class="flex items-center space-x-2">
            <h2 class="text-4xl font-bold text-gray-700 text-center">
              StartVision
            </h2>
          </div>
          <p class="text-sm text-gray-600 mt-1">
            Rejoignez StartVision aujourd'hui et prenez le contrôle de vos
            investissements.
          </p>
        </div>

        <form class="space-y-4" @submit.prevent="onSubmit">
          <!-- الاسم واللقب -->
          <div class="flex gap-3 w-full">
            <UInput
              v-model="lastName"
              type="text"
              placeholder="Nom"
              size="xl"
              class="w-full"
            />
            <UInput
              v-model="firstName"
              type="text"
              placeholder="Prénom"
              size="xl"
              class="w-full"
            />
          </div>

          <!-- البريد الإلكتروني -->
          <UInput
            v-model="email"
            trailing-icon="i-lucide-at-sign"
            placeholder="Entrez votre email"
            size="xl"
            class="w-full"
          />

          <!-- كلمة المرور -->
          <UInput
            v-model="password"
            placeholder="Password"
            :type="show ? 'text' : 'password'"
            :ui="{ trailing: 'pe-1' }"
            size="xl"
            class="w-full"
          >
            <template #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                :aria-label="show ? 'Hide password' : 'Show password'"
                :aria-pressed="show"
                aria-controls="password"
                @click="show = !show"
              />
            </template>
          </UInput>

          <!-- تأكيد كلمة المرور -->
          <UInput
            v-model="confirmPassword"
            placeholder="Confirm Password"
            :type="show ? 'text' : 'password'"
            size="xl"
            class="w-full"
          />

          <!-- رقم الهاتف -->
          <UInput
            v-model="phone"
            type="tel"
            placeholder="Numéro de téléphone"
            size="xl"
            class="w-full"
          />

          <!-- الولاية -->
          <USelectMenu
            v-model="wilaya"
            placeholder="Wilaya"
            size="xl"
            :items="items"
            class="w-full"
          />

          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition"
          >
            Inscrivez-vous avec e-mail
          </button>
        </form>

        <div class="my-4 flex items-center">
          <hr class="flex-grow border-gray-300" >
          <span class="mx-2 text-sm text-gray-400">or</span>
          <hr class="flex-grow border-gray-300" >
        </div>

        <div class="flex justify-center space-x-4 text-gray-600">
          <button class="hover:text-black"></button>
          <button class="hover:text-black">X</button>
          <button class="hover:text-black">f</button>
          <button class="hover:text-black">G</button>
        </div>

        <p class="text-xs text-center text-gray-500 mt-6">
          Already signed up?
          <NuxtLink to="/connexion" class="text-lime-600 hover:underline"
            >Go to Login</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>


const router = useRouter();
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const phone = ref("");
const wilaya = ref("");

const show = ref(false);
const { $supabase } = useNuxtApp(); 

const items = ref([
  "Adrar",
  "Chlef",
  "Laghouat",
  "Oum El Bouaghi",
  "Batna",
  "Béjaïa",
  "Biskra",
  "Béchar",
  "Blida",
  "Bouira",
  "Tamanrasset",
  "Tébessa",
  "Tlemcen",
  "Tiaret",
  "Tizi Ouzou",
  "Alger",
  "Djelfa",
  "Jijel",
  "Sétif",
  "Saïda",
  "Skikda",
  "Sidi Bel Abbès",
  "Annaba",
  "Guelma",
  "Constantine",
  "Médéa",
  "Mostaganem",
  "M’Sila",
  "Mascara",
  "Ouargla",
  "Oran",
  "El Bayadh",
  "Illizi",
  "Bordj Bou Arreridj",
  "Boumerdès",
  "El Tarf",
  "Tindouf",
  "Tissemsilt",
  "El Oued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "Aïn Defla",
  "Naâma",
  "Aïn Témouchent",
  "Ghardaïa",
  "Relizane",
  "Timimoun",
  "Bordj Badji Mokhtar",
  "Ouled Djellal",
  "Béni Abbès",
  "In Salah",
  "In Guezzam",
  "Touggourt",
  "Djanet",
  "El M’Ghair",
  "El Meniaa",
]);




const onSubmit = async () => {
  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    alert("Veuillez remplir tous les champs");
    return;
  }

  try {
    if (typeof email.value !== "string" || typeof password.value !== "string") {
      throw new Error(
        "Email et mot de passe doivent être des chaînes de caractères"
      );
    }

    const { data, error } = await $supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    const userId = data?.user?.id;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: userInsertData, error: insertError } = await $supabase
      .from("users")
      .insert([
        {
          auth_id: userId,
          name: `${firstName.value} ${lastName.value}`,
          email: email.value,
          phone: phone.value,
          wilaye: wilaya.value
        },
      ]);

    if (insertError) throw insertError;

    router.push("/");
  } catch (error) {
    alert("Erreur lors de l'inscription: " + error.message);
  }
};
</script>
