<template>
  <div>
    <!-- intrested form submission section -->
    <div>
      <div id="open_form" class="almost-centered">
        <span
          ><a href="javascript:void(0)" class="closebtn" @click="closeNav()"
            >x</a
          ></span
        >

        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Question 1:</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Answer:</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Question 2:</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Answer:</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div style="margin-bottom: 10px">
            <p style="margin: 0">Question 3:</p>

            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">Answer 1</label><br />
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css">Answer 2</label><br />

            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">Answer 3</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="row-full" id="background" @click="closeNav()"></div>
    </div>
    <!-- <PropertyListComp /> -->

    <div class="after_header">
      <div><h4>Favourite</h4></div>
      <hr />
      <div style="display: flex; justify-content: space-between">
        <div class="cards-section">
          <div class="main_div1" v-for="(value, key) in allData" :key="key">
            <a
              style="text-decoration: none; color: black"
              @click="getlistingid(value.id)"
              ><div class="slideshow-container">
                <div class="width30">
                  <div
                    id="carousel-2"
                    class="carousel slide"
                    data-bs-touch="true"
                    data-bs-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          v-bind:src="value.cover_image"
                          class="d-block w-100 slider"
                          style="width: 100%; height: 300px"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-bind:src="value.cover_image"
                          class="d-block w-100 slider"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-bind:src="value.cover_image"
                          class="d-block w-100 slider"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carousel-2"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carousel-2"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div class="content">
                  <div style="margin-left: 20px">
                    <p style="font-size: 13px; color: #7d8183; margin: 0">
                      Appartment
                    </p>
                    <div style="display: flex; justify-content: space-between">
                      <h3>{{ value.property_pricing }} AED</h3>
                      <div style="margin-right: 10px">
                        <label
                          class="add-fav1"
                          style="
                            background-color: white;
                            padding: 5px;
                            border-radius: 8px;
                          "
                        >
                          <input type="checkbox" />
                          <i class="icon-heart"> </i>
                        </label>
                      </div>
                    </div>

                    <p style="margin: 0">
                      Exclusive |{{ value.Bedrooms }} Bedroom plus Study |
                      Upgraded Unit
                    </p>
                    <div style="display: flex; margin: 5px 0px">
                      <span
                        ><i class="fa fa-bed"></i>&nbsp;
                        {{ value.Bedrooms }}</span
                      >
                      &nbsp; | &nbsp;
                      <span
                        ><i class="fa fa-bath" aria-hidden="true"></i> &nbsp;{{
                          value.Batrooms
                        }}</span
                      >&nbsp; | &nbsp;
                      <span
                        ><i class="fa fa-area-chart" aria-hidden="true"></i>
                        &nbsp;1033</span
                      >
                    </div>
                    <p style="color: #7d8183; margin: 0">
                      <i
                        class="fa fa-map-marker"
                        style="font-size: 17px; margin: 0"
                      ></i>
                      Burj Khalifa Area, Downtown Dubai, Dubai
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #e0fafb;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                  "
                >
                  <div>
                    <p style="padding-left: 20px; margin: 10px 0px">
                      Listed two days ago
                    </p>
                  </div>
                  <div>
                    <label class="add-fav" @click="showQuestion()">
                      <input class="input1" type="checkbox" />
                      <i class="logo_botton">Intrested</i>
                    </label>
                  </div>
                </div>
              </div></a
            >
          </div>

          <div class="main_div1">
            <a
              href="apartmant_view.html"
              style="text-decoration: none; color: black"
              ><div class="slideshow-container">
                <div class="width30">
                  <div
                    id="carousel-2"
                    class="carousel slide"
                    data-bs-touch="true"
                    data-bs-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="../assets/Images/adds_image1.png"
                          class="d-block w-100 slider"
                          style="width: 100%"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="../assets/Images/adds_image1.png"
                          class="d-block w-100 slider"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="../assets/Images/adds_image1.png"
                          class="d-block w-100 slider"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carousel-2"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carousel-2"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div class="content">
                  <div style="margin-left: 20px">
                    <p style="font-size: 13px; color: #7d8183; margin: 0">
                      Appartment
                    </p>
                    <div style="display: flex; justify-content: space-between">
                      <h3>2,500,000 AED</h3>
                      <div style="margin-right: 10px">
                        <label class="add-fav1">
                          <input type="checkbox" />
                          <i class="icon-heart"> </i>
                        </label>
                      </div>
                    </div>

                    <p style="margin: 0">
                      Exclusive | 3 Bedroom plus Study | Upgraded Unit
                    </p>
                    <div style="display: flex; margin: 5px 0px">
                      <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                      &nbsp;
                      <span
                        ><i class="fa fa-bath" aria-hidden="true"></i>
                        &nbsp;3</span
                      >&nbsp; | &nbsp;
                      <span
                        ><i class="fa fa-area-chart" aria-hidden="true"></i>
                        &nbsp;1033</span
                      >
                    </div>
                    <p style="color: #7d8183; margin: 0">
                      <i
                        class="fa fa-map-marker"
                        style="font-size: 17px; margin: 0"
                      ></i>
                      Burj Khalifa Area, Downtown Dubai, Dubai
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #e0fafb;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                  "
                >
                  <div>
                    <p style="padding-left: 20px; margin: 10px 0px">
                      Listed two days ago
                    </p>
                  </div>
                  <div>
                    <label class="add-fav">
                      <input class="input2" type="checkbox" />
                      <i class="logo_botton">Chat</i>
                    </label>
                  </div>
                </div>
              </div></a
            >
          </div>
          <div style="margin-top: 20px">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    style="color: #007ea8"
                    >Previous</a
                  >
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style="color: #007ea8">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style="color: #007ea8">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style="color: #007ea8">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style="color: #007ea8">4</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style="color: #007ea8">5</a>
                </li>

                <li class="page-item">
                  <a class="page-link" href="#" style="color: #007ea8">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="adds-sections">
          <img
            src="../assets/Images/adds_image1.png"
            style="width: 100%; margin-top: 20px"
          />
          <hr />
          <div>
            <h5>Popular searches</h5>
            <p class="p_underline">
              <a href="#" class="p_underline">Properties for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">Apartments for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">he Villas for salello</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">Townhouses for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">Penthouses for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">he Compounds for salello</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">hel Duplexes for salelo</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">Land for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">Hotel apartments for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">1 bedroom properties for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">2 bedroom properties for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">3 bedroom properties for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">4 bedroom properties for sale</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">5 bedroom properties for sale</a>
            </p>

            <hr />
            <h5>Nearby Areas</h5>
            <p class="p_underline">
              <a href="#" class="p_underline">Properties for sale in Dubai</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline"
                >Properties for sale in Abu Dhabi</a
              >
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">Properties for sale in Sharjah</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline">Properties for sale in Ajman</a>
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline"
                >Properties for sale in Ras Al Khaimah</a
              >
            </p>

            <hr />
            <h5>Properties for Rent</h5>
            <p class="p_underline">
              <a href="#" class="p_underline">Properties for rent</a>
            </p>

            <hr />
          </div>
          <div style="height: 3400px">
            <img class="stickyss" src="../assets/Images/adds_image1.png" />
          </div>
          <div style="height: 1750px">
            <img
              class="stickyss"
              src="../assets/Images/adds_image1.png"
              style="margin-top: 50px"
            />
          </div>
        </div>
      </div>
      <div>
        <a href="#"
          ><img src="../assets/Images/adds_image1.png" style="width: 100%"
        /></a>
      </div>
    </div>
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />
  </div>
