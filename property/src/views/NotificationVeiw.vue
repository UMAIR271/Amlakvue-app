<template>
  <section class="section-50">
    <div class="container">
      <h3 class="m-b-50 heading-line">
        Notifications <i class="fa fa-bell text-muted"></i>
      </h3>

      <div class="notification-ui_dd-content">
        <div
          class="notification-list notification-list--unread"
          v-for="notification in allData"
          :key="notification"
        >
          <div class="notification-list_content">
            <div class="notification-list_img pe-3">
              <h3>
                <i class="fa fa-bell text-muted"></i>
              </h3>
            </div>
            <div class="notification-list_detail">
              <p>
                <b>{{ notification["title"] }}</b> reacted to your post
              </p>
              <p class="text-muted">
                {{ notification["body"] }}
              </p>
              <p class="text-muted"><small>10 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a href="#!" class="dark-link">Load more activity</a>
      </div>
    </div>
  </section>
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
export default {
  data() {
    return {
      allData: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getNotification();
  },
  components: {
    Loading,
  },
  methods: {
    getNotification() {
      this.isLoading = true;
      try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        console.log(user_id);
        console.log("Bearer" + " " + token);
        const config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };

        axios
          .get("http://18.177.139.152/notification/getNotification/", {
            headers: config.headers,
          })
          .then((response) => {
            console.log(response.data);
            this.allData = [...response.data];
            console.log(this.allData);
          })
          .catch((error) => {
            console.error(error);
          });
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap);

.section-50 {
  padding: 50px 0;
}

.m-b-50 {
  margin-bottom: 50px;
}

.dark-link {
  color: #333;
}

.heading-line {
  position: relative;
  padding-bottom: 5px;
}

.heading-line:after {
  content: "";
  height: 4px;
  width: 75px;
  background-color: #29b6f6;
  position: absolute;
  bottom: 0;
  left: 0;
}

.notification-ui_dd-content {
  margin-bottom: 30px;
}

.notification-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 7px;
  background: #fff;
  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
}

.notification-list--unread {
  border-left: 2px solid #29b6f6;
}

.notification-list .notification-list_content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.notification-list .notification-list_content .notification-list_img img {
  height: 48px;
  width: 48px;
  border-radius: 50px;
  margin-right: 20px;
}

.notification-list .notification-list_content .notification-list_detail p {
  margin-bottom: 5px;
  line-height: 1.2;
}

.notification-list .notification-list_feature-img img {
  height: 48px;
  width: 48px;
  border-radius: 5px;
  margin-left: 20px;
}
</style>
