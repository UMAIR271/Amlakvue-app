<template>
  <div>
    <hr />
    <div class="after_header">
      <div class="input_main1">
        <div class="input1">
          <!-- Search input -->
        </div>

        <div class="select_menu1">
          <!-- Select menus -->
        </div>
        
        <div>
          <button @click="findProperties" class="button3">FIND</button>
        </div>
      </div>

      <div class="map_views">
        <button class="button5" @click="toggleFilters">
          <i class="fa fa-filter" style="font-size: 17px; margin-right: 5px"></i>Filters
        </button>
        <button class="button5" style="margin-left: 10px">
          <span class="fa fa-star" style="font-size: 17px; margin-right: 5px"></span>Save Search
        </button>
      </div>

      <div class="select_menu2">
        <!-- Additional select menus -->
      </div>
    </div>
    <hr />
    <div>
      <div id="open_form" v-if="isFormOpen" class="almost-centered">
        <!-- Interested form -->
      </div>

      <div class="row-full" id="background" @click="closeNav"></div>
    </div>
    <div class="after_header">
      <div>
        <h4>Properties for sale in UAE</h4>
      </div>

      <div style="display: flex; justify-content: space-between">
        <div class="cards-section">
          <div class="main_div1" v-for="(value, key) in paginatedData" :key="key">
            <!-- Property card -->
          </div>

          <div style="margin-top: 20px">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <!-- Pagination -->
              </ul>
            </nav>
          </div>
        </div>

        <div class="adds-sections">
          <!-- Advertisements -->
        </div>
      </div>

      <div>
        <a href="#"><img src="../assets/Images/last_img.png" style="width: 100%" /></a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { mapMutations } from "vuex";
import { onMounted } from "vue";

export default {
  name: "PropertyList",

  data() {
    return {
      allData: [],
      perPage: 15,
      currentPage: 1,
      startIndex: 0,
      isFormOpen: false,
    };
  },

  computed: {
    paginatedData() {
      if (this.allData.length === 0) {
        return [];
      }
      return this.allData.slice(this.startIndex, this.startIndex + this.perPage);
    },

    totalPages() {
      return Math.ceil(this.allData.length / this.perPage);
    },
  },

  created() {
    onMounted(() => {
      this.getAllData();
    });
  },

  methods: {
    ...mapMutations(["updateData"]),

    async getAllData() {
      try {
        const response = await axios.get("http://18.177.139.152/list/filter/", {
          params: this.$store.state.data,
        });

        this.allData = response.data.results;
      } catch (error) {
        console.error(error);
      }
    },

    findProperties() {
      // Handle property search
    },

    toggleFilters() {
      // Toggle filters visibility
    },

    closeNav() {
      // Close navigation
    },
  },
};
</script>
