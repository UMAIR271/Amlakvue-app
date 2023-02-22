<template>
  <div class="after_header">
    <div class="container">
      <div class="row">
        <div class="col">
          <h4>Request</h4>
        </div>
        <div class="col" style="padding-left: 700px"></div>
      </div>
    </div>
    <hr />
    <div>
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item">
          <a
            class="nav-link"
            @click="toggleComponent('send')"
            aria-current="page"
            >Send Request</a
          >
          <div v-if="sentComponent">
            <sendRequest></sendRequest>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="toggleComponent('received')"
            >Received Request

            <i
              class="fa fa-archive"
              style="padding-left: 10px"
              aria-hidden="true"
            ></i>
          </a>
          <div v-if="receivedComponent">
            <receviedRequest></receviedRequest>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import sendRequest from "../components/sendRequestComp.vue";
import receviedRequest from "../components/receviedComp.vue";

export default {
  components: {
    sendRequest,
    receviedRequest,
  },
  data() {
    return {
      sentComponent: false,
      receivedComponent: false,
    };
  },
  mounted() {
    this.sentComponent = true;
  },
  methods: {
    toggleComponent(data) {
      if (data == "send") {
        this.sentComponent = true;
        (this.receivedComponent = false), console.log(data);
      } else {
        this.sentComponent = false;
        (this.receivedComponent = true), console.log(data);
      }
    },
  },
};
</script>
