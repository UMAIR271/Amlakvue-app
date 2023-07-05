<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedData" :key="item.id">
          <th scope="row">{{ startIndex + index }}</th>
          <td>{{ item.Bedrooms }}</td>
          <td>{{ item.Bedrooms }}</td>
        </tr>
      </tbody>
    </table>

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
            <a class="page-link" href="#" @click="setCurrentPage(pageNumber)">
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      perPage: 3, // number of items per page
      currentPage: 1, // current page number
      startIndex: 0, // start index of items to be displayed on the current page
    };
  },
  computed: {
    paginatedData() {
      if (this.data.length === 0) {
        return [];
      }
      return this.data.slice(this.startIndex, this.startIndex + this.perPage);
    },

    totalPages() {
      console.log(this.data.length);
      return Math.ceil(this.data.length / this.perPage);
    },
  },
  methods: {
    fetchApiData() {
      axios
        .get("http://18.177.139.152/list/filter/?check_Purpose_Type=Sell")
        .then((response) => {
          console.log(response.data.results); // add this line
          if (Array.isArray(response.data.results)) {
            this.data = [...this.data, ...response.data.results];
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async getAllData() {
      let response = await this.getDataFromAPI(this.currentPage);
      let next = response.data.next;
      console.log(next);
      this.data = [...this.data, ...response.data.results];
      while (next) {
        console.log("hello");
        this.currentPage++;
        response = await this.getDataFromAPI(this.currentPage);
        this.data = [...this.data, ...response.data.results];
        console.log(this.data);
      }
    },
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
    setCurrentPage(pageNumber) {
      if (pageNumber < 1 || pageNumber > this.totalPages) {
        return;
      }

      this.currentPage = pageNumber;
      this.startIndex = (pageNumber - 1) * this.perPage;
    },
  },
  mounted() {
    // this.fetchApiData();
    this.getAllData();
  },
};
</script>
