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
              v-model="form.email"
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
              v-model="form.password"
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
            :loading="loading"
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
import { reactive, ref } from "vue";
// import http from "../../plugins/http";
// import router from "../../router/index";
import { useUserStore } from "../../stores/user";
import authService from "../../services/AuthService";
import router from "../../router";

export default {
  setup() {
    const store = useUserStore();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const form = reactive({
      email: "",
      password: "",
    });

    const login = async () => {
      try {
        loading.value = true;
        const { data, status } = await authService.login(form);
        console.log(data, status);

        const jwt = data.token;
        const username = data.user;
        const id = data.userID;

        store.setUserID(id);
        store.setUsertoken(jwt);
        store.setUsername(username);

        localStorage.setItem("USERID", id);
        localStorage.setItem("USERNAME", username);
        localStorage.setItem("JWT_TOKEN", jwt);

        router.push("/");
      } catch (error) {
        window.alert(error.response.data.msg);
      } finally {
        loading.value = false;
      }
    };

    return { email, password, login, store, form, loading };
  },
};
</script>
