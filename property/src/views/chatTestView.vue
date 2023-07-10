<template>
  <div>
    <vue-advanced-chat
      height="calc(100vh - 20px)"
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :rooms-loaded="true"
      :messages="JSON.stringify(messages)"
      :messages-loaded="messagesLoaded"
      @send-message="sendMessage($event.detail[0])"
      @fetch-messages="fetchMessages($event.detail[0])"
    />
  </div>
</template>

<script>
import AgoraRTM from "agora-rtm-sdk";
import axios from "axios";
import { register } from "vue-advanced-chat";
// import { register } from '../../vue-advanced-chat/dist/vue-advanced-chat.es.js'
register();
export default {
  data() {
    return {
      currentUserId: "",
      token: "",
      rooms: [],
      messages: [],
      roomListData: [],
      messagesLoaded: false,
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
    fetchMessages({ options = {} }) {
      setTimeout(() => {
        if (options.reset) {
          this.messages = this.addMessages(true);
          console.log("this.messages", this.messages);
        } else {
          console.log("else");
          console.log("this.messages", this.messages);
          this.messages = [...this.addMessages(), ...this.messages];
          console.log("this.messages", this.messages);
          this.messagesLoaded = true;
        }
        // this.addNewMessage()
      });
    },
    addMessages(reset) {
      console.log("hello", reset);
      const messages = [];
      // for (let i = 0; i < 10; i++) {
      //   messages.push({
      //     _id: reset ? i : this.messages.length + i,
      //     content: `${reset ? "" : "paginated"} message ${i + 1}`,
      //     senderId: "4321",
      //     username: "John Doe",
      //     date: "13 November",
      //     timestamp: "10:20",
      //   });
      // }
      return messages;
    },
    sendMessage(message) {
      this.messages = [
        ...this.messages,
        {
          _id: this.messages.length,
          content: message.content,
          senderId: this.currentUserId,
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString(),
        },
      ];
    },
    addNewMessage() {
      setTimeout(() => {
        this.messages = [
          ...this.messages,
          {
            _id: this.messages.length,
            content: "NEW MESSAGE",
            senderId: "1234",
            timestamp: new Date().toString().substring(16, 21),
            date: new Date().toDateString(),
          },
        ];
      }, 2000);
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
          const data = {};
          data["roomId"] = item.chat_profile.id;
          data["roomName"] = item.username;
          data["avatar"] = "http://18.177.139.152/" + item.profile_image;
          console.log(data);
          this.rooms.push(data);
        });
        console.log(this.rooms);
        console.log("Message sent to server successfully");
      } catch (error) {
        console.log("Failed to send message to server", error);
      }
    },
    async getAllMeassage(sender, name, profile_image) {
      console.log(sender);
      this.roomName = name;
      this.roomProfileImage = profile_image;
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + this.token,
        },
      };

      try {
        const response = await axios.get(
          `http://18.177.139.152/chat/api/get_chat/${sender}/`,
          config
        );
        console.log(response.data);
        response.data.forEach((item) => {
          this.getAllMessagesDatabase.push(item);
        });
        this.active = true;
        this.client.on("MessageFromPeer", (message, peerId) => {
          console.log(peerId, "peerId");
          console.log(`Received message from ${peerId}: ${message.text}`);
        });
        console.log("Message sent to server successfully");
      } catch (error) {
        console.log("Failed to send message to server", error);
      }
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: "Quicksand", sans-serif;
}
</style>
