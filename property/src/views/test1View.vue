<template>
  <div>
    <h1>Agora RTM Vue.js Example</h1>
    <p>Current user ID: {{ currentUserID }}</p>
    <p>Recipient user ID: {{ recipientUserID }}</p>
    <div class="msg_cotainer_send" v-for="msg in sendMessageList" :key="msg">
      {{ msg }}
      <!-- <span class="msg_time_send">8:55 AM, Today</span> -->
    </div>
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
      sendMessageList: [],
    };
  },

  mounted() {
    this.currentUserID = localStorage.getItem("user_id");
    this.token = localStorage.getItem("token");
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
      console.log(`Received message from ${peerId}: ${message.text}`);
    });
    this.client = client;
  },

  methods: {
    sendMessage() {
      const message = { text: this.message };
      this.client
        .sendMessageToPeer(message, this.recipientUserID)
        .then(() => {
          console.log("Message sent successfully");
          console.log(message.text);
          this.sendMessageList.push(message.text);
          this.sendToServer(message);
        })
        .catch((error) => {
          console.log("Failed to send message", error);
        });
    },

    sendToServer(message) {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + this.token,
        },
      };
      axios
        .post(
          "http://18.177.139.152/chat/api/send_messages/",
          {
            message: message.text,
            receiver: this.recipientUserID,
            message_type: "text",
          },
          config
        )
        .then(() => {
          console.log("Message sent to server successfully");
        })
        .catch((error) => {
          console.log("Failed to send message to server", error);
        });
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
