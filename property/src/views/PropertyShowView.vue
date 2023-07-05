<template>
  <div>
    <!-- <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            v-bind:src="listingdata.cover_image"
            class="d-block w-100"
            alt="..."
            style="height: 700px"
          />
        </div>
        <div class="carousel-item">
          <img
            v-bind:src="listingdata.cover_image"
            class="d-block w-100"
            alt="..."
            style="height: 700px"
          />
        </div>
        <div class="carousel-item">
          <img
            v-bind:src="listingdata.cover_image"
            class="d-block w-100"
            alt="..."
            style="height: 700px"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->
    <Carousel
      id="gallery"
      :autoplay="5000"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
    >
      <Slide v-for="image in listingdata.list" :key="image">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner p-5">
            <div class="carousel-item active">
              <img
                alt="Los Angeles"
                class="images_slider_view_listing"
                style="width: 75%"
                v-bind:src="'http://18.177.139.152/' + image.images_Url"
              />
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="3"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="image in listingdata.list" :key="image">
        <div class="small_card" @click="slideTo(image - 1)">
          <img
            v-bind:src="'http://18.177.139.152/' + image.images_Url"
            alt="Avatar"
            style="width: 100%"
            class="small_image"
          />
        </div>
      </Slide>
    </Carousel>
    <div
      style="
        background-color: #f8f8f8;
        border-top: 1px solid rgb(196, 192, 192);
        padding: 30px 2px;
        margin-top: 20px;
      "
    >
      <!-- ........page start........ -->
      <div class="web1">
        <div class="mainblock">
          <div>
            <div class="hp">
              <div class="J23">
                <h3 style="margin: 0; font-size: 18px">5,999,999 AEDD</h3>
                <button class="b2">
                  <i class="fa fa-ellipsis-h" style="font-size: 24px"></i>
                </button>
              </div>
              <div class="G45">
                <h4 style="margin: 0; font-size: 16px">Estimated Mortgage</h4>
                <i
                  class="fa fa-calculator"
                  style="font-size: 20px; color: #3b97ba; margin-left: 8px"
                ></i>
                <p1 style="margin-left: 8px">23,345 AED/month</p1>
              </div>
            </div>
            <div class="textc">
              <h2>VILLA FOR SALE IN CARMEN, VICTORY HEIGHTS</h2>
              <h1>Fully Upgraded | Type C1 | Great Location</h1>
            </div>
            <div class="iconst">
              <div class="i1c">
                <i
                  class="fa fa-home"
                  style="font-size: 25px; color: #403b45"
                ></i>
                <h3>Property type:</h3>
                <h4 v-for="Type in propertyType" :key="Type">
                  {{ Type["property_type"] }}
                </h4>
              </div>
              <div class="i2c">
                <!-- <img src="img/71.png" class="imge"> -->
                <i
                  class="fa fa-area-chart"
                  style="font-size: 20px; color: #403b45"
                ></i>
                <h3>Property size:</h3>
                <h4>{{ listingdata.size }} sqft/ 446 sqm</h4>
              </div>
            </div>
            <div class="iconst">
              <div class="i3c">
                <i
                  class="fa fa-bed"
                  style="font-size: 24px; color: #464646"
                ></i>
                <h3>Bed rooms:</h3>
                <h4>{{ listingdata.Bedrooms }} + Maid</h4>
              </div>
              <div class="i4c">
                <i
                  class="fa fa-bathtub"
                  style="font-size: 24px; color: #464646"
                ></i>
                <h3>Bathrooms:</h3>
                <h4>{{ listingdata.Batrooms }}</h4>
              </div>
            </div>
            <div class="fd">
              <i class="fa fa-bed" style="font-size: 20px; color: #3f3b44"
                >&nbsp;1 &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;</i
              >
              <i class="fa fa-bath" style="font-size: 22px; color: #3f3b44"
                >&nbsp; 2 &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;</i
              >
              <i
                class="fa fa-area-chart"
                style="font-size: 20px; color: #403b45"
              ></i
              >&nbsp; 761 Sqft
            </div>
            <div class="btn2">
              <button>
                <i class="fa fa-check-circle" style="font-size: 20px"></i
                >Verified
              </button>
              <p>
                Verified listings have passed through our verification process,
                where the authenticity of the documentation, location, and price
                are all checked.
              </p>
            </div>
          </div>

          <div class="back123">
            <div style="display: flex">
              <h3>5,999,999 AED</h3>
              <button class="b2">
                <i class="fa fa-ellipsis-h" style="font-size: 24px"></i>
              </button>
            </div>
            <div class="external">
              <h4>Estimated Mortgage</h4>
              <i
                class="fa fa-calculator"
                style="font-size: 20px; color: #3b97ba; margin-left: 8px"
              ></i>
              <p1>23,345 AED/month</p1>
            </div>
            <div>
              <button class="exterme">Interested</button>
            </div>
          </div>

          <hr style="margin-top: 30px" />
          <div class="located">
            <h1>Location</h1>
            <div style="position: relative">
              <img v-bind:src="listingdata.cover_image" class="imgs" />
              <div style="position: absolute; top: 62px; left: 60px">
                <button class="f1">Map</button>
              </div>
              <div class="ytf">
                <h3
                  style="
                    font-size: large;
                    font-weight: 400;
                    color: #403b45;
                    font-family: sans-serif;
                  "
                >
                  {{ listingdata.property_location }}
                </h3>
                <h4
                  style="
                    font-size: large;
                    font-weight: 400;
                    color: #403b45;
                    font-family: sans-serif;
                  "
                >
                  Dubai, Jumeirah Village Circle
                </h4>
              </div>
            </div>
          </div>
          <hr style="margin-top: 80px" />
          <h1
            style="
              font-size: 20px;
              font-family: sans-serif;
              font-weight: 700;
              color: #403b45;
              margin-top: 40px;
              margin-left: 12px;
            "
          >
            Amenities
          </h1>
          <div style="width: 100%; display: flex">
            <div style="width: 50%; margin-left: 15px">
              <p
                v-for="anmenities in listingdata.Amenities_ID__Amenities_Name"
                :key="anmenities"
              >
                {{ anmenities["Amenities_ID__id"] }}
              </p>
            </div>
          </div>

          <!-- <div style="width:50%; color:#403b45;">
          </div> -->
          <hr style="margin-top: 30px" />
          <div class="process" id="qwerty">
            <h1
              style="
                font-size: 20px;
                font-family: sans-serif;
                font-weight: 700;
                color: #403b45;
                margin-top: 50px;
                margin-left: 12px;
              "
            >
              Description
            </h1>
            <p
              style="
                font-size: 16px;
                font-family: sans-serif;
                color: #403b45;
                margin-left: 10px;
              "
            >
              Azco Real Estate is pleased to offer this magnificent 2 Bedroom
              Apartment in Binghatti Gems. Property is spread over 980.26sqft /
              91.06 sqr.mtr and has a modern outstanding finishing.
              <br />
              <br />
              <br />
              PROPERTY FEATURES:
              <br />
              2 Bedroom Apartment
              <br />
              2 Bathrooms
              <br />
              Balcony
              <br />
              Covered Parking
              <br />
              Central A/C
              <br />
              Shared Pool
              <br />
              Shared Gym
              <br />
              Near Supermarket
              <br />
              Public Transport
              <br />
              ■ PRICE DETAILS:
              <br />
              ■ Sale Price : AED 780,000
              <br />
              ■ Service Charge : AED 11 Dirhams
              <br />
              <br />
              <br />
              ■ For further details or to arrange a viewing appointment please
              contact Haider Abbasi Phone number on Display visit
              azcorealestate.ae where you will find an extensive selection of
              properties available both for sale and for rent. Azco Real Estate
              also provides Holiday Homes, Property Management and Facility
              Management services too. Buyers, Sellers, and Tenants can reach us
              anytime. Thank you for Choosing Azco Real Estate!
            </p>
          </div>
          <div>
            <button class="btn3" id="bt3" @click="myfunction()">
              <i
                class="fa fa-arrow-down"
                style="font-size: 15px; color: red"
              ></i>
              Read More
            </button>
            <button
              class="btn4"
              style="display: none"
              id="bt4"
              @click="myfunction2()"
            >
              <i class="fa fa-arrow-up" style="font-size: 15px; color: red"></i>
              Read Less
            </button>
          </div>
          <hr style="margin-top: 30px" />
          <h2
            style="
              margin-top: 20px;
              font-family: sans-serif;
              font-size: 20px;
              font-weight: 700;
              color: #403b45;
              margin-left: 12px;
            "
          >
            Mortgage
          </h2>
          <div class="flex">
            <h2>
              <i
                class="fa fa-calculator"
                style="font-size: 25px; color: #6e6774; margin: auto"
              ></i>
              Mortage Calculator
            </h2>
            <h3
              style="
                font-size: 15px;
                font-weight: 400;
                font-family: sans-serif;
                margin-left: 32px;
                margin-top: -10px;
              "
            >
              Estimate your monthly mortgage payments
            </h3>
            <div class="buttons34">
              <div class="buttons344">
                <h4
                  style="
                    margin: 0;
                    color: #3f3b44;
                    padding-left: 10px;
                    font-size: 0.9em;
                    font-family: sans-serif;
                    font-weight: 500;
                  "
                >
                  Property Price
                </h4>
                <h4
                  style="
                    margin: 0;
                    color: #3f3b44;
                    padding-left: 10px;
                    font-size: 1em;
                    font-family: sans-serif;
                    font-weight: 500;
                    margin-top: 5px;
                  "
                >
                  {{ listingdata.property_pricing }}AED
                </h4>
              </div>
              <div class="buttons344">
                <h4
                  style="
                    margin: 0;
                    color: #3f3b44;
                    padding-left: 10px;
                    font-size: 0.9em;
                    font-family: sans-serif;
                    font-weight: 500;
                  "
                >
                  Loan Term
                </h4>
                <h4
                  style="
                    margin: 0;
                    color: #3f3b44;
                    padding-left: 10px;
                    font-size: 1em;
                    font-family: sans-serif;
                    font-weight: 500;
                    margin-top: 5px;
                  "
                >
                  25 Years
                </h4>
              </div>
              <div class="buttons3445" style="justify-content: space-between">
                <div>
                  <h4
                    style="
                      margin: 0;
                      padding-left: 10px;
                      color: #3f3b44;
                      font-size: 0.9em;
                      font-family: sans-serif;
                      font-weight: 500;
                    "
                  >
                    Down Payment
                  </h4>
                  <h4
                    style="
                      margin: 0;
                      padding-left: 10px;
                      color: #3f3b44;
                      font-size: 1em;
                      font-family: sans-serif;
                      font-weight: 500;
                      margin-top: 5px;
                    "
                  >
                    156,000 AED
                  </h4>
                </div>
                <!-- <div style="border-left: 1px solid gray;background-color :#f7f7ff;">
                          <h4 style="margin:0;padding-left: 10px;color: #3f3b44;font-size: .9em; font-family: sans-serif;font-weight: 500;">Percent</h4>
                      <h4 style="margin:0;padding-left: 10px;color: #3f3b44;font-size: 1em; font-family: sans-serif;font-weight: 500; margin-top:5px;">20%</h4>
                      </div> -->
              </div>
              <div class="buttons344">
                <h4
                  style="
                    margin: 0;
                    padding-left: 10px;
                    color: #3f3b44;
                    font-size: 0.9em;
                    font-family: sans-serif;
                    font-weight: 500;
                  "
                >
                  Interest Rate
                </h4>
                <h4
                  style="
                    margin: 0;
                    padding-left: 10px;
                    color: #3f3b44;
                    font-size: 1em;
                    font-family: sans-serif;
                    font-weight: 500;
                    margin-top: 5px;
                  "
                >
                  4.50%
                </h4>
              </div>
            </div>
            <br />
            <!-- <div class="decoration">
                    <div>
                      <h4 style="font-size:0,9rem;font-family:sans-serif;
                      font-weight: 500;color:#403b45;margin:0">Monthly Payment</h4>
                      <h1 style="font-size:2.3em;font-weight:bold;margin:0;font-family:sans-serif;color:#2d2b2f;">3,468 <b style="font-weight:100;font-size:15px;vertical-align:top;">AED</b></h1>
                      <h6 style="font-size:16px;font-weight:200;font-family:sans-serif;margin:auto;color:#403b45">view upfront costs
                      <hr>
                      </h6>
                    </div>
                     <div class="bt34">
                          <button style="border:none;padding:25px;background-color:#16B9CA;font-size: 18px;color:white; border-radius: 3px;">Get pre-approved</button>
                      </div>
                </div>
                  <hr style="margin-top:20px;color:#f8f8f8;">
                  <h5 style="font-size:0.8em;font-family:sans-serif;color:#555;text-align: center; padding: 0.5em;">
                      Find out why thousands of homebuyers choose <a href="#" style="color:#3b97ba;">Mortgage Finder</a> as their preferred advisor.
                  </h5> -->
          </div>
          <hr style="margin-top: 40px" />
        </div>
        <div class="four1">
          <div class="card">
            <div style="display: flex">
              <h3>{{ listingdata.property_pricing }}AED</h3>
              <button class="b2">
                <i class="fa fa-ellipsis-h" style="font-size: 24px"></i>
              </button>
            </div>
            <div class="external">
              <h4>Estimated Mortgage</h4>
              <i
                class="fa fa-calculator"
                style="font-size: 20px; color: #3b97ba; margin-left: 8px"
              ></i>
              <p1>23,345 AED/month</p1>
            </div>
            <div style="width: 100%">
              <button @click="Intrested(listingdata.id)" class="exterme">
                Interested
              </button>
            </div>
            <hr style="margin-top: 30px" />
            <div>
              <button class="output">
                <i class="fa fa-heart-o" style="font-size: 15px"></i>
                Save to shortlist
              </button>
            </div>
          </div>
          <div class="form">
            <h5
              style="
                font-size: 20px;
                font-weight: 700;
                font-family: sans-serif;
                color: #403b45;
                text-align: center;
              "
            >
              Own this property from just
            </h5>
            <h1
              style="
                font-size: 25px;
                font-weight: 800;
                font-family: sans-serif;
                color: #403b45;
                text-align: center;
              "
            >
              3,468 AED/month
            </h1>
            <h4
              style="
                font-size: 20px;
                font-weight: 500;
                font-family: sans-serif;
                color: #403b45;
                text-align: center;
              "
            >
              Fixed rates from 4.50%
            </h4>
            <button class="f2">Mortgage Calculator</button>
          </div>
        </div>
      </div>

      <!-- <.---------cards--------->
      <div class="flow">
        <h1
          style="
            font-family: sans-serif;
            color: #403b45;
            font-weight: 700;
            font-size: 20px;
          "
        >
          More available in the same area
        </h1>

        <a href="#" style="text-decoration: none"></a>
        <div class="back1">
          <div class="phone22" v-for="(value, key) in rent" :key="key">
            <a href="">
              <img
                v-bind:src="value.cover_image"
                style="width: 100%; height: 300px"
              />
              <p
                style="
                  font-size: 15px;
                  color: #7d8183;
                  line-height: normal;
                  text-transform: uppercase;
                  margin: 0;
                  margin-left: 15px;
                "
              >
                Appartment
              </p>
              <h3
                style="
                  font-size: 18px;
                  color: #403b45;
                  margin: 0;
                  margin-left: 15px;
                  margin-top: 10px;
                "
              >
                {{ value.property_pricing }} AED
              </h3>
              <p
                style="
                  font-size: 15px;
                  color: #403b45;
                  font-family: sans-serif;
                  margin: 0;
                  margin-left: 15px;
                  margin-top: 10px;
                "
              >
                Luma21,Jumeirah Village Circle, Dubai.
              </p>
              <p
                style="
                  margin: 0;
                  margin-left: 15px;
                  margin-top: 10px;
                  padding-bottom: 15px;
                "
              >
                <i class="fa fa-bed" style="font-size: 20px"
                  >&nbsp;{{ value.Bedrooms }}|</i
                >
                <i class="fa fa-bath" style="font-size: 22px; color: #3f3b44"
                  >&nbsp; {{ value.Batrooms }}|</i
                >
                <i
                  class="fa fa-area-chart"
                  style="font-size: 20px; color: #403b45"
                ></i
                >&nbsp; {{ value.size }} Sqft
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

