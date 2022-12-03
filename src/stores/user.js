import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const username = ref("");
  const getUsername = computed(() => username.value);
  function setUsername(value) {
    username.value = value;
  }

  const isLogged = ref(false);
  const getIsLogged = computed(() => isLogged.value);
  function setIsLogged() {
    isLogged.value = !isLogged.value;
  }

  const userID = ref("");
  const getUserID = computed(() => userID.value);
  function setUserID(value) {
    userID.value = value;
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
    userID,
    getUserID,
    setUserID,
    usertoken,
    getUsertoken,
    setUsertoken,
    isLogged,
    setIsLogged,
    getIsLogged,
  };
});
