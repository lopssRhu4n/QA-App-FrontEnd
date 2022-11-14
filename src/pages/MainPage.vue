<template>
  <q-page>
    <div
      class="row wrap justify-around"
      v-for="(post, index) in posts"
      :key="index"
    >
      <user-question :post="post" class="q-my-lg" />
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import http from "../plugins/http";
import UserQuestion from "../components/UserQuestion.vue";

export default {
  components: {
    UserQuestion,
  },
  setup() {
    const posts = ref([]);
    const user = ref("");

    http.get("/posts/rhuanzin").then((response) => {
      posts.value = response.data;
    });

    return { posts, user };
  },
};
</script>
