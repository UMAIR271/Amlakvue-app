<template>
  <div>
    <div v-for="request in allData" :key="request" id="fb">
      <div id="fb-top">
        <p><b>Friend Requests</b></p>
      </div>
      <img
        v-bind:src="request.list['cover_image']"
        height="100"
        width="100"
        alt="Image of woman"
      />
      <p id="info">
        <b>{{ request.user["username"] }}</b> <br /><span>{{
          request.list["Title"]
        }}</span>
      </p>
      <div id="button-block">
        <div id="confirm">Pending</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      allData: [],
    };
  },
  mounted() {
    this.getinterestedrequest();
  },
  methods: {
    getinterestedrequest() {
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
          .get("http://18.177.139.152/questionair/getmyinterestedquestion/", {
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
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
#fb {
  width: 500px;
  border: 1px solid gray;
  border-radius: 5px;
  position: relative;
  height: 175px;
  margin-left: 60px;
  margin-bottom: 20px;
}
#fb p {
  font-family: sans-serif;
  margin: 0 0 0 10px;
  line-height: 30px;
}

#fb-top span {
  color: #4267b2;
  float: right;
  margin-right: 10px;
}
#fb-top {
  background-color: #efefef;
  height: 30px;
  width: 500px;
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: -1px;
  left: -1px;
  border: 1px solid gray;
}

#fb img {
  position: absolute;
  left: 10px;
  top: 52.5px;
}

#info {
  position: absolute;
  left: 120px;
  top: 75px;
}

#info {
  color: #4267b2;
  line-height: 25px;
  font-size: 18px;
}

#info span {
  color: #777;
  font-size: 14px;
}

#button-block {
  position: absolute;
  right: 10px;
  top: 85px;
}

#button-block div {
  display: inline-block;
}

#confirm,
#delete {
  background-color: #4267b2;
  color: white;
  padding: 7px;
  border-radius: 2px;
  margin-right: 10px;
  font-family: sans-serif;
}

#delete {
  color: #222;
  background-color: #bbb;
  border: 1px solid #999;
  padding: 6px;
  margin-right: 0;
}

#button-block div:hover {
  opacity: 0.8;
  cursor: pointer;
}

@media screen and (max-width: 650px) {
  #fb {
    width: 500px;
    border: 1px solid gray;
    border-radius: 5px;
    position: relative;
    height: 175px;
    margin-left: 0px;
  }
}
</style>
