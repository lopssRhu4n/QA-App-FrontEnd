<template>
  <q-page>
    <div class="row q-gutter-md">
      <div class="col-2 bg-white full-height">
        <q-card class="full-height">
          <q-card-section>
            <p>Ask something!</p>
            <q-card-actions class="bg-primary">
              <q-form @submit="submitQuestion">
                <q-input
                  type="text"
                  bg-color="white"
                  v-model="question.title"
                  placeholder="Title"
                ></q-input>
                <q-input
                  type="textarea"
                  bg-color="white"
                  v-model="question.content"
                  placeholder="Content"
                ></q-input>
                <div>
                  <q-input
                    type="submit"
                    :loading="loading.value"
                    placeholder="enviar"
                  ></q-input>
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
//import http from "../plugins/http";
import UserQuestion from "../components/UserQuestion.vue";
import { useUserStore } from "../stores/user";
import router from "../router";
import PostsService from "../services/PostsService";

export default {
  components: {
    UserQuestion,
  },
  setup() {
    const loading = ref(false);
    const store = useUserStore();
    const posts = ref([]);
    const user = ref("");
    const question = ref({
      author: "",
      content: "",
      title: "",
    });

    user.value = localStorage.getItem("USERNAME");

    if (!user.value) {
      router.push("/signin");
    }

    PostsService.getQuestions(user.value).then((response) => {
      posts.value = response.data;
    });

    const submitQuestion = async () => {
      try {
        question.value.author = user.value;
        loading.value = true;
        const { data, status } = await PostsService.postQuestion(
          question.value
        );
        console.log(data, status);
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    return { posts, user, store, submitQuestion, question, loading };
  },
};
</script>
