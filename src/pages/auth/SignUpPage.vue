<template>
  <q-page class="bg-secondary flex flex-center">
    <q-card square class="shadow-24" style="width: 300px; height: 485px">
      <q-card-section class="bg-primary">
        <h4 class="text-h5 text-white q-my-md">Sign Up!</h4>
        <div
          class="absolute-bottom-right q-pr-md"
          style="transform: translateY(50%)"
        >
          <q-btn fab icon="close" color="purple-4" />
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-px-sm q-pt-xl q-pb-lg">
          <q-input
            square
            clearable
            v-model="userData.email"
            type="email"
            label="Email"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input
            square
            clearable
            v-model="userData.username"
            type="username"
            label="Username"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input
            square
            clearable
            v-model="userData.password"
            type="password"
            label="Password"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </q-form>
      </q-card-section>
      <q-card-actions class="q-px-lg">
        <q-btn
          unelevated
          size="lg"
          color="purple-4"
          class="full-width text-white"
          label="Get Started"
          @click="signUp"
        />
      </q-card-actions>
      <q-card-section class="text-center q-pa-sm">
        <q-btn unelevated to="/signin" class="text-grey-6"
          >Return to login</q-btn
        >
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
//import http from "../../plugins/http";
import { useUserStore } from "../../stores/user";
//import router from "../../router/index";
import UserService from "../../services/UserService";
import router from "../../router";

export default {
  setup() {
    const email = ref("");
    const username = ref("");
    const password = ref("");
    const userData = ref({
      email: "",
      username: "",
      password: "",
    });
    const store = useUserStore();

    const signUp = async () => {
      try {
        const { data, status } = await UserService.createUser(userData.value);
        console.log(data, status);
        router.push("/signin");
      } catch (error) {
        window.alert(error.message);
      }
      // http
      //   .post("/users/", {
      //     email: email.value,
      //     username: username.value,
      //     password: password.value,
      //   })
      //   .then((response) => {
      //     if (response.data.status == "error") {
      //       window.alert(response.data.msg);
      //     } else {
      //       store.setUsername(response.data.username);
      //       store.setUsertoken(response.data.jwt);
      //       router.push("/");
      //     }
      // });
    };

    return { email, username, password, signUp, store, userData };
  },
};
</script>
