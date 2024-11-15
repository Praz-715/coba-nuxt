
<script setup>
import { ref } from 'vue';
import { translations } from '~/translations/translations';
import { useLocaleStore } from '~/stores/localeStore';


// Pinia store for locale
const localeStore = useLocaleStore();

// Computed property for locale from the Pinia store
const locale = computed(() => localeStore.locale);
</script>

<template>
    <!-- About Section -->
    <section id="about" class="about section">

        <div class="container">

            <div class="row gy-4">

                <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                    <p class="who-we-are">{{ translations.about[locale].p1 }}</p>
                    <h3>{{ translations.about[locale].h3 }}</h3>
                    <!-- <hr> -->
                    <p class="fst-italic">
                        {{ translations.about[locale].desc }}
                    </p>
                    <p style="text-align: justify;">
                        {{ translations.about[locale].story }}
                    </p>
                    <hr>
                    <ul v-for="(isi, index) in translations.about[locale].benefit" :key="index">
                        <li style="text-align: justify;"><i class="bi bi-check-circle"></i> <span>{{isi}}</span></li>
                    </ul>
                    <!-- <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a> -->
                </div>

                <div class="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
                    <div class="row gy-4">
                        <div class="col-lg-6">
                            <img src="/assets/img/about-company-1.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="col-lg-6">
                            <div class="row gy-4">
                                <div class="col-lg-12">
                                    <img src="/assets/img/about-company-2.jpg" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-12">
                                    <img src="/assets/img/about-company-3.jpg" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section><!-- /About Section -->
</template>


<style scoped>
.about-images img {
    transition: transform 0.3s ease; /* Menambahkan transisi untuk efek zoom */
}

.about-images img:hover {
    transform: scale(1.05); /* Mengubah ukuran gambar saat di-hover */
}
/* Scoped CSS untuk About */
</style>