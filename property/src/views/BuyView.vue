<template>
  <div>
    <hr />
    <!-- <PropertySearch /> -->
    <div class="after_header">
      <div class="input_main1">
        <div class="input1">
          <svg viewBox="4 4 15 15" class="searchicon">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.7399 13.6792L18.7806 17.7197C19.0735 18.0126 19.0735 18.4875 18.7806 18.7804C18.4877 19.0733 18.0128 19.0733 17.7199 18.7804L13.6792 14.7399C12.6632 15.5297 11.3865 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 11.3865 15.5297 12.6632 14.7399 13.6792ZM10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.5 7.51472 12.4853 5.5 10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5Z"
            ></path>
          </svg>
          <input
            class="subinput"
            type="text"
            placeholder="City,community or building"
            autocomplete="off"
          />
        </div>

        <div class="select_menu1">
          <select class="select">
            <option selected="selected">
              {{ $store.state.data.check_Purpose_Type }}
            </option>
          </select>
          <select class="select">
            <option class="options" value="Property type">Property type</option>
            <option
              class="options"
              value="{{ $store.state.data.check_property_Type }}"
            >
              {{ $store.state.data.check_property_Type }}
            </option>
          </select>
          <select class="select">
            <option class="options" value="Property type">Baths</option>
            <option
              class="options"
              value="{{ $store.state.data.check_bedroom }}"
            >
              {{ $store.state.data.check_bedroom }}
            </option>
          </select>
          <select class="select">
            <option class="options" value="Property type">Badrooms</option>
            <option
              class="options"
              value="{{ $store.state.data.check_batroom }}"
            >
              {{ $store.state.data.check_batroom }}
            </option>
          </select>
          <select class="select">
            <option disabled selected>Price</option>
            <option value="{{ $store.state.data.check_bedroom }}">
              {{ $store.state.data.min_price }}
            </option>
          </select>

          <select class="select">
            <option class="options" value="Property type">More Filters</option>
            <option class="options" value="volvo">Volvo</option>
          </select>
        </div>
        <div>
          <button @click="myMethod" class="button3">FIND</button>
        </div>
      </div>
      <div class="map_views">
        <button class="button5">
          <i class="fa fa-filter" style="font-size: 17px; margin-right: 5px"></i
          >Filters
        </button>
        <button class="button5" style="margin-left: 10px">
          <span
            class="fa fa-star"
            style="font-size: 17px; margin-right: 5px"
          ></span
          >Save Search
        </button>
      </div>
      <div class="select_menu2">
        <select class="select2">
          <option disabled selected>Buy</option>
        </select>
        <select class="select2">
          <option class="options" value="Property type">Property type</option>
          <option class="options" value="volvo">Volvo</option>
        </select>
        <select class="select2">
          <option class="options" value="Property type">Baths & Beds</option>
          <option class="options" value="volvo">Volvo</option>
        </select>
        <select class="select2">
          <option disabled selected>Price</option>
        </select>

        <select class="select2">
          <option class="options" value="Property type">More Filters</option>
          <option class="options" value="volvo">Volvo</option>
        </select>
      </div>
    </div>
    <hr />
    <!-- intrested form submission section -->
    <div>
      <div id="open_form" class="almost-centered">
        <span
          ><a href="javascript:void(0)" class="closebtn" @click="closeNav()"
            >x</a
          ></span
        >

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">{{
            allquestion[0]
          }}</label>
          <input
            type="text"
            class="form-control"
            id="ans0"
            name="a1"
            aria-describedby="emailHelp"
            v-model="ans0"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">{{
            allquestion[1]
          }}</label>
          <input
            type="text"
            class="form-control"
            id="ans1"
            name="a2"
            v-model="ans1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">{{
            allquestion[2]
          }}</label
          ><br />
          <input type="radio" id="ans2" value="1" name="a3" v-model="ans2" />
          <label for="html"> 1 </label><br />
          <input type="radio" id="ans2" value="2" name="a3" v-model="ans2" />
          <label for="css"> 2 </label><br />
          <input type="radio" id="ans2" v-model="ans2" name="a3" value="3" />
          <label for="css"> 3 </label><br />
          <input type="radio" id="ans2" v-model="ans2" name="a3" value="4" />
          <label for="css"> 4 </label><br />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">{{
            allquestion[3]
          }}</label
          ><br />
          <input
            type="radio"
            id="ans3"
            v-model="ans3"
            name="a4"
            value="Single Family"
          />
          <label for="html">Single Family</label><br />
          <input
            type="radio"
            id="ans3"
            v-model="ans3"
            name="a4"
            value="Bachelors"
          />
          <label for="css">Bachelors</label><br />
        </div>

        <div style="margin-bottom: 10px">
          <p style="margin: 0">{{ allquestion[4] }}</p>

          <input type="radio" name="a5" id="ans4" v-model="ans4" value="Yes" />
          <label for="html"> Yes </label><br />
          <input type="radio" id="ans4" name="a5" v-model="ans4" value="No" />
          <label for="css"> No </label><br />
        </div>
        <button
          type="submit"
          @click="attach_answer_to_listing()"
          class="btn btn-primary"
        >
          Submit
        </button>
      </div>
      <div class="row-full" id="background" @click="closeNav()"></div>
    </div>
    <!-- <PropertyListComp /> -->

    <div class="after_header">
      <div><h4>Properties for sale in UAE</h4></div>
      <div style="display: flex; justify-content: space-between">
        <div class="cards-section">
          <div
            class="main_div1"
            v-for="(value, key) in paginatedData"
            :key="key"
          >
            <a style="text-decoration: none; color: black"
              ><div class="slideshow-container">
                <div class="width30">
                  <div
                    id="carousel-2"
                    class="carousel slide"
                    data-bs-touch="true"
                    data-bs-interval="false"
                  >
                    <div class="carousel-inner" @click="getlistingid(value.id)">
                      <div class="carousel-item active">
                        <img
                          v-bind:src="value.cover_image"
                          class="d-block w-100 slider"
                          style="width: 100%; height: 250px"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-bind:src="value.cover_image"
                          class="d-block w-100 slider"
                          alt="..."
                          style="width: 100%; height: 250px"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          v-bind:src="value.cover_image"
                          class="d-block w-100 slider"
                          alt="..."
                          style="width: 100%; height: 250px"
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
                    <p
                      style="font-size: 13px; color: #7d8183; margin: 0"
                      @click="getlistingid(value.id)"
                    >
                      Appartment
                    </p>
                    <div style="display: flex; justify-content: space-between">
                      <h3 @click="getlistingid(value.id)">
                        {{ value.property_pricing }} AED
                      </h3>
                      <div style="margin-right: 10px">
                        <label class="add-fav1">
                          <input type="checkbox" />
                          <i
                            class="icon-heart"
                            @click="addToFavourite(value.id)"
                          >
                          </i>
                        </label>
                      </div>
                    </div>

                    <p style="margin: 0" @click="getlistingid(value.id)">
                      Exclusive |{{ value.Bedrooms }} Bedroom plus Study |
                      Upgraded Unit
                    </p>
                    <div
                      style="display: flex; margin: 5px 0px"
                      @click="getlistingid(value.id)"
                    >
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
                    <p
                      style="color: #7d8183; margin: 0"
                      @click="getlistingid(value.id)"
                    >
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
                  <div v-if="status">
                    <label class="add-fav">
                      <input class="input1" type="checkbox" />
                      <!-- <i @click="showQuestion(value.id)" class="logo_botton"
                        >chat</i
                      > -->
                      <router-link to="/chat" class="nav-link"
                        >Chat</router-link
                      >
                    </label>
                  </div>
                  <div v-else>
                    <label class="add-fav">
                      <input class="input1" type="checkbox" />
                      <i @click="showQuestion(value.id)" class="logo_botton"
                        >Interested</i
                      >
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
                          <i
                            class="icon-heart"
                            @click="addToFavourite(value.id)"
                          >
                          </i>
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
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a
                    class="page-link"
                    href="#"
                    @click="setCurrentPage(currentPage - 1)"
                  >
                    Previous
                  </a>
                </li>

                <li
                  v-for="pageNumber in totalPages"
                  :key="pageNumber"
                  class="page-item"
                  :class="{ active: currentPage === pageNumber }"
                >
                  <a
                    class="page-link"
                    href="#"
                    @click="setCurrentPage(pageNumber)"
                  >
                    {{ pageNumber }}
                  </a>
                </li>

                <li
                  class="page-item"
                  :class="{ disabled: currentPage === totalPages }"
                >
                  <a
                    class="page-link"
                    href="#"
                    @click="setCurrentPage(currentPage + 1)"
                  >
                    Next
                  </a>
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
              <a href="#" class="p_underline" @click="filter_data('Duplex')"
                >Duplex Properties</a
              >
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline" @click="filter_data('Compound')"
                >Compound Properties</a
              >
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline" @click="filter_data('Full floor')"
                >Full floor for sale</a
              >
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline" @click="filter_data(1)"
                >1 bedroom properties for sale</a
              >
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline" @click="filter_data(2)"
                >2 bedroom properties for sale</a
              >
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline" @click="filter_data(3)"
                >3 bedroom properties for sale</a
              >
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline" @click="filter_data(4)"
                >4 bedroom properties for sale</a
              >
            </p>
            <p class="p_underline">
              <a href="#" class="p_underline" @click="filter_data(5)"
                >5 bedroom properties for sale</a
              >
            </p>

            <hr />
          </div>
          <div style="height: 2500px">
            <img class="stickyss" src="../assets/Images/adds_image1.png" />
          </div>
        </div>
      </div>
      <div>
        <a href="#"
          ><img src="../assets/Images/last_img.png" style="width: 100%"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { mapMutations } from "vuex";
