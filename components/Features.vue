<script setup>
import { ref } from 'vue';
import { translations } from '~/translations/translations';
import { useLocaleStore } from '~/stores/localeStore'


// Pinia store for locale
const localeStore = useLocaleStore();
// Computed property for locale from the Pinia store
const locale = computed(() => localeStore.locale);

const faqItems = ref([]);

const toggleFaq = (event) => {
  const faqContainer = event.currentTarget;
  faqContainer.classList.toggle('faq-active');
};

// Optional: If you want to manage the state of each FAQ item
const faqStates = ref([true, false, false]);

const toggleFaqWithState = (index) => {
  faqStates.value[index] = !faqStates.value[index];
};


const data = {
  translations,
};
</script>

<!-- src/components/Features.vue -->
<template>

  <!-- Why Us Section -->
  <section id="poduct" class="section why-us light-background" data-builder="section">

    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">

          <div class="content" data-aos="fade-up" data-aos-delay="100">
            <h3><span>{{ translations.product[locale].judul1 }} </span><strong>{{ translations.product[locale].judulStrong }}</strong> {{ translations.product[locale].judulAfter }}</h3>
            <br>
            <!-- <p>
              3 Jenis Produk unggulan:
            </p> -->
          </div>

          <div class="faq-container" data-aos="fade-up" data-aos-delay="200">

            <div class="faq-item faq-active">

              <h3><span>01</span> {{ translations.product[locale].gula1judul }}</h3>
              <div class="faq-content">
                <p>{{ translations.product[locale].gula1isi }}</p>
              </div>
              <i class="faq-toggle bi bi-chevron-right"></i>
            </div><!-- End Faq item-->

            <div class="faq-item">
              <h3><span>02</span> {{ translations.product[locale].gula2judul }}</h3>
              <div class="faq-content">
                <p>{{ translations.product[locale].gula2isi }}</p>
              </div>
              <i class="faq-toggle bi bi-chevron-right"></i>
            </div><!-- End Faq item-->

            <div class="faq-item">
              <h3><span>03</span> {{ translations.product[locale].gula3judul }}</h3>
              <div class="faq-content">
                <p>{{ translations.product[locale].gula3isi }}</p>
              </div>
              <i class="faq-toggle bi bi-chevron-right"></i>
            </div><!-- End Faq item-->

          </div>

        </div>

        <div class="col-lg-5 order-1 order-lg-2 why-us-img">
          <img src="/assets/img/why-us.jpeg" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100">
        </div>
      </div>

    </div>

  </section><!-- /Why Us Section -->
</template>

<style scoped>
/*--------------------------------------------------------------
# Why Us Section
--------------------------------------------------------------*/
.why-us {
  padding: 30px 0;
}

.why-us .content h3 {
  font-weight: 400;
  font-size: 34px;
}

.why-us .content p {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
}

.why-us .faq-container .faq-item {
  background-color: var(--surface-color);
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.why-us .faq-container .faq-item:last-child {
  margin-bottom: 0;
}

.why-us .faq-container .faq-item h3 {
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  margin: 0 30px 0 0;
  transition: 0.3s;
  cursor: pointer;
}

.why-us .faq-container .faq-item h3 span {
  color: var(--accent-color);
  padding-right: 5px;
  font-weight: 600;
}

.why-us .faq-container .faq-item h3:hover {
  color: var(--accent-color);
}

.why-us .faq-container .faq-item .faq-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
}

.why-us .faq-container .faq-item .faq-content p {
  margin-bottom: 0;
  overflow: hidden;
}

.why-us .faq-container .faq-item .faq-icon {
  position: absolute;
  top: 22px;
  left: 20px;
  font-size: 22px;
  line-height: 0;
  transition: 0.3s;
  color: var(--accent-color);
}

.why-us .faq-container .faq-item .faq-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  line-height: 0;
  transition: 0.3s;
  cursor: pointer;
}

.why-us .faq-container .faq-item .faq-toggle:hover {
  color: var(--accent-color);
}

.why-us .faq-container .faq-active h3 {
  color: var(--accent-color);
}

.why-us .faq-container .faq-active .faq-content {
  /* background-color: red; */
  grid-template-rows: 1fr;
  visibility: visible;
  opacity: 1;
  padding-top: 10px;
}

.why-us .faq-container .faq-active .faq-toggle {
  transform: rotate(90deg);
  color: var(--accent-color);
}

.why-us .why-us-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.why-us .why-us-img img {
  max-height: 70%;
}
</style>