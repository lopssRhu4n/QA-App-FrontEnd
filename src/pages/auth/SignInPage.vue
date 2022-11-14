<template>
  <q-page class="flex flex-center bg-secondary">
    <div>
      <q-card square class="shadow-24" style="width: 300px; height: 515px">
        <q-card-section class="bg-primary">
          <h4 class="text-h5 text-white q-my-md">Q&amp;A App</h4>
          <div
            class="absolute-bottom-right q-pr-md"
            style="transform: translateY(50%)"
          >
            <q-btn fab icon="add" color="purple-4" />
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-input
              square
              clearable
              v-model="email"
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
              v-model="password"
              type="password"
              label="Password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-section>
          <div class="text-center q-gutter-md">
            <q-btn unelevated to="/signup">
              <p class="text-subtitle">SignUp</p>
            </q-btn>
          </div>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            color="purple-4"
            class="full-width text-white"
            label="Sign In"
            @click="login"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <q-btn to="/" unelevated>
            <p class="text-grey-6">Forgot your password?</p>
          </q-btn>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import http from "../../plugins/http";
import router from "../../router/index";
import { useUserStore } from "../../stores/user";

export default {
  setup() {
    const store = useUserStore();
    const email = ref("");
    const password = ref("");

    const login = () => {
      http
        .post("/login/", {
          email: email.value,
          password: password.value,
        })
        .then((response) => {
          const jwt = response.data.token;
          const username = response.data.user;

          store.setUsertoken(jwt);
          store.setUsername(username);

          localStorage.setItem("USERNAME", username);
          localStorage.setItem("JWT_TOKEN", jwt);
          router.push("/");
        })
        .catch((error) => {
          console.log("An error ocurred: ", error);
        });
    };

    return { email, password, login, store };
  },
};
</script>