// import { useState } from "vue";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      listingdata: "",
      rent: [],
      propertyType: [],
      propertyimage: {},
      currentSlide: 0,
    };
  },
  created() {
    onMounted(() => {
      console.log(this.$store.state.data);
      this.getlistingid();
      this.RentData();
    });
  },

  methods: {
    openFulimg(pic) {
      console.log(pic);
      var fulimgbox = document.getElementById("fulimgbox");
      var fulimg = document.getElementById("fulimg");
      fulimgbox.style.display = "flex";
      fulimg.src = pic;
    },
    closeFulimg() {
      var fulimgbox = document.getElementById("fulimgbox");

      fulimgbox.style.display = "none";
    },
    myfunction() {
      var element = document.getElementById("bt3");
      var element2 = document.getElementById("bt4");
      var element3 = document.getElementById("qwerty");
      element.style.display = "none";
      element2.style.display = "block";
      element3.style.height = "auto";
    },
    myfunction2() {
      var element = document.getElementById("bt3");
      var element2 = document.getElementById("bt4");
      var element3 = document.getElementById("qwerty");
      element.style.display = "block";
      element2.style.display = "none";
      element3.style.height = "285px";
    },
    async getlistingid() {
      const listingid = this.$store.state.data.id;
      console.log(listingid);
      // let token = this.$ls.get("token");
      let user_id = this.$ls.get("id");
      console.log(user_id);
      const response = await axios.get(
        "http://18.177.139.152/list/get/" + listingid + "/",
        {
          params: {
            user_id,
          },
        }
      );
      console.log(response.data);
      this.listingdata = response.data;
      this.propertyType = response.data.property;
      // this.propertyimage = response.data.list;
      response.data.list.forEach((element) => {
        let path = "http://18.177.139.152" + element.image_path;
        let url = "http://18.177.139.152" + element.images_Url;
        this.propertyimage.image_path = path;
        this.propertyimage.images_Url = url;
        this.propertyimage.listing = element.listing;
      });
      console.log(this.propertyimage);

      // const check = "http://18.177.139.152/list/get/" + listingid ,;
      // console.log(check);
    },
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
          console.log(this.rent, "rent data");
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    },
    Intrested(id) {
      console.log(id, "id");
      // this.$router.push({
      //   path: "/rentQuestionair",
      // });
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
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};