import { onMounted } from "vue";

export default {
  name: "PropertyList",

  data() {
    return {
      q1_id: 6,
      q2_id: 7,
      q3_id: 8,
      q4_id: 11,
      q5_id: 12,
      ans0: "",
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      ownerid: "",
      allData: [],
      allquestion: [],
      listingQestion: [],
      submit_question: [],
      perPage: 15, // number of items per page
      currentPage: 1, // current page number
      startIndex: 0, // start index of items to be displayed on the current page
      listingid: "",
      id: "",
      status: "",
    };
  },
  computed: {
    paginatedData() {
      if (this.allData.length === 0) {
        return [];
      }
      return this.allData.slice(
        this.startIndex,
        this.startIndex + this.perPage
      );
    },

    totalPages() {
      console.log(this.allData.length);
      return Math.ceil(this.allData.length / this.perPage);
    },
  },
  created() {
    onMounted(() => {
      console.log(this.$store.state.data);
      this.getAllData();
      this.getQuestion();
    });
  },

  methods: {
    ...mapMutations(["updateData"]),

    async getDataFromAPI(page) {
      try {
        if (page === 1) {
          const params = this.$store.state.data;
          const response = await axios.get(
            "http://18.177.139.152/list/filter/",
            {
              params: { ...params },
            }
          );
          console.log(response.data);
          return response;
        } else {
          const params = this.$store.state.data;
          const response = await axios.get(
            "http://18.177.139.152/list/filter/",
            {
              params: { ...params, page },
            }
          );
          console.log(response.data);
          return response;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async addToFavourite(id) {
      const token = localStorage.getItem("token");
      console.log(id);
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
    },
    async getAllData() {
      let response = await this.getDataFromAPI(this.currentPage);
      let next = response.data.next;
      console.log(next);
      this.allData = [...this.allData, ...response.data.results];
      while (next) {
        console.log("hello");
        this.currentPage++;
        response = await this.getDataFromAPI(this.currentPage);
        this.allData = [...this.allData, ...response.data.results];
        console.log(this.allData);
      }
    },
    Notify(data) {
      if (data == "Login") {
        toast("Please Login !", {
          transition: toast.TRANSITIONS.BOUNCE,
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast("Questions submitted successfully", {
          transition: toast.TRANSITIONS.BOUNCE,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
    async showQuestion(id) {
      console.log("questions");
      console.log("this.id", id);
      let user_id = localStorage.getItem("user_id");
      if (user_id) {
        console.log(user_id);
        const response = await axios.get(
          "http://18.177.139.152/list/get/" + id + "/",
          {
            params: {
              user_id,
            },
          }
        );
        this.ownerid = response.data.user_id;
        const data = {};
        data.listingOwnerId = this.ownerid;
        this.updateData(data);
        this.listingid = response.data.id;
        console.log(response.data.id, "getlisting");
        console.log(
          response.data.attached_question,
          "response.data.attached_question"
        );
        if (response.data.attached_question.length != 0) {
          for (let obj of response.data.attached_question) {
            for (let question of this.listingQestion) {
              if (obj["question_id"] == question["id"]) {
                this.allquestion.push(question["question_text"]);
              }
            }
          }
        } else {
          console.log("astaggirullah");
          this.$router.push({
            path: "/chat",
          });
        }
        console.log(this.allquestion);

        document.getElementById("open_form").style.display = "block";
        document.getElementById("background").style.display = "block";
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no";
      } else {
        this.Notify("Login");
      }
    },
    async getQuestion() {
      try {
        const response = await axios.get(
          "http://18.177.139.152/questionair/basic/question/"
        );
        console.log(response.data.Sales_Listings);
        for (let question of response.data.Sales_Listings) {
          console.log(question, "love");
        }
        this.listingQestion.push(...response.data.Sales_Listings);
        this.allData = [...this.allData, ...response.data.Sales_Listings];
      } catch (error) {
        console.log(error);
      }
    },
    closeNav() {
      document.getElementById("open_form").style.display = "none";
      document.getElementById("background").style.display = "none";
      document.documentElement.style.overflow = "scroll";
      document.body.scroll = "yes";
    },
    async attach_answer_to_listing() {
      try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        console.log(user_id);
        console.log("Bearer" + " " + token);
        this.submit_question.push(
          { id: this.q1_id, ans: this.ans0 },
          { id: this.q2_id, ans: this.ans1 },
          { id: this.q3_id, ans: this.ans2 },
          { id: this.q4_id, ans: this.ans3 },
          { id: this.q5_id, ans: this.ans4 }
        );
        const config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const postData = {
          question: this.submit_question,
          listing: this.listingid,
          owner_id: this.ownerid,
          user_id: user_id,
          future_ans: "True",
        };

        console.log(postData);
        axios
          .post(
            "http://18.177.139.152/questionair/interested/",
            postData,
            config
          )
          .then((response) => {
            console.log(response);
            this.closeNav();
            this.status = true;
            this.Notify("Sumbit");
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.log(error);
      }
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
    async filter_data(value) {
      const data = {};
      if (typeof value === "string") {
        console.log("myValue is a string", value);
        data.check_Purpose_Type = "Sell";
        data.check_property_Type = value;
      } else if (typeof value === "number") {
        data.check_Purpose_Type = "Sell";
        data.check_bedroom = value;
        console.log("myValue is a number", value);
      } else {
        console.log("myValue is not a string or a number");
        data.check_Purpose_Type = "Sell";
      }
      const params = data;
      this.updateData(data);
      const response = await axios.get("http://18.177.139.152/list/filter/", {
        params: params,
      });
      this.allData = [...this.allData, ...response.data.results];
      console.log(response.data);
      window.location.reload();
      return response;
    },
    setCurrentPage(pageNumber) {
      if (pageNumber < 1 || pageNumber > this.totalPages) {
        return;
      }

      this.currentPage = pageNumber;
      this.startIndex = (pageNumber - 1) * this.perPage;
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