</template>

<script>
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { mapMutations } from "vuex";
import { onMounted } from "vue";
var user_id = "";
export default {
  name: "FavouriteListing",
  components: {
    Loading,
  },
  data() {
    return {
      allData: [],
      isLoading: false,
      currentPage: 1,
    };
  },
  created() {
    onMounted(() => {
      console.log(this.$store.state.data);
      this.getAllData();
    });
  },

  methods: {
    ...mapMutations(["updateData"]),
    async getDataFromAPI(page) {
      try {
        if (page === 1) {
          const token = localStorage.getItem("token");
          user_id = localStorage.getItem("id");
          console.log(user_id);
          const config = {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + token,
            },
          };
          const response = await axios.get(
            "http://18.177.139.152/favourite/listing/",
            config
          );
          console.log(response.data);
          return response;
        } else {
          const token = localStorage.getItem("token");
          user_id = localStorage.getItem("id");
          console.log(user_id);
          const config = {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + token,
            },
          };
          const response = await axios.get(
            "http://18.177.139.152/favourite/listing/",
            config
          );
          //   console.log(response.data);
          return response;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getAllData() {
      this.isLoading = true;
      let response = await this.getDataFromAPI(this.currentPage);
      let next = response.data.next;
      console.log(next);
      this.allData = [...this.allData, ...response.data];
      while (next) {
        console.log("hello");
        this.currentPage++;
        response = await this.getDataFromAPI(this.currentPage);
        this.allData = [...this.allData, ...response.data.results];
        console.log(this.allData);
      }
      this.isLoading = false;
    },
    showQuestion() {
      print("hello");
      document.getElementById("open_form").style.display = "block";
      document.getElementById("background").style.display = "block";
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
    },
    closeNav() {
      document.getElementById("open_form").style.display = "none";
      document.getElementById("background").style.display = "none";
      document.documentElement.style.overflow = "scroll";
      document.body.scroll = "yes";
    },
    getlistingid(id) {
      console.log("hellooooooo");
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

<style>
.input_main132 {
  margin-top: -17px;
  margin-bottom: -17px;
  display: flex;
  width: 950px;
  margin-left: auto;
  margin-right: auto;
}

.input_main1322 {
  display: flex;
  justify-content: end;
  width: 100%;
}

.input11 {
  display: flex;
  /* border: 0.5px solid gray; */

  width: 35%;
}

.button33 {
  color: white;
  border: none;

  padding: 15px 30px;

  background-color: #247da9;
}

.select_menu1 {
  display: flex;

  width: 62%;
}

.select_menu12 {
  width: 25%;
  border-left: 0.5px solid gray;
}

.select_menu12 p {
  color: gray;
  margin: 0;
  margin-top: 10px;
  margin-left: 10px;
  font-size: small;
}

.select_menu12 h5 {
  margin: 0;
  margin-left: 10px;
  font-size: medium;
}

@media screen and (max-width: 1025px) {
  .input_main132 {
    margin-top: -17px;
    margin-bottom: -17px;
    display: flex;
    width: 100%;
  }

  .input_main1322 {
    display: block;
    width: 100%;
  }

  .input11 {
    width: 100%;
  }

  .select_menu12 {
    width: 25%;
    border-left: 0.5px solid gray;
    border-top: 0.5px solid gray;
  }

  .select_menu1 {
    width: 100%;
  }

  .button33 {
    padding: 40px 30px;
  }
}

.dropdown-content12 {
  display: none;
  position: absolute;
  background-color: #fffefe;
  width: 160px;
  box-shadow: 0px 8px 8px 2px rgba(63, 62, 62, 0.2);
  z-index: 1;
  margin-top: 5px;
}

.dropdown-content12 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content12 a:hover {
  background-color: rgb(228, 222, 222);
}

.select_menu12:hover .dropdown-content12 {
  display: block;
}

.dropdown-content13 {
  display: none;
  position: absolute;
  background-color: #fffefe;
  width: 250px;
  box-shadow: 0px 8px 8px 2px rgba(63, 62, 62, 0.2);
  z-index: 1;
  margin-top: 5px;
}

.dropdown-content13 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content13 a:hover {
  background-color: rgb(228, 222, 222);
}

.select_menu12:hover .dropdown-content13 {
  display: block;
}

.dropdown-content14 {
  display: none;
  position: absolute;
  background-color: #fffefe;
  width: 130px;
  box-shadow: 0px 8px 8px 2px rgba(63, 62, 62, 0.2);
  z-index: 1;
  margin-top: 5px;
}

.dropdown-content14 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content14 a:hover {
  background-color: rgb(228, 222, 222);
}

.select_menu12:hover .dropdown-content14 {
  display: block;
}

.dropdown-content15 {
  display: none;
  right: 0;
  position: absolute;
  background-color: #fffefe;
  width: 250px;
  box-shadow: 0px 8px 8px 2px rgba(63, 62, 62, 0.2);
  z-index: 1;
  margin-top: 5px;
}

.dropdown-content15 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content15 a:hover {
  background-color: rgb(228, 222, 222);
}

.select_menu12:hover .dropdown-content15 {
  display: block;
}

@media screen and (max-width: 1025px) {
  .dropdown-content12,
  .dropdown-content13,
  .dropdown-content14,
  .dropdown-content15 {
    margin-top: 0.5px;
  }
}

.main_div1 {
  position: relative;
  border: 1px solid rgb(214, 206, 206);
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
}

.main_div1:hover {
  border-radius: 10px;
  background-color: #f8f8f8;
}

.slideshow-container {
  display: flex;
}

.yt {
  position: absolute;
  right: 10px;
}

.content {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-bottom:  1px solid rgb(214, 206, 206); */
}

.content:hover {
  background-color: #f8f8f8;
}

p1 {
  color: #403b45;
  font-weight: 200;
}

.img {
  width: 20px;
  height: 20px;
}

p {
  color: #403b45;
  /* display:flex; */
}

.logo {
  width: 20px;
}

p2 {
  text-align: center;
  display: flex;
  color: #403b45;
}

.button1 {
  background-color: rgb(249, 249, 249);
  position: absolute;
  top: 100px;
  left: 10px;
  border-radius: 20px;
  border: none;
  padding: 8px;
}

.button1:hover {
  background-color: lightgray;
}

.button2 {
  background-color: rgb(249, 249, 249);
  position: absolute;
  top: 100px;
  left: 350px;
  border-radius: 20px;
  border: none;
  padding: 8px;
}

.button2:hover {
  background-color: lightgray;
}

.slider {
  height: 250px;
  width: 100%;
  border-top-left-radius: 10px;
}

.carousel-cell {
  width: 100%;
  height: 100%;

  background: #8c8;

  counter-increment: carousel-cell;
}

.width30 {
  width: 30%;
}

.logo_botton {
  background-color: #16b9ca;
  padding: 10px;
  font-weight: 600;
  color: rgb(253, 250, 250);
  border-radius: 7px;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-right: 5px;

  border: 1px solid #e8e1e0;
}

.logo_botton:hover {
  background-color: #16b9ca;
  border: 1px solid #949292;
}

.button_web {
  display: block;
}

.buton_mob {
  display: none;
}

.adds-sections {
  width: 25%;
}

.cards-section {
  width: 73%;
}

.learn-bth {
  border: 1px solid gray;
  background-color: white;
  color: #007ea8;
  border-radius: 4px;
  font-weight: 600;
  margin-right: 20px;
}

.button50 {
  border: 1px solid rgb(194, 192, 192);
  background-color: white;
  padding: 15px 20px;

  cursor: pointer;
  width: 50%;
}

.button50:hover {
  background-color: rgb(238, 234, 234);
}

.flex_blocks {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.flex-propts {
  display: flex;
  justify-content: space-between;
}

.map_views12 {
  display: none;
}

.cards-img {
  width: 100%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: auto;
  height: 100%;
}

@media screen and (max-width: 1050px) {
  .adds-sections {
    display: none;
  }

  .cards-section {
    width: 100%;
  }
}

@media screen and (max-width: 900px) {
  .main_div1 {
    width: 100%;
  }

  .adds-sections {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .yt {
    display: none;
  }

  .select_menu1 {
    display: none;
  }

  .button33 {
    display: none;
  }

  .input_main1322 {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .a123 {
    display: none;
  }

  .input11 {
    border: 1px solid rgb(194, 192, 192);
    margin-top: 15px;
    margin-bottom: 25px;
  }

  .map_views12 {
    margin-bottom: 25px;
    display: flex;
    width: 100%;
  }

  .flex_blocks {
    width: 100%;
  }

  .flex-propts {
    display: block;
    margin-left: 10px;
  }
}

@media screen and (max-width: 650px) {
  .slideshow-container {
    width: 100%;
    display: block;
  }

  .width30 {
    width: 100%;
  }

  .slider {
    border-top-right-radius: 10px;
  }

  .content {
    width: 100%;
  }

  .button_web {
    display: none;
  }

  .buton_mob {
    display: block;
  }

  .button4 {
    display: none;
  }

  .button5 {
    display: flex;
  }

  .cards-img {
    width: 100%;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: auto;
    height: 100%;
  }
}
</style>
