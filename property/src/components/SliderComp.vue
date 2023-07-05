<template>
  <div>
    <h2>Something New Everyday</h2>
    <p>
      New properties
      <router-link style="color: #007ea8" to="/properties"
        >for rent</router-link
      >
    </p>
    <Carousel :autoplay="2000" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="(value, key) in rent" :key="key">
        <div>
          <div class="carousel-cell">
            <a>
              <img
                v-bind:src="value.cover_image"
                @click="getlistingid(value.id)"
                class="carousel-imgs"
              />
              <div class="carousel-imgs-text">
                <h6 class="imgs-text-h2">
                  <div class="marin_0">
                    <p>Price</p>
                    <h4>{{ value.property_pricing }} AED</h4>
                  </div>
                  <div>
                    <label class="add-fav">
                      <input type="checkbox" />
                      <i class="icon-heart" @click="addToFavourite(value.id)">
                      </i>
                    </label>
                  </div>
                </h6>
              </div>
            </a>
            <!-- </router-link> -->
            <div style="margin: 5px 0px">
              <i class="fa fa-map-marker"></i>{{ value.property_location }}
            </div>
            <div
              style="
                display: flex;
                justify-content: space-around;
                margin: 5px 0px;
              "
            >
              <span><i class="fa fa-bed"></i>{{ value.Bedrooms }}</span>
              <span
                ><i class="fa fa-bath" aria-hidden="true"></i
                >{{ value.Batrooms }}</span
              >
              <span
                ><i class="fa fa-area-chart" aria-hidden="true"></i
                >{{ value.property_pricing }}</span
              >
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <p style="margin-top: 20px">
      New properties
      <router-link style="color: #007ea8" to="/propertiesBuy"
        >for sale</router-link
      >
    </p>
    <Carousel :autoplay="2000" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="(value, key) in sell" :key="key">
        <div>
          <div class="carousel-cell">
            <a>
              <img
                v-bind:src="value.cover_image"
                class="carousel-imgs"
                @click="getlistingid(value.id)" />
              <div class="carousel-imgs-text">
                <h6 class="imgs-text-h2">
                  <div class="marin_0">
                    <p>Price</p>
                    <h4>{{ value.property_pricing }} AED</h4>
                  </div>
                  <div>
                    <label class="add-fav">
                      <input type="checkbox" />
                      <i class="icon-heart" @click="addToFavourite(value.id)">
                      </i>
                    </label>
                  </div>
                </h6></div
            ></a>
            <div style="margin: 5px 0px">
              <i class="fa fa-map-marker"></i>{{ value.property_location }}
            </div>
            <div
              style="
                display: flex;
                justify-content: space-around;
                margin: 5px 0px;
              "
            >
              <span><i class="fa fa-bed"></i>{{ value.Bedrooms }}</span>
              <span
                ><i class="fa fa-bath" aria-hidden="true"></i
                >{{ value.Batrooms }}</span
              >
              <span
                ><i class="fa fa-area-chart" aria-hidden="true"></i
                >{{ value.property_pricing }}</span
              >
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
<script>
import axios from "axios";
import { useSetTitle } from "@/composables";
import { mapMutations } from "vuex";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
// var user_id = "";
export default {
  name: "HomeView",
  setup() {
    useSetTitle("Home");
  },
  components: {
    Carousel,
    Slide,

    Navigation,
  },
  data() {
    return {
      rent: [],
      rentnext: [],
      sellnext: [],
      sell: [],
      nextPage: null,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        // 700px and up
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        500: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  mounted() {
    this.RentData();
    this.SellData();
  },
  methods: {
    ...mapMutations(["updateData"]),
    async RentData() {
      try {
        const response = await axios.get(
          "http://18.177.139.152/list/filter/?check_Purpose_Type=Rent"
        );
        console.log(response.data.results);
        this.rent = response.data.results;
        this.nextPage = response.data.next;
        try {
          const response1 = await axios.get(this.nextPage);
          this.rent = [...response.data.results, ...response1.data.results];
          console.log(this.rentnext);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async SellData() {
      // Check if there is a next page of data
      try {
        const response = await axios.get(
          "http://18.177.139.152/list/filter/?check_Purpose_Type=Sell"
        );
        console.log(response.data.results);
        this.sell = response.data.results;
        this.nextPage = response.data.next;
        try {
          const response1 = await axios.get(this.nextPage);
          this.sell = [...response.data.results, ...response1.data.results];
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async addToFavourite(id) {
      const token = localStorage.getItem("token");
      console.log(id);
      if (token) {
        try {
          const formData = {
            listing: id,
            status: "True",
          };
          const config = {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + token,
            },
          };
          const response = await axios.post(
            "http://18.177.139.152/favourite/listing/",
            formData,
            config
          );
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        this.$router.push({
          path: "/login",
        });
      }
    },
    handlepage(page) {
      console.log(page);
      console.log("imran khan");
      if (page === "Rent") {
        const data = {};
        data.check_Purpose_Type = page;
        this.updateData(data);
      } else {
        const data = {};
        data.check_Purpose_Type = page;
        this.updateData(data);
      }
    },
    getlistingid(id) {
      const data = {};
      data.id = id;
      console.log("this.id", this.id);
      this.updateData(data);
      this.$router.push({
        path: "/property/:property_id/show",
      });
    },
  },
};
</script>
<style scoped>
/* @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"; */
/* @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"; */
/* @import "https://unpkg.com/flickity@2/dist/flickity.min.css";
@import "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"; */
/* @import "@/assets/css/style.css"; */
</style>
