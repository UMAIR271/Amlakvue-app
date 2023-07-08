<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
          <h5 class="font-weight-bold mb-3 text-center text-lg-start">
            Member
          </h5>

          <div class="card" style="height: 600px">
            <div class="card-body">
              <ul class="list-unstyled mb-0">
                <li
                  class="p-2 border-bottom"
                  style="background-color: #eee"
                  v-for="roomData in roomListData"
                  :key="roomData.id"
                >
                  <a href="#!" class="d-flex justify-content-between">
                    <div class="d-flex flex-row">
                      <img
                        v-bind:src="
                          'http://18.177.139.152/' + roomData.profile_image
                        "
                        alt="avatar"
                        class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div class="pt-1">
                        <p class="fw-bold mb-0">{{ roomData.username }}</p>
                        <p class="small text-muted">
                          {{ roomData.chat_profile.message }}
                        </p>
                      </div>
                    </div>
                    <div class="pt-1">
                      <p class="small text-muted mb-1">
                        {{ roomData.chat_profile.timestamp }}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-7 col-xl-8 card pt-5" style="height: 800px">
          <ul class="list-unstyled">
            <li class="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <div class="card">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Brad Pitt</p>
                  <p class="text-muted small mb-0">
                    <i class="far fa-clock"></i> 12 mins ago
                  </p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <div class="card w-100">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Lara Croft</p>
                  <p class="text-muted small mb-0">
                    <i class="far fa-clock"></i> 13 mins ago
                  </p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li class="d-flex justify-content-between mb-4">
              <div class="card w-100">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Lara Croft</p>
                  <p class="text-muted small mb-0">
                    <i class="far fa-clock"></i> 13 mins ago
                  </p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li class="d-flex justify-content-between mb-4">
              <div class="card w-100">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Lara Croft</p>
                  <p class="text-muted small mb-0">
                    <i class="far fa-clock"></i> 13 mins ago
                  </p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li class="bg-white mb-3">
              <div class="form-outline">
                <textarea
                  class="form-control"
                  id="textAreaExample2"
                  rows="4"
                ></textarea>
                <label class="form-label" for="textAreaExample2">Message</label>
              </div>
            </li>
            <button type="button" class="btn btn-info btn-rounded float-end">
              Send
            </button>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div>
    <h1>Agora RTM Vue.js Example</h1>
    <p>Current user ID: {{ currentUserID }}</p>
    <p>Recipient user ID: {{ recipientUserID }}</p>
    <input type="text" v-model="message" placeholder="Enter a message" />
    <button @click="sendMessage">Send message to {{ recipientUserID }}</button>
  </div>
</template>

<script>
import AgoraRTM from "agora-rtm-sdk";
import axios from "axios";

export default {
  data() {
    return {
      client: null,
      currentUserID: "<YOUR_USER_ID>",
      recipientUserID: "14",
      message: "",
      token: "",
      roomListData: [],
    };
  },

  mounted() {
    this.currentUserID = localStorage.getItem("user_id");
    this.token = localStorage.getItem("token");

    // Create a new AgoraRTM instance
    const client = AgoraRTM.createInstance("21c61a1aa5d44cc09fda7e95b43561a2");
    client
      .login({ token: null, uid: this.currentUserID })
      .then(() => {
        console.log("Logged in to Agora RTM successfully");
      })
      .catch((error) => {
        console.log("Failed to log in to Agora RTM", error);
      });

    client.on("MessageFromPeer", (message, peerId) => {
      console.log(peerId, "peerId");
      console.log(`Received message from ${peerId}: ${message.text}`);
    });
    this.recivedMessageToServer();

    this.client = client;
  },

  methods: {
    sendMessage() {
      const message = { text: this.message };
      console.log(message);
      console.log(this.recipientUserID);

      this.client
        .sendMessageToPeer(message, this.recipientUserID)
        .then(() => {
          console.log("Message sent successfully");
          // this.sendToServer(message);
        })
        .catch((error) => {
          console.log("Failed to send message", error);
        });
    },

    sendToServer(message) {
      axios
        .post("http://localhost:8000/messages/", {
          message: message.text,
          sender: this.currentUserID,
          recipient: this.recipientUserID,
        })
        .then(() => {
          console.log("Message sent to server successfully");
        })
        .catch((error) => {
          console.log("Failed to send message to server", error);
        });
    },
    async recivedMessageToServer() {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + this.token,
        },
      };

      try {
        const response = await axios.get(
          "http://18.177.139.152/chat/api/get_chat_inbox/",
          config
        );
        console.log(response.data);
        response.data.forEach((item) => {
          this.roomListData.push(item);
          console.log(this.roomListData);
        });
        console.log("Message sent to server successfully");
      } catch (error) {
        console.log("Failed to send message to server", error);
      }
    },
  },

  beforeUnmount() {
    this.client
      .logout()
      .then(() => {
        console.log("Logged out of Agora RTM successfully");
      })
      .catch((error) => {
        console.log("Failed to log out of Agora RTM", error);
      });

    AgoraRTM.destroy();
  },
};
</script>
