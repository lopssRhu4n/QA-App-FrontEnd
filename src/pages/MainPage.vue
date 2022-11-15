<template>
  <q-page>
    <div class="row q-gutter-md">
      <div class="col-2 bg-white fixed full-height">
        <q-card class="full-height">
          <q-card-section>
            <p>Ask something!</p>
            <q-card-actions class="bg-primary">
              <q-form>
                <q-input type="textarea" bg-color="white"></q-input>
                <div>
                  <q-input type="submit"></q-input>
                  <q-input type="reset"></q-input>
                </div>
              </q-form>
            </q-card-actions>
          </q-card-section>
          <q-card-actions> </q-card-actions>
        </q-card>
      </div>
      <div>
        <div
          class="row wrap justify-around"
          v-for="(post, index) in posts"
          :key="index"
        >
          <user-question :post="post" class="q-my-lg" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import http from "../plugins/http";
import UserQuestion from "../components/UserQuestion.vue";
import { useUserStore } from "../stores/user";

export default {
  components: {
    UserQuestion,
  },
  setup() {
    const store = useUserStore();
    const posts = ref([]);
    const user = ref("");

    user.value = store.getUsername;

    http.get(`/posts/${user.value}`).then((response) => {
      posts.value = response.data;
    });

    return { posts, user, store };
  },
};
</script>
