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
    <!-- <PopularSearch /> -->
  </div>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  />
</template>

<script>
// @ is an alias to /src
import { Banner, Slider, NewsFromBlog } from "@/components";
import Loading from "vue-loading-overlay";
import { mapMutations } from "vuex";
import "vue-loading-overlay/dist/css/index.css";

export default {
  name: "HomeView",
  components: {
    Banner,
    Slider,
    // PopularSearch,
    NewsFromBlog,
    Loading,
  },
  // data() {
  //   return {
  //     isLoading: false,
  //   };
  // },
  mounted() {
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
  },
  methods: {
    ...mapMutations(["updateData"]),
    checkLoggedIn() {
      // Check login status here, for example, by checking if there's a token in localStorage
      const token = localStorage.getItem("token");
      console.log(token);
      const checkLogin = token !== null;
      if (token) {
        const data = {};
        data.isLogin = true;
        this.updateData(data);
        this.$router.push("/");
      } else {
        const data = {};
        data.isLogin = false;
        this.updateData(data);
        this.$router.push("/");
      }

      console.log(checkLogin);
    },
  },
};
</script>
