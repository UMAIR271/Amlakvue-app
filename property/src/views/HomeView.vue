<template>
  <Banner />
  <div class="second_main">
    <Slider />
    <div class="third_main">
      <NewsFromBlog />
      <div style="width: 30%; margin-left: 10px" class="scf">
        <a href="#">
          <img
            src="https://www.propertyfinder.ae/dist/desktop/assets/4b453ed00a.gulf-business-august.png"
            width="100%"
            height="170px"
        /></a>
      </div>
    </div>
    <PopularSearch />
  </div>
</template>

<script>
// @ is an alias to /src
import { Banner, Slider, PopularSearch, NewsFromBlog } from "@/components";

export default {
  name: "HomeView",
  components: {
    Banner,
    Slider,
    PopularSearch,
    NewsFromBlog,
  },
};
</script>
