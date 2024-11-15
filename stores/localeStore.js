// stores/locale.js
import { defineStore } from 'pinia';

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: 'en', // Default locale
  }),

  actions: {
    setLocale(locale) {
      this.locale = locale;
    },

    changeLocale(locale) {
      this.setLocale(locale);
    },
  },
});
