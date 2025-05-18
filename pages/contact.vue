<template>
  <div class="container mx-auto my-10">
    <div
      class="relative rounded-2xl h-full w-full py-10 bg-blue-500 grid gap-7 place-items-center overflow-hidden"
    >
      <div class="absolute -right-23 -top-23 opacity-50">
        <svg width="200" height="200" viewBox="0 0 200 200" class="mx-auto">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="white"
            stroke-width="10"
          />
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="white"
            stroke-width="10"
          />
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="white"
            stroke-width="10"
          />
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="white"
            stroke-width="10"
          />
        </svg>
      </div>
      <div class="absolute -left-23 -bottom-23 opacity-50">
        <svg width="200" height="200" viewBox="0 0 200 200" class="mx-auto">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="white"
            stroke-width="10"
          />
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="white"
            stroke-width="10"
          />
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="white"
            stroke-width="10"
          />
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="white"
            stroke-width="10"
          />
        </svg>
      </div>
      <h2 class="text-5xl text-white">Entrer En Contact</h2>
    </div>

    <div class="grid grid-cols-7 mt-20">
      <div class="col-span-4">
        <section class="bg-white">
          <div class="max-w-2xl px-20">
            <h2 class="text-5xl text-gray-950 mb-8">Parlons-en</h2>
            <p>
              Contactez-nous via le formulaire de demande ou les coordonnées
              ci-dessous.
            </p>
            <div class="divider"></div>
            <form class="space-y-6 mt-5">
              <!-- Nom et Prénom -->
              <div class="flex flex-col md:flex-row gap-4">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text text-gray-900">Nom</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    class="input input-bordered w-full"
                    required
                  />
                </div>

                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text text-gray-900">Prénom</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    class="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-gray-900">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  class="input input-bordered w-full"
                  required
                />
              </div>

              <!-- Message -->
              <div class="form-control">
                <fieldset class="fieldset">
                  <legend class="fieldset-legend text-lg font-light">
                    Message
                  </legend>
                  <textarea
                    class="textarea h-24 w-full"
                    placeholder="Taper Quelque Chose"
                  ></textarea>
                </fieldset>
              </div>
              <div class="">
                <input type="checkbox" checked="checked" class="checkbox" />
                <p class="inline pl-2">
                  j'accepte de recevoir d'autres messages de communication.
                </p>
              </div>
              <!-- Bouton -->
              <div class="text-left">
                <button
                  type="submit"
                  class="btn bg-blue-500 text-white rounded-xl px-8"
                >
                  Commencer Gratuitement
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div class="col-span-3">
        <div class="h-fit w-full rounded-2xl bg-blue-300 place-items-center">
          <img
            src="https://lirp.cdn-website.com/c6cc0fdd/dms3rep/multi/opt/Man-With-Phone-1920w.png"
            width="300px"
            alt=""
          />
        </div>
        <div class="mt-20 flex flex-col gap-5">
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="oklch(62.3% 0.214 259.815)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail-icon lucide-mail"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <div>
              <h2 class="text-lg font-bold">Contact Rapide</h2>
              <p>E-mail: startvision@gmail.com</p>
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="oklch(62.3% 0.214 259.815)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-phone-icon lucide-phone"
            >
              <path
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
              />
            </svg>
            <div>
              <h2 class="text-lg font-bold">Numéro De Téléphone</h2>
              <p>DZ: +213 7 96 59 08 15</p>
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="oklch(62.3% 0.214 259.815)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-map-pin-icon lucide-map-pin"
            >
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <h2 class="text-lg font-bold">Quartier Général</h2>
              <p>SKIKDA 20 aout 1955 210520</p>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <h1 class="text-2xl">SUIVEZ-NOUS</h1>
          <div class="flex gap-3 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="oklch(62.3% 0.214 259.815)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="oklch(62.3% 0.214 259.815)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="oklch(62.3% 0.214 259.815)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
