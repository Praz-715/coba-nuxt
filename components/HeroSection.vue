<script setup>
import { ref } from 'vue';
import { translations } from '~/translations/translations';
import { useLocaleStore } from '~/stores/localeStore';


// Pinia store for locale
const localeStore = useLocaleStore();

// Reactive data (translations)
// const translations = ref(translations);

// Computed property for locale from the Pinia store
const locale = computed(() => localeStore.locale);
</script>

<template>
    <section id="hero" class="hero section">
        <div class="hero-bg">
            <img src="/assets/img/hero-bg-light.webp" alt="">
        </div>
        <div class="container text-center">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h1>{{ translations.hero[locale].h1 }} <span>{{ translations.hero[locale].span }}</span></h1>
                <p>{{ translations.hero[locale].par }}</p>
                <div class="d-flex">
                    <a href="#about" class="btn-get-started">{{ translations.hero[locale].btn }}</a>
                    <!-- <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-watch-video">
                <i class="bi bi-play-circle"></i><span>Watch Video</span>
              </a> -->
                </div>
                <img src="/assets/img/hero-services-img.png" class="img-fluid hero-img" alt="">
            </div>
        </div>
    </section>
</template>