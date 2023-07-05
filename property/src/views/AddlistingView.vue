<template>
  <div>
    <h3 class="text-center my-5"><b>Add listing</b></h3>

    <form id="app" @submit.prevent="checkForm()">
      <div class="form-group" v-if="errors.length">
        <p
          class="badge badge-danger"
          v-for="error in errors"
          v-bind:key="error"
        >
          {{ error }}
        </p>
      </div>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row px-5 mb-4">
        <div class="col-md-6">
          <div class="form-outline">
            <label class="form-label" for="form6Example1"><b>Title</b></label>
            <input
              type="text"
              id="form6Example1"
              placeholder="Title"
              class="form-control"
              required
              name="Title"
              v-model="Title"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-outline">
            <label class="form-label" for="form6Example2"
              ><b> Descriptions</b></label
            >
            <input
              type="text"
              id="form6Example2"
              placeholder="Descriptions"
              class="form-control"
              required
              name="Descriptions"
              v-model="Descriptions"
            />
          </div>
        </div>
      </div>

      <!--type and Purpose-->
      <div class="row px-4 mb-4">
        <div class="col-md-6">
          <div class="container">
            <h6 class="text-center"><b>Type</b></h6>
            <div class="text-center">
              <div
                class="btn-group Type"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="Type"
                  id="btnradio1"
                  required
                  v-model="Type"
                  autocomplete="off"
                  v-bind:value="'Residential'"
                  checked
                />
                <label
                  class="btn btn btn-info"
                  style="background-color: #16b9ca"
                  for="btnradio1"
                  >Residential</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  v-model="Type"
                  name="Type"
                  id="btnradio2"
                  v-bind:value="'Commercial'"
                />
                <label
                  class="btn btn btn-info"
                  style="background-color: #16b9ca"
                  for="btnradio2"
                  >Commercial</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="container">
            <h6 class="text-center"><b>Purpose</b></h6>
            <div class="text-center">
              <div
                class="btn-group Purpose"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="Purpose"
                  id="btnradio3"
                  v-model="Purpose"
                  v-bind:value="'Sell'"
                  autocomplete="off"
                  checked
                  required
                />
                <label
                  class="btn btn btn-info"
                  for="btnradio3"
                  style="background-color: #16b9ca"
                  >Sell</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  name="Purpose"
                  id="btnradio4"
                  v-model="Purpose"
                  v-bind:value="'Rent'"
                />
                <label
                  class="btn btn btn-info"
                  for="btnradio4"
                  style="background-color: #16b9ca"
                  >Rent</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--property type badroom bathroom-->
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-md-4">
            <h6><b>Property Type</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              required
              v-model="property_type"
              name="property_type"
            >
              <option selected>select</option>
              <option value="Apartment">Apartment</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Compound">Compound</option>
              <option value="Duplex">Duplex</option>
              <option value="Full floor">Full floor</option>
              <option value="Half floor">Half floor</option>
              <option value="Land">Land</option>
              <option value="Pent House">Pent House</option>
              <option value="Town House">Town House</option>
              <option value="Villa">Villa</option>
              <option value="Whole Building">Whole Building</option>
              <option value="Hotel apartment">Hotel Apartment</option>
              <option value="Bulk units">Bulk units</option>
            </select>
          </div>
          <div class="col-md-4">
            <h6><b>Bedrooms</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              required
              v-model="Bedrooms"
              name="Bedrooms"
            >
              <option selected>Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="col-md-4">
            <h6><b>Bathrooms</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="Batrooms"
              name="Batrooms"
              required
            >
              <option selected>Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
      </div>
      <!-- furnishing tenure size -->
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-md-4">
            <h6><b>Furnishing Type</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="Furnishing_type"
              name="Furnishing_type"
              required
            >
              <option selected>select</option>
              <option value="Unfurnished">Unfurnished</option>
              <option value="Semi-furnished">Semi-furnished</option>
              <option value="Furnished">Furnished</option>
            </select>
          </div>
          <div class="col-md-4">
            <h6><b>Tenure of the Property</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="Property_Tenure"
              name="Property_Tenure"
              required
            >
              <option selected>Select</option>
              <option value="FreeHold">FreeHold</option>
              <option value="Non FreeHold">Non FreeHold</option>
              <option value="LeaseHold">LeaseHold</option>
            </select>
          </div>
          <div class="col-md-4">
            <h6><b>size</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="L*W"
              class="form-control"
              v-model="size"
              name="size"
              required
            />
          </div>
        </div>
      </div>

      <!-- Number input -->
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-md-4">
            <h6><b>Build up Area</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="Area"
              class="form-control"
              v-model="Build_up_Area"
              name="Build_up_Area"
              required
            />
          </div>
          <div class="col-md-4">
            <h6><b>No of Parking Space</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="0"
              class="form-control"
              v-model="parking_number"
              name="parking_number"
              required
            />
          </div>
          <div class="col-md-4">
            <h6><b>Property Developer</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="Developer Name"
              class="form-control"
              v-model="Property_Developer"
              name="Property_Developer"
              required
            />
          </div>
        </div>
      </div>

      <!-- Build Year -Floor No -->
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-md-4">
            <h6><b>Build Year</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="2022"
              class="form-control"
              v-model="Build_year"
              name="Build_year"
              required
            />
          </div>
          <div class="col-md-4">
            <h6><b>Building floor</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="0"
              class="form-control"
              v-model="Building_Floor"
              name="Building_Floor"
              required
            />
          </div>
          <div class="col-md-4">
            <h6><b>Floor No</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="0"
              class="form-control"
              v-model="Floor_number"
              name="Floor_number"
              required
            />
          </div>
        </div>
      </div>

      <!-- Dewa-Project Status -->
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-md-4">
            <h6><b>Dewa Number</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="Dewa"
              class="form-control"
              v-model="Dewa_number"
              name="Dewa_number"
              required
            />
          </div>
          <div class="col-md-4">
            <h6><b>Occupancy</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="Occupancy"
              name="Occupancy"
              required
            >
              <option selected>select</option>
              <option value="Owner occupied">Owner occupied</option>
              <option value="Investment">Investment</option>
              <option value="Vacant">Vacant</option>
              <option value="Tenented">Tenented</option>
            </select>
          </div>
          <div class="col-md-4">
            <h6><b>Project Status</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="Project_status"
              name="Project_status"
              required
            >
              <option selected>select</option>
              <option value="Off plan">Off Plan</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Renovation Type -->
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-md-6">
            <h6><b>Renovation Type</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="Renovation_type"
              name="Renovation_type"
              required
            >
              <option selected>select</option>
              <option value="Fully upgraded">Fully upgraded</option>
              <option value="Partially upgraded">Partially upgraded</option>
            </select>
          </div>
          <div class="col-md-6">
            <h6><b>Layout Type</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="Dewa"
              class="form-control"
              v-model="Layout_type"
              name="Layout_type"
              required
            />
          </div>
        </div>
      </div>
      <!--Media-->

      <h3 class="text-center my-5"><b>Media</b></h3>
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-md-6">
            <div class="text-center mt-4">
              <div class="container">
                <input
                  type="file"
                  name="file"
                  ref="file"
                  v-on:change="handleFilesUpload()"
                  required
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h6><b>Select Amenities</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              name="Amenities_ID"
              v-model="Amenities_ID"
              required
            >
              <option value="1" selected>Dishwasher</option>
              <option value="2">Fireplace</option>
              <option value="3">Swimming pool</option>
            </select>
          </div>
        </div>
      </div>
      <!--Pricing-->

      <h3 class="text-center my-5"><b>Pricing</b></h3>
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-md-4">
            <h6><b>Property Price</b></h6>
            <input
              type="text"
              id="form6Example1"
              placeholder="AED"
              class="form-control"
              v-model="property_pricing"
              name="property_pricing"
              required
            />
          </div>
          <div class="col-md-8 d-flex justify-content-between">
            <div class="col-4 w-50">
              <h6><b>Service Charges-Monthly</b></h6>
              <input
                type="text"
                id="form6Example1"
                placeholder="AED"
                class="form-control"
                v-model="Service_charge"
                name="Service_charge"
                required
              />
            </div>
            <div class="col-4 w-50 px-4">
              <h6><b>Price on Application</b></h6>
              <div class="form-check form-switch pt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-6">
            <h6><b>Financial Status</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="financial_status"
              name="financial_status"
              required
            >
              <option selected>select</option>
              <option value="Mortgaged">Mortgaged</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
          <div class="col-6">
            <h6><b>Cheques</b></h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="Cheques"
              name="Cheques"
              required
            >
              <option selected>select</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
      </div>
      <!--Location-->
      <h3 class="text-center my-5"><b>Location</b></h3>
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-md-6">
            <h6><b>Property Location</b></h6>
            <input
              type="text"
              id="property_location"
              placeholder="AED"
              class="form-control"
              v-model="property_location"
              name="property_location"
              ref="origin"
              required
            />
          </div>
          <div class="col-md-6">
            <h6><b>Street Address</b></h6>
            <input
              type="text"
              id="street_Address"
              placeholder="Address"
              class="form-control"
              v-model="street_Address"
              name="street_Address"
              required
            />
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row px-4 mb-4">
          <div class="col-m-6">
            <h6><b>Floor Plan</b></h6>
            <input
              class="form-control"
              type="file"
              id="formFileMultiple"
              multiple
              required
            />
          </div>
          <div class="col-m-6">
            <h6><b>Project name</b></h6>
            <input
              type="text"
              id="street_Address"
              placeholder="Address"
              class="form-control"
              v-model="project_name"
              name="project_name"
              required
            />
          </div>
        </div>
      </div>
      <div class="text-center">
        <!-- /AddQuestionair -->
        <button
          type="submit"
          style="background-color: #16b9ca"
          class="btn btn-info"
        >
          Submit
        </button>
      </div>
    </form>
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
// import { toast } from "bulma-toast";
import { useSetTitle } from "@/composables";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
var user_id = "";
// import { mount } from "@vue/test-utils";
export default {
  name: "AddlistingView",
  computed: {
    ...mapState({
      data: (state) => state.data,
    }),
  },
  setup() {
    useSetTitle("Addlisting");
  },
  components: {
    Loading,
  },

  data() {
    return {
      Title: "",
      Descriptions: "",
      Type: "",
      Purpose: "",
      property_type: "",
      Bedrooms: "",
      Batrooms: "",
      Furnishing_type: "",
      Property_Tenure: "",
      size: "",
      Build_up_Area: "",
      parking_number: "",
      Property_Developer: "",
      Build_year: "",
      Building_Floor: "",
      Floor_number: "",
      Dewa_number: "",
      Occupancy: "",
      Project_status: "",
      Renovation_type: "",
      Layout_type: "",
      file: "",
      Amenities_ID: "",
      property_pricing: "",
      Service_charge: "",
      financial_status: "",
      Cheques: "",
      street_Address: "",
      property_location: "",
      project_name: "",
      latitude: "",
      longitude: "",
      user_id: "",
      errors: [],
      isLoading: false,
    };
  },
  mounted() {
    for (let ref in this.$refs) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        this.$refs[ref]
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        let ac = place.address_components;
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.property_location = place.formatted_address;
        let city = ac[0]["long_name"];
        console.log(
          `The user picked ${city} with the coordinates ${this.latitude}, ${this.longitude},${this.property_location}`
        );
      });
    }
  },
  methods: {
    ...mapMutations(["updateData"]),
    checkForm() {
      const token = localStorage.getItem("token");
      user_id = localStorage.getItem("user_id");
      console.log(user_id);
      console.log("Bearer" + " " + token);
      this.errors = [];
      if (this.Title == "") {
        console.log("1");
        this.errors.push("The title is missing");
      }
      if (this.Descriptions == "") {
        console.log("2");
        this.errors.push("The description is missing");
      }
      console.log(this.Type);
      if (this.Type == "") {
        console.log("3");
        this.errors.push("The type is missing");
      }
      if (this.Purpose == "") {
        console.log("4");
        this.errors.push("The type is missing");
      }
      if (this.property_type == "") {
        console.log("5");
        this.errors.push("The property_type is missing");
      }
      if (this.Bedrooms == "") {
        console.log("6");
        this.errors.push("The Bedrooms is missing");
      }
      if (this.Batrooms == "") {
        console.log("7");
        this.errors.push("The Batrooms is missing");
      }
      if (this.Furnishing_type == "") {
        console.log("8");
        this.errors.push("The Furnishing_type is missing");
      }
      if (this.Property_Tenure == "") {
        console.log("9");
        this.errors.push("The Furnishing_type is missing");
      }
      if (this.size == "") {
        console.log("10");
        this.errors.push("The size is missing");
      }
      if (this.Build_up_Area == "") {
        console.log("11");
        this.errors.push("The Build_up_Area is missing");
      }
      if (this.parking_number == "") {
        console.log("12");
        this.errors.push("The parking_number is missing");
      }
      if (this.Property_Developer == "") {
        console.log("13");
        this.errors.push("The Property_Developer is missing");
      }
      if (this.Build_year == "") {
        console.log("14");
        this.errors.push("The Build_year is missing");
      }
      if (this.Building_Floor == "") {
        console.log("15");
        this.errors.push("The Building_Floor is missing");
      }
      if (this.Floor_number == "") {
        console.log("16");
        this.errors.push("The Floor_number is missing");
      }
      if (this.Dewa_number == "") {
        console.log("17");
        this.errors.push("The Dewa_number is missing");
      }
      if (this.Occupancy == "") {
        console.log("18");
        this.errors.push("The Occupancy is missing");
      }
      if (this.Project_status == "") {
        console.log("19");
        this.errors.push("The Project_status is missing");
      }
      if (this.Renovation_type == "") {
        console.log("20");
        this.errors.push("The Renovation_type is missing");
      }
      if (this.Layout_type == "") {
        console.log("19");
        this.errors.push("The Layout_type is missing");
      }
      if (this.file == "") {
        console.log("20");
        this.errors.push("The file is missing");
      }
      if (this.property_pricing == "") {
        console.log("22");
        this.errors.push("The property_pricing is missing");
      }
      if (this.Service_charge == "") {
        console.log("23");
        this.errors.push("The Service_charge is missing");
      }
      if (this.financial_status == "") {
        console.log("24");
        this.errors.push("The financial_status is missing");
      }
      if (this.Cheques == "") {
        console.log("25");
        this.errors.push("The Cheques is missing");
      }
      if (this.property_location == "") {
        console.log("26");
        this.errors.push("The property_location is missing");
      }

      if (this.street_Address == "") {
        console.log("27");
        this.errors.push("The street_Address is missing");
      }
      if (this.project_name == "") {
        console.log("28");
        this.errors.push("The project_name is missing");
      }
      console.log(
        this.Title,
        this.Descriptions,
        this.Type,
        this.Purpose,
        this.property_type,
        this.Bedrooms,
        this.Batrooms,
        this.Furnishing_type,
        this.Property_Tenure,
        this.size,
        this.Build_up_Area,
        this.parking_number,
        this.Property_Developer,
        this.Build_year,
        this.Building_Floor,
        this.Floor_number,
        this.Dewa_number,
        this.Occupancy,
        this.Project_status,
        this.Renovation_type,
        this.Layout_type,
        this.file,
        this.Amenities_ID,
        this.property_pricing,
        this.Service_charge,
        this.financial_status,
        this.Cheques,
        this.property_location,
        this.street_Address,
        this.project_name,
        this.latitude,
        this.longitude,
        user_id
      );

      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      };
      if (!this.errors.length) {
        this.isLoading = true;
        const formData = {
          Title: this.Title,
          Descriptions: this.Descriptions,
          Type: this.Type,
          Purpose_Type: this.Purpose,
          property_type: this.property_type,
          Bedrooms: this.Bedrooms,
          Batrooms: this.Batrooms,
          Furnishing_type: this.Furnishing_type,
          Property_Tenure: this.Property_Tenure,
          size: this.size,
          Build_up_Area: this.Build_up_Area,
          parking_number: this.parking_number,
          Property_Developer: this.Property_Developer,
          Build_year: this.Build_year,
          Building_Floor: this.Building_Floor,
          Floor_number: this.Floor_number,
          Dewa_number: this.Dewa_number,
          Occupancy: this.Occupancy,
          Project_status: this.Project_status,
          Renovation_type: this.Renovation_type,
          Layout_type: this.Layout_type,
          images_Url: this.file,
          Amenities_ID: this.Amenities_ID,
          property_pricing: this.property_pricing,
          Service_charge: this.Service_charge,
          financial_status: this.financial_status,
          Cheques: this.Cheques,
          property_location: this.property_location,
          street_Address: this.street_Address,
          latitude: this.latitude,
          longitude: this.longitude,
          project_name: this.project_name,
          user_id: user_id,
        };

        axios
          .post("http://18.177.139.152/list/post/", formData, config)
          .then((response) => {
            console.log(response.data.listing_id);
            const data = {};
            data.CurrentListing = response.data.listing_id;
            console.log(data);
            this.updateData(data);
            if (this.Purpose === "Rent") {
              this.$router.push("/rentQuestionair");
            } else {
              this.$router.push("/sellQuestionair");
            }
          })
          .catch((error) => {
            if (error.response) {
              this.isLoading = false;
              for (const property in error.response.data) {
                this.errors.push(`${property}: ${error.response.data.message}`);
              }
              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              this.errors.push("Something went wrong. Please try again");
              console.log(JSON.stringify(error));
            }
          });
      }
    },
    handleFilesUpload() {
      this.file = this.$refs.file.files[0];
      console.log("imran", this.file);
    },
    Intrested() {
      this.$router.push({
        path: "/rentQuestionair",
      });
    },
  },
};
</script>

<style></style>
