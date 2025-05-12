<template>
  <div>
    <div
      class="relative h-[calc(100vh-90px)] w-full bg-[url(./bg-hero-pc-repair.jpg)] bg-no-repeat bg-cover"
    >
      <div class=" bg-blue-300 backdrop-blur-md">
        <div
          class="container mx-auto flex items-center-safe justify-between py-5"
        >
          <div class="text-white text-md flex flex-col gap-5">
            <h1 class="text-4xl font-bold text-white">
              Réparation d'ordinateurs et solution réseau chez startvision
            </h1>
            <p>
              Si vous recherchez un service de réparation d'ordinateur,
              STARTVISION est une solution idéale pour vous. Nous sommes experts
              dans la réparation de toutes les marques et modèles d'ordinateurs
              et de PC
            </p>
            <p>
              Enregistrez votre e-mail et recevez des mises à jour exclusives
              sur nos services de réparation d'ordinateurs et de réseaux.
            </p>
            <div class="flex items-center space-x-2">
              <div class="relative">
                <div
                  class="flex items-center border border-gray-300 rounded-md px-3 py-2 shadow-sm bg-white focus-within:ring-2 focus-within:ring-blue-500"
                >
                  <svg
                    class="w-5 h-5 text-gray-400 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M4 4h16v16H4V4zm16 3l-8 5-8-5"
                    />
                  </svg>

                  <input
                    type="email"
                    placeholder="mail@site.com"
                    required
                    class="outline-none w-full bg-transparent text-sm placeholder-gray-400"
                  />
                </div>

                <p class="text-red-500 text-xs mt-1 hidden" id="email-error">
                  Enter valid email address
                </p>
              </div>

              <button
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm shadow-md"
              >
                Join
              </button>
            </div>
            <div class="flex items-center gap-10">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                />
              </div>
              <div class="flex gap-5">
                <img
                  src="https://p3-ofp.static.pub/fes/cms/2023/03/22/8hjmcte754uauw07ypikjkjtx0m5ib450914.svg"
                  width="60px"
                  alt="lenovo icon"
                />
                <img
                  src="https://www.hp.com/content/dam/sites/worldwide/corporate/hp-information/brandcentral/asset-1-2-x-1@2x.png"
                  width="50px"
                  height="50"
                  alt="lenovo icon"
                />
                <img
                  src="../public/cisco.png"
                  width="50px"
                  height="50"
                  alt="lenovo icon"
                />
              </div>
            </div>
          </div>
          <img
            src="../public/about-img.png"
            alt="this for repair hero"
            class="self-center"
          />
        </div>
      </div>
    </div>
   

    <div class="w-full h-full">
      <div class="container mx-auto h-full py-10">
        <h2 class="text-center text-4xl text-black font-bold pt-5">
          Voici comment nous pouvons vous aider
        </h2>
        <div class="flex justify-around flex-wrap gap-5 mt-10">
          <div class="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
              <img
                src="https://plus.unsplash.com/premium_photo-1664301884434-228dd7cff3a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div
                class="card-actions justify-start bg-white w-fit p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-wrench-icon lucide-wrench"
                >
                  <path
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                  />
                </svg>
              </div>
              <h2 class="card-title">Assistance sur site</h2>
              <p>
                Nous fournissons une assistance technique en direct sur votre
                site pour résoudre vos problèmes informatiques et de réseau
                rapidement et efficacement. Pas besoin de déplacer vos appareils
                : nous venons à vous où que vous soyez!
              </p>
            </div>
          </div>
          <div class="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
              <img
                src="https://plus.unsplash.com/premium_photo-1661573459104-e0665eeb009f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div
                class="card-actions justify-start bg-white w-fit p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-headset-icon lucide-headset"
                >
                  <path
                    d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
                  />
                  <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                </svg>
              </div>
              <h2 class="card-title">Assistance à distance</h2>
              <p>
                Nous offrons une assistance technique à distance rapide pour
                résoudre les problèmes informatiques et de réseau sans avoir à
                vous rendre sur place. Tout ce dont vous avez besoin est une
                connexion Internet et nous nous occupons du reste.
              </p>
            </div>
          </div>
          <div class="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1591238372358-dbbb7a59f22c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div
                class="card-actions justify-start bg-white w-fit p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-pc-case-icon lucide-pc-case"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" />
                  <path d="M15 14h.01" />
                  <path d="M9 6h6" />
                  <path d="M9 10h6" />
                </svg>
              </div>
              <h2 class="card-title">Installation de matériel et logiciels</h2>
              <p>
                De la configuration des ordinateurs à l’installation des
                logiciels et des réseaux, nous nous occupons de tout de manière
                professionnelle.
              </p>
            </div>
          </div>
          <div class="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
              <img
                src="https://plus.unsplash.com/premium_photo-1678916732194-21039a77e779?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div
                class="card-actions justify-start bg-white w-fit p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-wallet-icon lucide-wallet"
                >
                  <path
                    d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
                  />
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                </svg>
              </div>
              <h2 class="card-title">Réduire les coûts</h2>
              <p>
                Grâce à nos solutions intelligentes de maintenance informatique
                et de gestion de réseau, nous vous aidons à réduire les coûts
                d’exploitation sans compromettre les performances. Investissez
                intelligemment et économisez davantage.
              </p>
            </div>
          </div>
          <div class="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
              <img
                src="https://plus.unsplash.com/premium_photo-1661644841013-fe5a56d28e7e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div
                class="card-actions justify-start bg-white w-fit p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-construction-icon lucide-construction"
                >
                  <rect x="2" y="6" width="20" height="8" rx="1" />
                  <path d="M17 14v7" />
                  <path d="M7 14v7" />
                  <path d="M17 3v3" />
                  <path d="M7 3v3" />
                  <path d="M10 14 2.3 6.3" />
                  <path d="m14 6 7.7 7.7" />
                  <path d="m8 6 8 8" />
                </svg>
              </div>
              <h2 class="card-title">Maintenance préventive</h2>
              <p>
                N'attendez pas qu'un problème survienne ! Un entretien régulier
                vous aide à éviter les pannes et à réduire les pertes.
              </p>
            </div>
          </div>
          <div class="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
              <img
                src="https://plus.unsplash.com/premium_photo-1667520464141-cf9d86c1fbbd?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div
                class="card-actions justify-start bg-white w-fit p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-users-icon lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <h2 class="card-title">Conseil & Audit IT</h2>
              <p>
                Nous vous accompagnons dans l'analyse de votre infrastructure et
                vous proposons des solutions avancées adaptées à vos besoins
                techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class=" bg-sky-100">
      
    
    <div class=" container mx-auto h-screen w-full grid grid-cols-7">
      <!-- Left Section: Title/Intro -->
       

       
      <div class="col-span-4 flex flex-col justify-center gap-5">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Contactez-Nous</h1>
        <p class="text-lg text-gray-900 w-3/4">
          Contactez-nous par e-mail, téléphone ou via le formulaire pour améliorer votre système informatique.
        </p>
        <p>startvisoin@gmail.com</p>
        <p>+213 7 96 59 08 15</p>
        <div class="flex  gap-3">
          <div>
            <h3 class="font-bold text-gray-950">Service client</h3>
            <p>Notre équipe d'assistance est disponible 24h/24 et 7j/7 pour répondre à toutes vos questions.</p>
          </div>  
          <div>
            <h3 class="font-bold text-gray-950">Commentaires et suggestions</h3>
            <p> we value your feedback and are continuously working to improve startvision. Your input in crucial in shaping the future of startvision.</p>
          </div>  
          <div>
            <h3 class="font-bold text-gray-950">media inquiries</h3>
            <p>for media-related question or press inquiries please contact us at startvision@gmail.com.</p>
          </div>  
        </div>
      </div>

      <!-- Right Section: Form -->
      <div class="col-span-3 flex items-center justify-center ">
        <form class="w-full max-w-md space-y-4 bg-white p-8 rounded-2xl">
          <div class="mb-10">
            <h1 class="text-4xl font-bold text-gray-900">Entrer en contact</h1>
            <p class="text-sm">vous pouvez nous joindre à tout moment</p>
          </div>
          <div class="flex gap-3">
            <input
              type="text"
              placeholder="Nom"
              class="input input-bordered w-full rounded-2xl"
            />
            <input
              type="text"
              placeholder="Prénom"
              class="input input-bordered w-full rounded-2xl"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="exemple@mail.com"
              class="input input-bordered w-full rounded-2xl"
            />
          </div>
          <div>
            <input
              type="phone"
              placeholder="0798677140"
              class="input input-bordered w-full rounded-2xl"
            />
          </div>
          <div>
            <textarea
              class="textarea textarea-bordered w-full rounded-2xl"
              rows="5"
              placeholder="Écrivez votre message ici..."
            ></textarea>
          </div>

          <div class="pt-2">
            <button
              class="btn btn-primary bg-sky-600 border-none rounded-full w-full"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
