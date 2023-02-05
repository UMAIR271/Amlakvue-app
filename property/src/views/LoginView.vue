<template>
  <!-- <div class="splash-container">
    <div class="card">
      <div class="card-header text-center">
        <router-link to="/">
          <img
            class="logo-img"
            src="@/assets/dashboard/images/logo.png"
            alt="logo"
          />
        </router-link>
        <span class="splash-description"
          >Please enter your user information.</span
        >
      </div>
      <div class="card-body">
        <form @submit.prevent="submit">
          <div class="form-group">
            <input
              class="form-control form-control-lg"
              type="email"
              name="email"
              required=""
              placeholder="E-mail"
              v-model="email"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control form-control-lg"
              id="password"
              type="password"
              v-model="password"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" /><span
                class="custom-control-label"
                >Remember Me</span
              >
            </label>
          </div>
          <div class="form-group" v-if="errors.length">
            <p
              class="badge badge-danger"
              v-for="error in errors"
              v-bind:key="error"
            >
              {{ error }}
            </p>
          </div>

          <button
            @click="login()"
            type="submit"
            class="btn btn-primary btn-lg btn-block"
          >
            Sign in
          </button>
        </form>
      </div>
      <div class="card-footer bg-white p-0">
        <div class="card-footer-item card-footer-item-bordered">
          <router-link to="/register" class="footer-link">
            Create An Account
          </router-link>
        </div>
        <div class="card-footer-item card-footer-item-bordered">
          <a href="#" class="footer-link">Forgot Password</a>
        </div>
      </div>
    </div>
  </div> -->
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
      <div class="form-group" v-if="errors.length">
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
</template>

<script>
import axios from "axios";
import { useSetTitle } from "@/composables";
export default {
  name: "LoginView",
  setup() {
    useSetTitle("Login");
  },
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    async login() {
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
          localStorage.setItem("id", user_id);
          const toPath = this.$route.query.to || "/";
          this.$router.push(toPath);
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              console.log(error.response.data.message);
              this.errors.push(`${property}: ${error.response.data.message}`);
            }
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
@import "@/assets/dashboard/libs/css/style.css";
@import "@/assets/dashboard/vendor/fonts/fontawesome/css/fontawesome-all.css";

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
  height: 600px;
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
