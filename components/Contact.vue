<script setup>
import { ref } from 'vue';
import { translations } from '~/translations/translations';
import { useLocaleStore } from '~/stores/localeStore';


// Pinia store for locale
const localeStore = useLocaleStore();

// Computed property for locale from the Pinia store
const locale = computed(() => localeStore.locale);
</script>

<!-- src/components/Contact.vue -->
<template>
    <section id="contact" class="contact section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>{{ translations.contact[locale].title }}</h2>
            <p>PT. Alam Masa Depan</p>
        </div>
        <!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4">
                <!-- Info Item: Address -->
                <div class="col-lg-6">
                    <div class="info-item d-flex flex-column justify-content-center align-items-center"
                        data-aos="fade-up" data-aos-delay="200">
                        <i class="bi bi-geo-alt"></i>
                        <h3>{{ translations.contact[locale].alamat }}</h3>
                        <p>Jl. Bima Blok K3 No. 21 Kalideres, Jakarta Barat, DKI Jakarta 11820</p>
                    </div>
                </div>
                <!-- End Info Item -->

                <!-- Info Item: Call Us -->
                <div class="col-lg-3 col-md-6">
                    <div class="info-item d-flex flex-column justify-content-center align-items-center"
                        data-aos="fade-up" data-aos-delay="300">
                        <i class="bi bi-telephone"></i>
                        <h3>{{ translations.contact[locale].callus }}</h3>
                        <p>+62 8890 5911 719</p>
                    </div>
                </div>
                <!-- End Info Item -->

                <!-- Info Item: Email Us -->
                <div class="col-lg-3 col-md-6">
                    <div class="info-item d-flex flex-column justify-content-center align-items-center"
                        data-aos="fade-up" data-aos-delay="400">
                        <i class="bi bi-envelope"></i>
                        <h3>{{ translations.contact[locale].emailus }}</h3>
                        <p>fromnaturefuture@gmail.com</p>
                    </div>
                </div>
                <!-- End Info Item -->
            </div>

            <div class="row gy-4 mt-1">
                <!-- Google Maps -->
                <div class="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.94178562541416!2d106.71988736304937!3d-6.121473364897277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1730902000139!5m2!1sid!2sid"
                        width="inherit" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <!-- <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2048939297333!2d106.70267657404139!3d-6.10308745985868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a03b970df7c25%3A0xb3791a7a4c00fae1!2sBaranusa%20office!5e0!3m2!1sid!2sid!4v1730367840514!5m2!1sid!2sid"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                    <!-- <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                        frameborder="0" style="border:0; width: 100%; height: 400px;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                </div>
                <!-- End Google Maps -->

                <!-- Contact Form -->
                <!-- <div class="col-lg-6">
                    <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
                        data-aos-delay="400">
                        <div class="row gy-4">
                            <div class="col-md-6">
                                <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                            </div>
                            <div class="col-md-6">
                                <input type="email" class="form-control" name="email" placeholder="Your Email"
                                    required />
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                            </div>
                            <div class="col-md-12">
                                <textarea class="form-control" name="message" rows="6" placeholder="Message"
                                    required></textarea>
                            </div>
                            <div class="col-md-12 text-center">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                                <button type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div> -->
                <!-- End Contact Form -->
            </div>
        </div>
    </section>
</template>
<style scoped>
/* Tambahkan gaya khusus Anda di sini jika diperlukan */
iframe {
    width: inherit;
}
</style>