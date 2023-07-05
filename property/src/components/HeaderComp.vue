<template>
  <header>
    <router-link to="/">
      <img src="@/assets/Images/loooo.jpg" width="90" />
    </router-link>

    <nav class="navigation" v-if="isLoggedIn">
      <ul style="display: flex">
        <li @click="handlefilter('Sell')">
          <router-link to="/propertiesBuy">Buy</router-link>
        </li>
        <li @click="handlefilter('Rent')">
          <router-link to="/properties">Rent</router-link>
        </li>
        <li class="nav1" v-if="isLoggedIn">
          <router-link to="/addlisting">Add Your Listing</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/request">Request</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/favouriteListing">Favourite</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/notifications">Notifications</router-link>
        </li>

        <li class="nav1" v-if="isLoggedIn">
          <router-link to="/chat">Chat</router-link>
        </li>
      </ul>
    </nav>
    <nav class="navigation" v-else style="margin-right: 100px">
      <ul style="display: flex">
        <li @click="handlefilter('Sell')">
          <router-link to="/propertiesBuy">Buy</router-link>
        </li>
        <li @click="handlefilter('Rent')">
          <router-link to="/properties">Rent</router-link>
        </li>
        <li class="nav1" v-if="isLoggedIn">
          <router-link to="/addlisting">Add Your Listing</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/request">Request</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/favouriteListing">Favourite</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/notifications">Notifications</router-link>
        </li>

        <li class="nav1" v-if="isLoggedIn">
          <router-link to="/chat">Chat</router-link>
        </li>
      </ul>
    </nav>

    <div class="dropdown" style="float: right">
      <button v-if="isLoggedIn" class="loginbutton" @click="logout()">
        Logout
      </button>
      <button v-else class="buttonlog" @click="showLoginModal()">Login</button>

      <!-- <div class="dropdown-content1">
        <a href="#" style="font-size: smaller; color: gray"
          >Sign in or register to sync your favorite properties across
          devices</a
        >

        <router-link to="/login" style="padding: 0px">
          <button class="buttonlog" @click="showLoginModal()">Sign in</button>
        </router-link>
        <router-link to="/register">
          <p class="create">Create new account</p>
        </router-link>
      </div> -->
    </div>
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
      console.log(value);
      const data = {};
      data.check_Purpose_Type = value;
      console.log(this.$store.state.data.isLogin, "isLogin");
      this.updateData(data);
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      this.$router.push({
        path: "/register",
      });
    },
    showLoginModal() {
      this.$router.push({
        path: "/login",
      });
    },
    checkLoggedIn() {
      // Check login status here, for example, by checking if there's a token in localStorage
      const token = localStorage.getItem("token");
      const checkLogin = token !== null;
      if (token) {
        console.log(token, "token");

        const data = {};
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
        data.isLogin = true;
        this.updateData(data);
      } else {
        const data = {};
        this.isLoggedIn = false;
        data.isLogin = false;
        this.updateData(data);
      }

      console.log(checkLogin);
    },
  },
};
</script>

<style></style>