// document.addEventListener("mouseup", function (e) {
//   var container = document.getElementById("fulimgbox");
//   if (!container.contains(e.target)) {
//     fulimgbox.style.display = "none";
//   }
// });
</script>
<style>
.gallery_img {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
/* .gallery_img img{
       object-fit: cover;
       width:300px;
       height:300px;
       cursor: pointer;
   } */
/* .gallery_img img:hover{
       transform: scale(0.8) rotate(-15deg);
       box-shadow: 0 32px 75px rgba(68, 77, 136, 0.2);
       border-radius: 20px;
   } */

.full_img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.full_img img {
  width: 70%;
  max-width: 100%;
}
.spannn {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 30px;
  color: white;
  cursor: pointer;
}
.widthi {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width: 600px) {
  .gallery_img {
    display: none;
  }
  .full_img {
    display: block;
    position: relative;
    height: 100%;
    background: white;
  }
  .widthi {
    width: 100%;
  }
}

body {
  padding: 0;
  margin: 0;
}
.web1 {
  display: flex;
  width: 95%;
  margin-left: 2px;
  margin-top: 10px;
}
.textc h2 {
  color: #403b45;
  letter-spacing: 0.05rem;
  font-size: 18px;
  font-weight: 100;
  margin-left: 10px;
}
.textc h1 {
  color: rgb(64, 59, 69);
  font-family: sans-serif;
  font-size: 25px;
  margin-left: 10px;
}
.iconst {
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  align-items: center;
}
.i1c {
  display: flex;
  align-items: center;
  width: 50%;
}
.i1c h3 {
  color: #403b45;
  font-family: sans-serif;
  padding-left: 10px;
  font-weight: 20;
  font-size: 16px;
  margin-top: 10px;
}
.i1c h4 {
  font-family: sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-left: 50px;
  margin-top: 12px;
}
.i2c {
  display: flex;
  align-items: center;
}
.i2c h3 {
  color: #403b45;
  font-family: sans-serif;
  padding-left: 10px;
  font-weight: 20;
  font-size: 16px;
  margin-top: 10px;
}
.i2c h4 {
  font-family: sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-left: 50px;
  margin-top: 12px;
}
.i3c {
  display: flex;
  align-items: center;
  line-height: normal;
  width: 50%;
}
.i3c h3 {
  color: #403b45;
  font-family: sans-serif;
  padding-left: 10px;
  font-weight: 20;
  font-size: 16px;
  margin-top: 10px;
}
.i3c h4 {
  font-family: sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-left: 65px;
  margin-top: 12px;
}
.i4c {
  display: flex;
  align-items: center;
}
.i4c h3 {
  color: #403b45;
  font-family: sans-serif;
  padding-left: 10px;
  font-weight: 20;
  font-size: 16px;
  margin-top: 14px;
}
.i4c h4 {
  font-family: sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-left: 65px;
  margin-top: 14px;
}
/* .imge{
    width: 30px;
    height: 20px;
    color:#403b45;
} */
.btn2 {
  width: 95%;
  background-color: #dcd8d8;
  border-radius: 10px;
  margin-left: 8px;
}
.btn2 button {
  margin: 10px;
  background-color: #39a76d;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
}
.btn2 p {
  margin: 10px;
  font-size: 18px;
  color: #403b45;
}
.card {
  width: 95%;
  background-color: white;
  border: 1px solid white;
  box-shadow: 0px 0px 5px 2px grey;
  padding: 15px;
  border-radius: 5px;
  position: -webkit-sticky;
  position: sticky;
  top: 5px;
  margin-left: 10px;
}
.back123 {
  display: none;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  box-shadow: 0px 0px 5px 2px grey;
  padding: 15px;
  border-radius: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  /* margin: 0; */
}
.back123 h3 {
  margin: 0px;
  font-size: 24px;
  font-weight: bold;
  font-family: sans-serif;
}
.b2 {
  height: 30px;
  margin-left: 10px;
  border: transparent;
  background-color: transparent;
}
.b2:hover {
  background-color: rgb(234, 229, 229);
}
.card h3 {
  margin: 0px;
  font-size: 24px;
  font-weight: bold;
  font-family: sans-serif;
}
.external {
  display: flex;
  margin-top: 10px;
}
.external h4 {
  font-size: 18px;
  margin: 0;
  font-family: sans-serif;
  color: #403b45;
  font-weight: 100;
}
.external p1 {
  font-size: 20px;
  color: #3b97ba;
  font-weight: 100;
}
.exterme {
  width: 100%;
  background-color: #16b9ca;
  border: none;
  padding: 10px;
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  /* margin-top: 30px; */
  border-radius: 5px;
}
.exterme:hover {
  background-color: #16b9ca;
}
.output {
  padding: 10px;
  background-color: #16b9ca;
  /* border:2px solid lightgray; */
  border: none;
  color: white;
  align-items: center;
  font-weight: 500;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
.output:hover {
  background-color: #16b9ca;
}
.located {
  width: 100%;
}
.located h1 {
  font-family: sans-serif;
  font-size: 20px;
  color: #403b45;
  margin-top: 30px;
  margin-left: 10px;
}
.imgs {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: 10px;
}
.f1 {
  border: none;
  background-color: rgb(252, 248, 248);
  color: black;
  padding: 10px;
}
.f1:hover {
  background-color: #16b9ca;
}
.form {
  background-color: white;
  border: 1px solid white;
  box-shadow: 0px 0px 5px 2px grey;
  margin-top: 30px;
  padding: 15px;
  width: 80%;
  margin-left: 20px;
  margin-right: 20px;
}
.f2 {
  border: none;
  background-color: white;
  color: #ef5e4e;
  width: 100%;
  padding: 0.7rem;
  font-weight: 700;
  font-family: sans-serif;
  font-size: 15px;
}
.f2:hover {
  background-color: rgb(234, 229, 229);
}
.process {
  overflow: hidden;
  height: 292px;
}
.btn3 {
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 5px;
  color: #403b45;
}
.btn3:hover {
  background-color: #16b9ca;
}
.btn4 {
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 5px;
  color: #403b45;
}
.btn4:hover {
  background-color: #16b9ca;
}
.flex {
  padding: 15px;
  background-color: #f7f7ff;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
}
.buttons34 {
  width: 100%;
  justify-content: space-between;
  display: flex;
}
.buttons344 {
  margin: 10px;
  background-color: white;
  border: 1px solid rgb(171, 170, 170);
  border-radius: 3px;
  padding: 6px;
  width: 20%;
  justify-content: space-between;
}

.decoration {
  display: flex;
  justify-content: space-between;
}
.mainblock {
  width: 70%;
}
.flow {
  background-color: #f7f5f5;
  padding: 20px;
}
.content {
  align-items: center;
}
/* .imge{
    width: 25px;
    height: 20px;
} */
p {
  color: #403b45;
}
.buttons3445 {
  margin: 10px;
  width: 25%;
  background-color: white;
  border: 1px solid rgb(171, 170, 170);
  border-radius: 3px;
  padding: 6px;
  display: flex;
}
/* .four1{
    width:30%;
} */
.fd {
  display: none;
}
.ytf {
  margin-left: 200px;
  margin-top: -100px;
}
.hp {
  display: none;
}
.back1 {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-flow: wrap;
}
.phone22 {
  width: 250px;
  background-color: white;
  margin-left: 30px;
  margin-bottom: 20px;
}
.J23 {
  display: flex;
  justify-content: center;
}
.G45 {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}
@media screen and (max-width: 920px) {
  .form {
    display: none;
  }
  .card {
    display: none;
  }
  .mainblock {
    width: 100%;
  }

  .back123 {
    /* width:100%; */
    display: flex;
    justify-content: space-around;
    /* margin:-3px; */
  }
  .output {
    display: none;
  }
  .external {
    display: none;
  }
}
@media screen and (max-width: 800px) {
  .buttons34 {
    display: block;
  }
  .buttons344 {
    width: 95%;
  }
  .buttons3445 {
    width: 95%;
  }
}
@media screen and (max-width: 600px) {
  .text h2 {
    display: none;
  }
  .i1 {
    display: none;
  }
  .text h1 {
    font-weight: 700;
    font-size: 20px;
    margin-left: 50px;
    margin-right: 40px;
  }
  .iconst {
    display: none;
  }
  .fd {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    align-items: baseline;
  }

  .located h1 {
    margin-left: 15px;
  }
  .ytf {
    /* margin-top:-140px; */
    margin-left: 180px;
  }
  .imgs {
    margin-left: 10px;
  }
  .btn {
    margin-left: 18px;
    margin-right: 10px;
    margin-top: 10px;
  }
  .hp {
    display: block;
  }
  /* .f1{
        margin-left: 10px;
    } */
  .back1 {
    display: block;
  }
  .phone22 {
    width: 80%;
    border: 1px solid black;
  }
  .textc h2 {
    font-size: 14px;
    margin-top: 10px;
    margin-left: 20px;
  }
  .textc h1 {
    font-size: 18px;
    margin-left: 22px;
    margin-top: 10px;
  }
  .btn2 {
    width: 100%;
    margin-top: 10px;
  }
  .btn2 button {
    height: 30px;
  }
  .J23 {
    font-size: 20px;
    align-items: center;
  }
  .G45 {
    font-size: 16px;
  }
}
.small_card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 30%;
  border-radius: 10%;
}

.small_card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.small_image {
  border-radius: 10%;
  border: 2px solid #9ce0ea;
}
.images_slider_view_listing {
  height: 580px;
  border-radius: 25px;
  border: 2px solid #9ce0ea;
}
</style>
