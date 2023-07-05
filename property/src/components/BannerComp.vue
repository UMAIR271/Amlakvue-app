<template>
  <div style="position: relative">
    <img
      src="https://wallpaperaccess.com/full/3885499.jpg"
      class="input_section_image"
    />
    <h1 class="heading">Find your future home</h1>
    <div class="input_section">
      <div style="margin-top: 20px; margin-left: 20px">
        <div id="button-container">
          <div
            class="button1"
            id="rent_id"
            @click="PurposeType('Rent')"
            ref="Rent"
            value="Rent"
            style="position: inherit"
          >
            Rent
          </div>
          <div
            class="button2"
            id="sell_id"
            @click="PurposeType('Sell')"
            style="position: inherit"
            ref="Sell"
            value="Sell"
          >
            Buy
          </div>
        </div>
      </div>
      <div class="input_main">
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
            name="search_data"
            v-model="search_data"
          />
        </div>

        <div class="select_menu">
          <select
            name="property_type"
            aria-placeholder="Property type"
            v-model="property_type"
            class="select"
          >
            <!-- <option class="options" value="" selected>Property_type</option> -->
            <option :value="''" disabled selected>Property_type</option>

            <option class="options" value="Appartent">Appartement</option>
            <option class="options" value="Bungalow">Bungalow</option>
            <option class="options" value="Compound">Compound</option>
            <option class="options" value="Duplex">Duplex</option>
            <option class="options" value="Full floor">Full floor</option>
            <option class="options" value="Half floor">Half floor</option>
            <option class="options" value="Land">Land</option>
            <option class="options" value="Pent House">Pent House</option>
            <option class="options" value="Town House">Town House</option>
            <option class="options" value="Villa">Villa</option>
            <option class="options" value="Whole Building">
              Whole Building
            </option>
            <option class="options" value="Hotel apartments">
              Hotel apartments
            </option>
            <option class="options" value="Bulk units">Bulk units</option>
          </select>

          <div class="display_block">
            <select id="b1" name="Bedrooms" v-model="Bedrooms" class="select">
              <!-- <option disabled selected>Beds</option> -->
              <option :value="''" disabled selected>Beds</option>
              <option class="options" value="1">1</option>
              <option class="options" value="2">2</option>
              <option class="options" value="3">3</option>
              <option class="options" value="4">4</option>
            </select>
            <select id="b1" name="Batrooms" v-model="Batrooms" class="select">
              <!-- <option disabled selected>Baths</option> -->
              <option :value="''" disabled selected>Baths</option>
              <option class="options" value="1">1</option>
              <option class="options" value="2">2</option>
              <option class="options" value="3">3</option>
              <option class="options" value="4">4</option>
            </select>
            <select
              name="Project_status"
              v-model="Project_status"
              class="select"
            >
              <option :value="''" disabled selected>Project status</option>
              <option class="options" value="Off Plan">Off Plan</option>
              <option class="options" value="Completed">Completed</option>
            </select>
            <select id="b2" class="select" style="display: none">
              <option>Area (sqft)</option>
            </select>
          </div>
        </div>
        <div style="margin-right: 20px" class="hyu">
          <button @click="sendData" class="button3">
            <svg viewBox="4 4 15 15" class="searchicon2">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7399 13.6792L18.7806 17.7197C19.0735 18.0126 19.0735 18.4875 18.7806 18.7804C18.4877 19.0733 18.0128 19.0733 17.7199 18.7804L13.6792 14.7399C12.6632 15.5297 11.3865 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 11.3865 15.5297 12.6632 14.7399 13.6792ZM10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.5 7.51472 12.4853 5.5 10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="7" class="input_main1">
        <div id="8" class="below_line">
          <div class="select">
            <input
              class="subinput1"
              type="text"
              placeholder="Min price"
              autocomplete="off"
              name="property_min_pricing"
              v-model="property_min_pricing"
            />
          </div>

          <div class="select">
            <input
              class="subinput1"
              type="text"
              placeholder="Max price"
              autocomplete="off"
              name="property_max_pricing"
              v-model="property_max_pricing"
            />
          </div>
          <select name="Amenities" v-model="Amenities" class="select">
            <option class="options" disabled selected :value="''">
              Amenities
            </option>
            <option class="options" value="Dishwasher">Dishwasher</option>
            <option class="options" value="Fireplace">Fireplace</option>
            <option class="options" value="Swimming Pool">Swimming Pool</option>
          </select>
        </div>
        <!-- <div id="9" class="input2">
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
            placeholder="Keywords: e.g.beach,chiller"
            name="Keywords"
            v-model="Keywords"
            autocomplete="off"
          />
        </div> -->
      </div>
      <div style="display: flex">
        <div style="width: 50%">
          <div
            id="3"
            style="
              display: flex;
              margin-left: 20px;
              width: 300px;
              margin-top: 10px;
            "
            class="lkio"
            onclick="function3()"
          >
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
            <!-- <div style="margin-right: 5px">
              <button
                style="
                  padding: 8px;
                  background-color: white;
                  border: 1px solid gray;
                "
              ></button>
            </div> -->
            <p
              style="
                color: #2d383f;
                font-family: sans-serif;
                margin-left: 7px;
                cursor: pointer;
                margin-top: 7px;
              "
            >
              Show commercial properties only
            </p>
          </div>

          <div
            id="4"
            style="
              display: flex;
              margin-left: 15px;
              display: none;
              width: 300px;
              margin-top: 10px;
            "
            class="lkio"
            onclick="function4()"
          >
            <div style="margin-right: 5px">
              <button
                style="
                  border: none;
                  background-color: transparent;
                  padding-top: 5px;
                "
              ></button>
            </div>
            <p
              style="
                color: #2d383f;
                font-family: sans-serif;
                cursor: pointer;
                margin-top: 7px;
              "
            >
              Show commercial properties only
            </p>
          </div>
        </div>
        <div
          id="5"
          style="width: 50%; padding-right: 25px; margin-top: 10px"
          class="lkio"
          onclick="function5()"
        >
          <p
            style="
              float: right;
              color: #007ea8;
              cursor: pointer;
              margin-top: 7px;
            "
          >
            Show more search options <i class="arrow3 down"></i>
          </p>
        </div>
        <div
          id="6"
          style="
            width: 50%;
            padding-right: 29px;
            display: none;
            margin-top: 10px;
          "
          class="lkio"
          onclick="function6()"
        >
          <p
            style="
              float: right;
              color: #007ea8;
              cursor: pointer;
              margin-top: 7px;
            "
          >
            Show less search options <i class="arrow4 up"></i>
          </p>
        </div>
      </div>
      <div class="search_button">
        <button class="mobile_searchbutton">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      Purpose_Type: "",
      property_type: "",
      Bedrooms: "",
      Batrooms: "",
      Project_status: "",
      property_max_pricing: "",
      property_min_pricing: "",
      Amenities: "",
      search_data: "",
      Keywords: "",
      data: [],
    };
  },
  methods: {
    ...mapMutations(["updateData"]),

    PurposeType(value) {
      if (value === "Sell") {
        console.log(value);
        this.Purpose_Type = value;
        return this.Purpose_Type;
      } else {
        this.Purpose_Type = "Rent";
        console.log(this.Purpose_Type);
        return this.Purpose_Type;
      }
    },
    sendData() {
      console.log("love");
      const data = {};
      console.log(this.Bedrooms);
      if (this.Purpose_Type === "Rent") {
        console.log(this.property_type);
        data.check_Purpose_Type = this.Purpose_Type;
        if (this.property_type) data.check_property_Type = this.property_type;
        if (this.Bedrooms) data.check_bedroom = this.Bedrooms;
        if (this.Batrooms) data.check_batroom = this.Batrooms;
        if (this.Project_status)
          data.check_project_status = this.Project_status;
        if (this.property_min_pricing)
          data.min_price = this.property_min_pricing;
        if (this.property_max_pricing)
          data.max_price = this.property_max_pricing;
        if (this.Amenities) data.check_Amenities = this.Amenities;
        if (this.search_data) data.search_data = this.search_data;
        if (this.Keywords) data.Keywords = this.Keywords;
        console.log(data);
        this.updateData(data);
        this.$router.push({
          name: "PropertyList",
        });
      } else if (this.Purpose_Type === "Sell") {
        data.check_Purpose_Type = this.Purpose_Type;
        if (this.property_type) data.check_property_Type = this.property_type;
        if (this.Bedrooms) data.check_bedroom = this.Bedrooms;
        if (this.Batrooms) data.check_batroom = this.Batrooms;
        if (this.Project_status)
          data.check_project_status = this.Project_status;
        if (this.property_min_pricing)
          data.min_price = this.property_min_pricing;
        if (this.property_max_pricing)
          data.max_price = this.property_max_pricing;
        if (this.Amenities) data.check_Amenities = this.Amenities;
        if (this.Keywords) data.Keywords = this.Keywords;
        console.log(data);
        this.updateData(data);
        this.$router.push({
          name: "PropertyListBuy",
        });
      } else {
        console.log("search");
        if (this.search_data) data.search_data = this.search_data;
        this.updateData(data);
        this.$router.push({
          name: "PropertyList",
        });
      }
      // axios
      //   .get("http://18.177.139.152/list/filter/", { params: params })
      //   .then((response) => {
      //     this.data = response.data;
      //     console.log(this.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    },
  },
  computed: {
    filteredData() {
      return this.data.filter(
        (item) =>
          item.name.toLowerCase().includes(this.searchInput1.toLowerCase()) &&
          item.location.toLowerCase().includes(this.searchInput2.toLowerCase())
        // axios
        //   .get("http://18.177.139.152/list/filter/", { params: params })
        //   .then((response) => {
        //     this.data = response.data;
        //     console.log(this.data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
      );
    },
  },
};
</script>
<style>
#button-container {
  display: flex;
}
</style>
