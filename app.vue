<script setup lang="ts">
useHead({
  title: "Natural Sweetness For the Future",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogTitle: 'Natural Sweetness For the Future',
  ogImage: 'https://coba-nuxt-tau.vercel.app/assets/img/why-us.jpeg',
  description: 'The finest natural quality in every grain of palm sugar',
  ogDescription: 'The finest natural quality in every grain of palm sugar',
  twitterImage: 'https://coba-nuxt-tau.vercel.app/assets/img/why-us.jpeg',
  twitterCard: 'summary_large_image'
})


const nuxtApp = useNuxtApp();
const show = ref(true);

nuxtApp.hook("page:start", () => {
    show.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    show.value = false;
  });
</script>

<template>
  <div id="preloader" v-show="show">
    <!-- Loading... -->
  </div>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<!-- <template>
  <AppHeader />

  <UMain>
    <NuxtPage />
  </UMain>

  <AppFooter />

  <UNotifications />
</template> -->
