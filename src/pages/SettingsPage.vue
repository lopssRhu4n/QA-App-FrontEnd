<template>
  <q-page>
    <div class="bg-white" fit>
      <q-card>
        <q-card-section>
          <div class="text-h6">
            Username : {{ user.username }} <q-btn icon="edit" flat></q-btn>
          </div>
          <div class="text-h6">
            Email : {{ user.email }}<q-btn icon="edit" flat></q-btn>
          </div>
          <div class="text-h6">
            ID : {{ user.id }}<q-btn icon="edit" flat></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import UserService from "../services/UserService";
//import http from "../plugins/http";

export default {
  setup() {
    const userID = localStorage.getItem("USERID");
    const user = ref({});
    const getUser = async () => {
      try {
        const { data, status } = await UserService.getUniqueUser(userID);
        console.log(data, status);
        user.value = data;
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

    return {
      user,
      userID,
    };
  },
};
</script>
