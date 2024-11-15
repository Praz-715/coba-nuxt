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
</script>

<template>
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
