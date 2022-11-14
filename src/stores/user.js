import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const username = ref("");
  const getUsername = computed(() => username.value);
  function setUsername(value) {
    username.value = value;
  }

  const usertoken = ref("");
  const getUsertoken = computed(() => usertoken.value);
  function setUsertoken(value) {
    usertoken.value = value;
  }

  return {
    username,
    getUsername,
    setUsername,
    usertoken,
    getUsertoken,
    setUsertoken,
  };
});
