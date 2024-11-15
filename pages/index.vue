<script setup lang="js">
import { onMounted } from 'vue';
// const { $GLightbox } = useNuxtApp()
// import Header from '~/components/Header.vue';
// import GLightbox from 'glightbox';

onMounted(() => {
    // Menambahkan class pada body
    document.body.classList.add('index-page');

    // Menangani preloader
    // const preloader = document.querySelector('#preloader');
    // if (preloader) {
    //     window.addEventListener('load', () => {
    //         preloader.remove();
    //     });
    // }

    // Toggle Scrolled Class on Body
    const toggleScrolled = () => {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('scroll-up-sticky') &&
            !selectHeader.classList.contains('sticky-top') &&
            !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // GLightbox({ selector: '.glightbox' });

    // Mobile Nav Toggle
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const mobileNavToggle = () => {
        document.body.classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    };
    if (mobileNavToggleBtn) mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
            faqItem.parentNode.classList.toggle('faq-active');
        });
    });

    

    /**
     * Scroll Top Button
     */
    const scrollTopButton = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
        if (scrollTopButton) {
            window.scrollY > 100 ? scrollTopButton.classList.add('active') : scrollTopButton.classList.remove('active');
        }
    };
    scrollTopButton?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
});




</script>

<template>
    <div>
        <!-- <h1>kambing</h1> -->
        <Header />
        <main class="main">
            <HeroSection />
            <FeaturedServices />
            <About />
            <!-- <Clients /> -->
            <Features />
            <!-- <FeaturesDetails /> -->
            <Gallery />
            <!-- <MoreFeatures /> -->
            <!-- <Pricing /> -->
            <!-- <FAQ /> -->
            <Testimonials />
            <Contact />
        </main>
        <Footer />
        <!-- Scroll Top -->
        <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

        <!-- Preloader -->
        <!-- <div id="preloader"></div> -->
    </div>
</template>

<style>
body {
    font-family: 'Nunito', 'Inter', 'Roboto', sans-serif;
}
</style>