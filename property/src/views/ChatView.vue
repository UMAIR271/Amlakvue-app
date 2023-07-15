<template>
  <div class="container-fluid h-100 mt-4">
    <div class="row justify-content-center h-100">
      <div class="col-md-4 col-xl-3 chat">
        <div class="card mb-sm-3 mb-md-0 contacts_card">
          <div class="card-header">
            <div class="input-group">
              <input
                type="text"
                placeholder="Search..."
                name=""
                class="form-control search"
              />
              <div class="input-group-prepend">
                <span class="input-group-text search_btn"
                  ><i class="fas fa-search"></i
                ></span>
              </div>
            </div>
          </div>
          <div class="card-body contacts_body">
            <ui class="contacts">
              <li
                class="chat_active"
                v-for="roomData in roomListData"
                :key="roomData.id"
                @click="
                  getAllMeassage(
                    roomData.chat_profile.sender_id,
                    roomData.username,
                    roomData.profile_image
                  )
                "
              >
                <div class="d-flex bd-highlight">
                  <div class="img_cont">
                    <img
                      v-bind:src="
                        'http://18.177.139.152/' + roomData.profile_image
                      "
                      class="rounded-circle user_img"
                    />
                    <span class="online_icon"></span>
                  </div>
                  <div class="user_info">
                    <span>{{ roomData.username }}</span>
                    <p>{{ roomData.chat_profile.message }}</p>
                  </div>
                </div>
              </li>
            </ui>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-md-8 col-xl-6 chat">
        <div class="card">
          <div class="card-header msg_head">
            <div class="d-flex bd-highlight">
              <div class="img_cont" v-if="roomProfileImage">
                <img
                  v-bind:src="'http://18.177.139.152/' + roomProfileImage"
                  class="rounded-circle user_img"
                />
                <span class="online_icon"></span>
              </div>
              <div class="user_info">
                <span v-if="roomName">{{ roomName }}</span>
                <p>1767 Messages</p>
              </div>
              <div class="video_cam">
                <span><i class="fas fa-video"></i></span>
                <span><i class="fas fa-phone"></i></span>
              </div>
            </div>
            <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
            <div class="action_menu">
              <ul>
                <li><i class="fas fa-user-circle"></i> View profile</li>
                <li><i class="fas fa-users"></i> Add to close friends</li>
                <li><i class="fas fa-plus"></i> Add to group</li>
                <li><i class="fas fa-ban"></i> Block</li>
              </ul>
            </div>
          </div>
          <div class="card-body msg_card_body" v-if="active">
            <div
              v-for="allmessage in getAllMessagesDatabase"
              :key="allmessage.id"
            >
              <div
                class="d-flex justify-content-start mb-4"
                v-if="allmessage.receiver == currentUserID"
              >
                <div class="img_cont_msg">
                  <img
                    v-bind:src="'http://18.177.139.152/' + roomProfileImage"
                    class="rounded-circle user_img_msg"
                  />
                </div>
                <div class="msg_cotainer">
                  {{ allmessage.message }}
                </div>
              </div>

              <div class="d-flex justify-content-end mb-4" v-else>
                <div class="msg_cotainer_send">
                  {{ allmessage.message }}
                </div>
              </div>
              <!-- <div
                class="d-flex justify-content-end mb-4"
                v-if="sendMessageList"
              >
                <div
                  class="msg_cotainer_send"
                  v-for="msg in sendMessageList"
                  :key="msg"
                >
                  {{ msg }}
                </div>
              </div> -->
            </div>
          </div>
          <div class="card-footer">
            <div class="input-group">
              <div class="input-group-append">
                <span class="input-group-text attach_btn"
                  ><i class="fas fa-paperclip"></i
                ></span>
              </div>
              <textarea
                v-model="message"
                class="form-control type_msg"
                placeholder="Type your message..."
              ></textarea>
              <div class="input-group-append">
                <span class="input-group-text send_btn" @click="sendMessage"
                  ><i class="fas fa-location-arrow"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      getAllMessagesDatabase: [],
      sendMessageList: [],
      active: false,
      roomName: "",
      roomProfileImage: "",
      dataobj: {
        sender_id: "",
        username: "",
        profile_image: "",
      },
    };
  },

  mounted() {
    this.currentUserID = localStorage.getItem("user_id");
    this.token = localStorage.getItem("token");
    // this.recipientUserID = this.$store.state.data.listingOwnerId;
    // this.recipientUserID = this.recipientUserID.toString();
    // console.log(this.recipientUserID);

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
    this.getAllMessagesDatabase = [];
    client.on("MessageFromPeer", (message, peerId) => {
      console.log(peerId, "peerId");
      this.active = true;
      this.getAllMessagesDatabase.push({
        receiver: this.currentUserID,
        message: message.text,
      });
      console.log(`Received message from ${peerId}: ${message.text}`);
    });
    this.recivedMessageToServer();

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
          this.message = "";
          this.sendToServer(message);
          this.getAllMeassage(
            this.dataobj.sender_id,
            this.dataobj.username,
            this.dataobj.profile_image
          );
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
          this.roomProfileImage = item.profile_image;
          console.log(this.roomProfileImage);
        });
        this.getAllMeassage(
          this.roomListData[0]?.chat_profile?.sender_id,
          this.roomListData[0]?.username,
          this.roomListData[0]?.profile_image
        );
        console.log("Message sent to server successfully");
      } catch (error) {
        console.log("Failed to send message to server", error);
      }
    },
    async getAllMeassage(sender, name, profile_image) {
      this.profile_image = "";
      console.log("sebser", sender);
      // debugger;
      this.dataobj.sender_id = sender;
      this.dataobj.username = name;
      this.dataobj.profile_image = profile_image;
      console.log(this.dataobj);
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
        this.getAllMessagesDatabase = [];
        response.data.forEach((item) => {
          this.getAllMessagesDatabase.push(item);
        });
        this.active = true;
        this.getAllMessagesDatabase = this.getAllMessagesDatabase.reverse();
        console.log("lksdk");
        // debugger;
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

<style>
.chat {
  margin-top: auto;
  margin-bottom: auto;
}
.card {
  height: 750px;
  border-radius: 15px !important;
  background-color: rgb(224, 250, 251) !important;
}
.contacts_body {
  padding: 0.75rem 0 !important;
  overflow-y: auto;
  white-space: nowrap;
}
.msg_card_body {
  overflow-y: auto;
}
.card-header {
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
}
.card-footer {
  border-radius: 0 0 15px 15px !important;
  border-top: 0 !important;
}
.container {
  align-content: center;
}
.search {
  border-radius: 15px 0 0 15px !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
}
.search:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.type_msg {
  background-color: rgb(255, 255, 255) !important;
  border: 0 !important;
  color: rgb(0, 0, 0) !important;
  height: 60px !important;
  overflow-y: auto;
}
.type_msg:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.attach_btn {
  border-radius: 15px 0 0 15px !important;
  background-color: rgb(255, 255, 255) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}
.send_btn {
  border-radius: 0 15px 15px 0 !important;
  background-color: rgb(255, 255, 255) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}
.search_btn {
  border-radius: 0 15px 15px 0 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}
.contacts {
  list-style: none;
  padding: 0;
}
.contacts li {
  width: 100% !important;
  padding: 5px 10px;
  margin-bottom: 15px !important;
}
.chat_active {
  background-color: white;
}
.user_img {
  height: 70px;
  width: 70px;
  border: 1.5px solid #f5f6fa;
}
.user_img_msg {
  height: 40px;
  width: 40px;
  border: 1.5px solid #f5f6fa;
}
.img_cont {
  position: relative;
  height: 70px;
  width: 70px;
}
.img_cont_msg {
  height: 40px;
  width: 40px;
}
.online_icon {
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: #4cd137;
  border-radius: 50%;
  bottom: 0.2em;
  right: 0.4em;
  border: 1.5px solid white;
}
.offline {
  background-color: #c23616 !important;
}
.user_info {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
}
.user_info span {
  font-size: 20px;
  color: rgb(0, 0, 0);
}
.user_info p {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.6);
}
.video_cam {
  margin-left: 50px;
  margin-top: 5px;
}
.video_cam span {
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
}
.msg_cotainer {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
}
.msg_cotainer_send {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  border-radius: 25px;
  background-color: #78e08f;
  padding: 10px;
  position: relative;
}
.msg_time {
  position: absolute;
  left: 0;
  bottom: -15px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
}
.msg_time_send {
  position: absolute;
  right: 0;
  bottom: -15px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
}
.msg_head {
  position: relative;
}
#action_menu_btn {
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
  font-size: 20px;
}
.action_menu {
  z-index: 1;
  position: absolute;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 15px;
  top: 30px;
  right: 15px;
  display: none;
}
.action_menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.action_menu ul li {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 5px;
}
.action_menu ul li i {
  padding-right: 10px;
}
.action_menu ul li:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
}
@media (max-width: 576px) {
  .contacts_card {
    margin-bottom: 15px !important;
  }
}
</style>
