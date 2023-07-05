<template>
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
      recipientUserID: "<RECIPIENT_USER_ID>",
      message: "",
    };
  },

  mounted() {
    const client = AgoraRTM.createInstance("21c61a1aa5d44cc09fda7e95b43561a2");

    client.on("MessageFromPeer", (message, peerId) => {
      console.log(`Received message from ${peerId}: ${message.text}`);
    });

    client
      .login({ token: null, uid: this.currentUserID })
      .then(() => {
        console.log("Logged in to Agora RTM successfully");
      })
      .catch((error) => {
        console.log("Failed to log in to Agora RTM", error);
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
          this.sendToServer(message);
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
