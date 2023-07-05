<template>
  <div class="chat-list">
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <img :src="user.profilePicture" alt="Profile Picture" />
        <div class="user-details">
          <h3>{{ user.name }}</h3>
          <p>Last message sent by user</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          name: "John Doe",
          profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          name: "Jane Smith",
          profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
        },
      ],
    };
  },
};
</script>
