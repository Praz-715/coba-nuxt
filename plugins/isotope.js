import Isotope from 'isotope-layout';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('Isotope', Isotope);
});
