<template>
  <header>
    <router-link to="/">
      <img src="@/assets/Images/loooo.jpg" width="90" />
    </router-link>

    <nav class="navigation">
      <ul style="display: flex">
        <li @click="handlefilter('Sell')">
          <router-link to="/propertiesBuy">Buy</router-link>
        </li>
        <li @click="handlefilter('Rent')">
          <router-link to="/properties">Rent</router-link>
        </li>
        <li class="nav1">
          <router-link to="/addlisting">Add Your Listing</router-link>
        </li>
        <li><router-link to="/request">Request</router-link></li>
        <li><router-link to="/favouriteListing">Favourite</router-link></li>
        <li><router-link to="/notifications">Notifications</router-link></li>

        <li class="nav1">
          <router-link to="/chat">Chat</router-link>
        </li>
      </ul>
    </nav>

    <div class="dropdown" style="float: right">
      <button class="loginbutton">Log In</button>
      <div class="dropdown-content1">
        <a href="#" style="font-size: smaller; color: gray"
          >Sign in or register to sync your favorite properties across
          devices</a
        >

        <router-link to="/login" style="padding: 0px">
          <button class="buttonlog">Sign in</button>
        </router-link>
        <router-link to="/register">
          <p class="create">Create new account</p>
        </router-link>
        <a
          href="#"
          style="border-top: 1px solid lightgray; text-align: left; color: gray"
        >
          Saved Properties(0) <i class="arrow1 right"></i>
        </a>
        <a
          href="#"
          style="border-top: 1px solid lightgray; text-align: left; color: gray"
        >
          Contacted properties(0) <i class="arrow1 right"></i>
        </a>
        <a
          href="#"
          style="border-top: 1px solid lightgray; text-align: left; color: gray"
        >
          Saved searches(0) <i class="arrow1 right"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["updateData"]),
    handlefilter(value) {
      console.log(value);
      const data = {};
      data.check_Purpose_Type = value;
      this.updateData(data);
    },
  },
};
</script>

<style></style>
