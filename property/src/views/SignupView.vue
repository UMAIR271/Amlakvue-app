<template>
  <div class="center">
    <h1 class="mt-4">SignUp</h1>
    <form @submit.prevent="submitForm()">
      <div class="text_field">
        <input type="text" v-model="username" required />
        <span></span>
        <label>Username</label>
      </div>
      <div class="text_field">
        <input type="email" v-model="email" required />
        <span></span>
        <label>Email</label>
      </div>
      <div class="text_field">
        <input type="password" v-model="password" required />
        <span></span>
        <label>Password</label>
      </div>
      <div class="text_field">
        <input type="password" v-model="password2" required />
        <span></span>
        <label>Confirm Password</label>
      </div>
      <div class="form-group text-center" v-if="errors.length">
        <p
          class="badge badge-danger p-2"
          v-for="error in errors"
          v-bind:key="error"
        >
          {{ error }}
        </p>
      </div>
      <!-- <div class="pass">Forgot password?</div> -->
      <button type="submit" @click="newRegister()">Login</button>

      <!-- <input type="submit" on-click="newRegister" value="Login" /> -->
      <div class="pic23">
        Already have an account
        <router-link to="/login" style="color: rgb(34, 34, 255)"
          >Login</router-link
        >
      </div>
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
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
// import { toast } from "bulma-toast";
import { useSetTitle } from "@/composables";
// import topheaders from "../components/HeaderComp.vue";

export default {
  name: "SignupView",
  setup() {
    useSetTitle("Signup");
  },
  components: {
    // topheaders,
    // endfooter,
    Loading,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: [],
    };
  },
  methods: {
    submitForm() {
      this.errors = [];
      this.isLoading = true;
      if (this.username === "") {
        this.errors.push("The username is missing");
        this.isLoading = false;
      } else if (this.username.length < 3) {
        this.errors.push("The username must be at least 3 characters long");
        this.isLoading = false;
      }
      if (this.password === "") {
        this.errors.push("The password is missing");
        this.isLoading = false;
      } else if (this.password.length < 6) {
        this.errors.push("The password must be at least 6 characters long");
        this.isLoading = false;
      }
      if (this.password !== this.password2) {
        this.errors.push("The passwords doesn't match");
        this.isLoading = false;
      }
      if (!this.errors.length) {
        const formData = {
          username: this.username,
          email: this.email,
          password: this.password,
          password2: this.password2,
        };
        axios
          .post("http://18.177.139.152/loginapp/register/", formData)
          .then((response) => {
            console.log(response.data);
            this.isLoading = false;
            this.$router.push("/login");
          })
          .catch((error) => {
            if (error.response) {
              this.errors.push(error.response.data.message[0]);
              this.isLoading = false;
            } else if (error.message) {
              this.errors.push("Something went wrong. Please try again");
            }
          });
      }
    },
  },
};
</script>

<!-- <script>
import axios from "axios";
// import { toast } from "bulma-toast";
import { useSetTitle } from "@/composables";
// import topheaders from "../components/HeaderComp.vue";
export default {
  name: "SignupView",
  setup() {
    useSetTitle("Signup");
  },
  components: {
    // topheaders,
    // endfooter,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: [],
    };
  },
  methods: {
    submitForm() {
      this.errors = [];
      if (this.username === "") {
        console.log("1");
        this.errors.push("The username is missing");
      }
      if (this.password === "") {
        console.log("2");
        this.errors.push("The password is too short");
      }
      if (this.password !== this.password2) {
        console.log("3");
        this.errors.push("The passwords doesn't match");
      }
      if (!this.errors.length) {
        const formData = {
          username: this.username,
          email: this.email,
          password: this.password,
          password2: this.password2,
        };
        axios
          .post("http://18.177.139.152/loginapp/register/", formData)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/login");
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
              for (const property in error.response.data) {
                this.errors.push(`${property}: ${error.response.data.message}`);
              }
            } else if (error.message) {
              this.errors.push("Something went wrong. Please try again");
              // console.log(JSON.stringify(error));
            }
          });
      }
    },
  },
};
</script> -->
<style>
@import "@/assets/dashboard/vendor/fonts/fontawesome/css/fontawesome-all.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
/* @import "https://unpkg.com/flickity@2/dist/flickity.min.css"; */
/* @import "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"; */
@import "@/assets/css/style.css";
body {
  margin: 0;
  padding: 0;
  /* background-color: cadetblue; */
}
.center {
  border: 1px solid gray;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 800px;
  transform: translate(-50%, -50%);
  background-color: rgb(240, 235, 235);
  border-radius: 10px;
}
.center h1 {
  text-align: center;
  /* padding: 0 0 20px 0; */
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
