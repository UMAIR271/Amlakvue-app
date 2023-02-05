<template>
  <div ref="carousel">
    <!-- Carousel items go here -->
  </div>
</template>

<script>
import Flickity from "flickity";
export default {
  name: "MyCarousel",
  data() {
    return {
      flickity: null,
    };
  },
  mounted() {
    // Create a new Flickity carousel
    this.flickity = new Flickity(this.$refs.carousel, {
      // Options go here
    });
  },
  beforeUnmount() {
    // Destroy the carousel when the component is unmounted
    this.flickity.destroy();
  },
};
</script>
