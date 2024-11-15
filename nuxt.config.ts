// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        // Add Google Fonts
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
        // Add Font Awesome
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' }
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
    'usebootstrap',
    'nuxt-bootstrap-icons',
    'nuxt-aos',
    'nuxt-easy-lightbox',
  ],

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true }
  },
  css: ['bootstrap/dist/css/bootstrap.min.css','glightbox/dist/css/glightbox.css','@/assets/css/style.css'],

  plugins: [
    { src: '~/plugins/isotope.js', mode: 'client' },  // Pastikan ini hanya berjalan di sisi klien
    { src: '~/plugins/glightbox.js', mode: 'client' },  // Pastikan ini hanya berjalan di sisi klien
    { src: '~/plugins/imagesloaded.js', mode: 'client' },  // Pastikan ini hanya berjalan di sisi klien
  ],

})