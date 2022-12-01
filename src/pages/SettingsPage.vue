<template>
  <q-page>
    <h1>{{ user.username }}</h1>
  </q-page>
</template>

<script>
import { ref } from "vue";
import UserService from "../services/UserService";

export default {
  setup() {
    const userID = localStorage.getItem("USERID");
    const user = ref("");

    user.value = UserService.getUniqueUser(userID);
    console.log(user.value);
    return {
      user,
      userID,
    };
  },
};
</script>
