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
