<template>
  <!-- <form @submit.prevent="submitForm()" class="splash-container">
    <div class="card">
      <div class="card-header text-center">
        <h3 class="mb-1">Registrations Form</h3>
        <p>Please enter your user information.</p>
      </div>
      <div class="container">
        <h4 class="text-center">Profil Image Upload</h4>
        <div class="avatar-upload">
          <div class="avatar-edit">
            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload"></label>
          </div>
          <div class="avatar-preview">
            <div
              id="imagePreview"
              style="background-image: url('http://i.pravatar.cc/500?img=7')"
            ></div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input
            class="form-control form-control-lg"
            type="text"
            name="nick"
            required=""
            placeholder="Username"
            v-model="username"
            autocomplete="off"
          />
        </div>
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
            id="pass1"
            type="password"
            v-model="password"
            required=""
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control form-control-lg"
            type="password"
            required=""
            placeholder="Confirm"
            v-model="password2"
          />
        </div>
        <div class="form-group pt-2">
          <button
            class="btn btn-block btn-primary"
            on-click="newRegister"
            type="submit"
          >
            Register My Account
          </button>
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
        <div class="form-group">
          <label class="custom-control custom-checkbox">
            <input class="custom-control-input" type="checkbox" /><span
              class="custom-control-label"
              >By creating an account, you agree the
              <a href="#">terms and conditions</a></span
            >
          </label>
        </div>
        <div class="form-group row pt-0">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
            <button class="btn btn-block btn-social btn-facebook" type="button">
              Facebook
            </button>
          </div>
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <button class="btn btn-block btn-social btn-twitter" type="button">
              Twitter
            </button>
          </div>
        </div>
      </div>
      <div class="card-footer bg-white">
        <p>
          Already member?
          <router-link to="/login" class="text-secondary">
            Login Here.
          </router-link>
        </p>
      </div>
    </div>
  </form> -->
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
      <div class="form-group" v-if="errors.length">
        <p
          class="badge-danger"
          style="color: crimson"
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
        <a href="login.html" style="color: rgb(34, 34, 255)">Login</a>
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
</template>

<script>
import axios from "axios";
// import { toast } from "bulma-toast";
import { useSetTitle } from "@/composables";
export default {
  name: "SignupView",
  setup() {
    useSetTitle("Signup");
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
  },
};
</script>
<style>
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
  height: 750px;
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
