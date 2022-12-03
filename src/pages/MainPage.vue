<template>
  <q-page>
    <div class="row q-gutter-md">
      <div class="col-2 bg-white full-height">
        <q-card class="full-height">
          <q-card-section>
            <p>Ask something!</p>
            <q-card-actions class="bg-primary">
              <q-form @submit="submitQuestion" @reset="OnReset">
                <q-input
                  type="text"
                  bg-color="white"
                  v-model="question.title"
                  class="q-my-sm"
                  outlined
                  placeholder="Title"
                ></q-input>
                <q-input
                  type="textarea"
                  bg-color="white"
                  class="q-my-sm"
                  v-model="question.content"
                  placeholder="Content"
                  outlined
                ></q-input>
                <div>
                  <q-input
                    bg-color="white"
                    type="submit"
                    :loading="loading.value"
                    class="q-my-sm"
                  ></q-input>
                  <q-input
                    type="reset"
                    bg-color="secondary"
                    class="q-my-sm"
                  ></q-input>
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
import PostsService from "../services/PostsService";

export default {
  components: {
    UserQuestion,
  },
  setup() {
    const posts = ref([]);
    const user = ref("");
    user.value = localStorage.getItem("USERNAME");
    PostsService.getQuestions(user.value).then((response) => {
      posts.value = response.data;
    });

    const loading = ref(false);
    const store = useUserStore();
    store.setIsLogged();

    const question = ref({
      author: "",
      content: "",
      title: "",
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
    const OnReset = () => {
      question.value.content = "";
      question.value.title = "";
    };

    return {
      posts,
      user,
      store,
      submitQuestion,
      question,
      loading,
      OnReset,
    };
  },
};
</script>
