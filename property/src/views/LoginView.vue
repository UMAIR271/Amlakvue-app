<template>
  <div class="center">
    <h1>Login</h1>
    <form @submit.prevent="submit" method="post">
      <div class="text_field">
        <input
          type="email"
          name="email"
          v-model="email"
          autocomplete="off"
          required
        />
        <span></span>
        <label>E-mail</label>
      </div>
      <div class="text_field">
        <input type="password" v-model="password" required />
        <span></span>
        <label>Password</label>
      </div>
      <div class="pass">Forgot password?</div>
      <div class="form-group text-center" v-if="errors.length">
        <p
          class="badge badge-danger p-2 ms-3"
          v-for="error in errors"
          v-bind:key="error"
        >
          {{ error }}
        </p>
      </div>
      <button type="submit" @click="login()">Login</button>

      <router-link to="/register">
        <div class="pic23">
          Don't have an account?<a href="" style="color: rgb(34, 34, 255)"
            >Signup</a
          >
        </div>
      </router-link>

      <p class="dell">
        <span style="background-color: rgb(240, 235, 235)">or</span>
      </p>
      <div class="uyt">
        <button>
          <i
            class="fa fa-apple"
            style="font-size: 20px; color: rgb(56, 56, 56); margin-right: 20px"
          ></i>
          Login with Apple
        </button>
      </div>
      <div class="uyt">
        <button>
          <i
            class="fa fa-google"
            style="font-size: 20px; color: rgb(56, 56, 56); margin-right: 20px"
          ></i>
          Login with Google
        </button>
      </div>
    </form>
  </div>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  />
</template>

<script>
import axios from "axios";
import { useSetTitle } from "@/composables";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
// import topheaders from "../components/HeaderComp.vue";
// import endfooter from "../components/FooterComp.vue";
import { mapMutations } from "vuex";

export default {
  name: "LoginView",
  setup() {
    useSetTitle("Login");
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      errors: [],
    };
  },
  components: {
    Loading,
    // endfooter,
  },
  mounted() {
    console.log("listing_id", this.$store.state.data.temp);
  },
  methods: {
    ...mapMutations(["updateData"]),
    async login() {
      this.isLoading = true;
      console.log(this.email);
      console.log(this.password);
      axios.defaults.headers.common["Authorization"] = "";
      // localStorage.removeItem("token");
      // localStorage.removeItem("id");
      this.$ls.remove("token");
      this.$ls.remove("id");
      const formData = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post("http://18.177.139.152/loginapp/login/", formData)
        .then((response) => {
          console.log(response.data);
          const token = response.data.token.access;
          const user_id = response.data.user_object[0].id;
          console.log(token);
          console.log(user_id);
          // this.$store.commit("setToken", token);
          // this.$store.commit("setUserId", user_id);
          axios.defaults.headers.common["Authorization"] = "Token " + token;
          // this.$ls.set("token", token);
          // this.$ls.set("id", user_id);
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", user_id);
          const toPath = this.$route.query.to || "/";
          this.isLoading = false;
          const data = {};
          data.isLogin = true;
          this.updateData(data);
          this.$router.push(toPath);
        })
        .catch((error) => {
          if (error.response) {
            this.errors.push(error.response.data.message);
            this.isLoading = false;
          } else {
            this.errors.push("Something went wrong. Please try again");
            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>

<style>
@import "@/assets/dashboard/vendor/bootstrap/css/bootstrap.min.css";
@import "@/assets/dashboard/vendor/fonts/circular-std/style.css";
/* @import "@/assets/dashboard/libs/css/style.css"; */
@import "@/assets/dashboard/vendor/fonts/fontawesome/css/fontawesome-all.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
/* @import "https://unpkg.com/flickity@2/dist/flickity.min.css"; */
/* @import "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"; */
@import "@/assets/css/style.css";

.splash-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.center {
  border: 1px solid gray;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 700px;
  transform: translate(-50%, -50%);
  background-color: rgb(240, 235, 235);
  border-radius: 10px;
}
.center h1 {
  text-align: center;
  padding-top: 30px;
  /* padding:0 0 20px 0; */
}
.center form {
  padding: 0 40px;
  box-sizing: border-box;
}
.text_field {
  position: relative;
  margin: 30px 0;
  border-bottom: 2px solid #adadad;
}
.text_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.text_field label {
  position: absolute;
  top: 70%;
  left: 5px;
  color: #7c7c7c;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.text_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  /* width:100%; */
  height: 2px;
  background: #2691d9;
  transition: 0.5s;
}
.text_field input:focus ~ label,
.text_field input:valid ~ label {
  top: -5px;
  color: #adadad;
}
.text_field input:focus ~ span::before,
.text_field input:valid ~ span::before {
  width: 100%;
}
.pass {
  margin: -5px 0 20px 5px;
  color: rgb(34, 34, 255);
  cursor: pointer;
  text-align: center;
  text-decoration: underline;
}
.pass:hover {
  text-decoration: underline;
}
button[type="submit"] {
  width: 100%;
  height: 40px;
  border: 1px solid;
  background: #2691d9;
  border-radius: 20px;
  font-size: 18px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}
.pic23 {
  margin: 20px;
  text-align: center;
}
.dell {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
}
.dell span {
  background: #fff;
  padding: 0 10px;
}
.uyt button {
  width: 100%;
  background: #f0efef;
  height: 40px;
  border: 1px solid rgb(46, 46, 46);
  /* border-radius: 10px; */
  font-size: 18px;
  color: rgb(56, 56, 56);
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
  align-items: center;
}
@media only screen and (max-width: 700px) {
  .center {
    width: 90%;
  }
}
</style>
