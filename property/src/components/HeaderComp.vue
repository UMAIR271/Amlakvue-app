<template>
  <header class="container">
    <!-- Header Start -->

    <nav class="navbar navbar-expand-md navbar-light bg-white">
      <div class="container-fluid p-0">
        <router-link to="/" class="ms-4">
          <img src="@/assets/Images/loooo.jpg" width="90" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNav"
          aria-controls="myNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="myNav">
          <div class="navbar-nav ms-3">
            <li @click="handlefilter('Sell')" class="mt-4">
              <router-link to="/propertiesBuy" class="nav-link active"
                >Buy</router-link
              >
            </li>
            <li @click="handlefilter('Rent')" class="mt-4">
              <router-link to="/properties" class="nav-link">Rent</router-link>
            </li>
            <li v-if="isLoggedIn" class="mt-4">
              <router-link to="/addlisting" class="nav-link"
                >Add Your Listing</router-link
              >
            </li>
            <li v-if="isLoggedIn" class="mt-4">
              <router-link to="/request" class="nav-link">Request</router-link>
            </li>
            <li v-if="isLoggedIn" class="mt-4">
              <router-link to="/favouriteListing" class="nav-link"
                >Favourite</router-link
              >
            </li>
            <li v-if="isLoggedIn" class="mt-4">
              <router-link to="/notifications" class="nav-link"
                >Notifications</router-link
              >
            </li>
            <li v-if="isLoggedIn" class="mt-4">
              <router-link to="/chat" class="nav-link">Chat</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-link">
              <button class="buttonlog" @click="logout()">Logout</button>
            </li>

            <li v-else class="nav-link ms-5">
              <button class="buttonlog" @click="showLoginModal()">Login</button>
            </li>
          </div>
        </div>
      </div>
    </nav>
    <!-- Header End -->
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      isLoggedIn: "",
    };
  },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    ...mapMutations(["updateData"]),
    handlefilter(value) {
      const data = {
        check_Purpose_Type: value,
      };
      this.updateData(data);
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      this.$router.push({
        path: "/login",
      });
    },
    showLoginModal() {
      this.$router.push({
        path: "/login",
      });
    },
    checkLoggedIn() {
      const token = localStorage.getItem("token");
      const isLogin = !!token;

      const data = {
        isLogin: isLogin,
      };
      this.isLoggedIn = isLogin;
      this.updateData(data);
    },
  },
};
</script>

<style>
.navbar-nav .nav-link {
  color: #000 !important;
  padding: 0.5rem 0rem !important;
  border-color: transparent;
  margin-left: 1.5rem;
  transition: none;
}

.navbar .navbar-toggler:focus {
  box-shadow: none;
}

.navbar-nav .nav-link.active,
.border-red {
  border-bottom: 3px solid #247da9;
}

.navbar-nav .nav-link:hover {
  border-bottom: 3px solid #247da9;
}

@media (max-width: 767.5px) {
  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link:hover {
    background-color: #247da9;
    color: #fff !important;
  }

  .navbar-nav .nav-link {
    border: 3px solid transparent;
    margin: 0.8rem 0;
    display: flex;
    border-radius: 10px;
    justify-content: center;
  }
}
</style>
