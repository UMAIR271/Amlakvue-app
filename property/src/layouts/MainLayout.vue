<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import { onMounted } from "vue";
// import {useScript} from '@/composables'
import { useSetTitle } from "@/composables";
import { Header, Footer } from "@/components";
export default {
  name: "MainLayout",
  components: {
    Header,
    Footer,
  },
  setup() {
    useSetTitle("");
    // useScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js')
    // useScript('https://code.jquery.com/jquery-3.4.1.slim.min.js')
    // useScript('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js')
    // useScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js')
    // useScript('https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js')
    // useScript('@/assets/jawa.js')

    onMounted(() => {
      // // eslint-disable-next-line
      // $(document).ready(function () {
      //     // eslint-disable-next-line
      //     $('.logo-carousel').slick({
      //         slidesToShow: 6,
      //         slidesToScroll: 1,
      //         autoplay: true,
      //         autoplaySpeed: 1000,
      //         arrows: true,
      //         dots: false,
      //         pauseOnHover: false,
      //         responsive: [{
      //             breakpoint: 768,
      //             settings: {
      //                 slidesToShow: 4
      //             }
      //         }, {
      //             breakpoint: 520,
      //             settings: {
      //                 slidesToShow: 2
      //             }
      //         }]
      //     });
      // });
    });
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
/* @import "https://unpkg.com/flickity@2/dist/flickity.min.css"; */
/* @import "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"; */
@import "@/assets/css/style.css";
</style>
