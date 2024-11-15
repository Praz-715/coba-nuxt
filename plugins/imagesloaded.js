import imagesLoaded from 'glightbox';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('imagesLoaded', imagesLoaded);
});
