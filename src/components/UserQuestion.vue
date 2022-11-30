<template>
  <q-card class="my-card text-white bg-primary">
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
      <div class="text-subtitle2">{{ post.author }}</div>
      <q-btn
        unelevated
        color="secondary"
        @click="deletePost"
        :size="xs"
        rounded
        icon="delete"
      />
      <q-btn
        unelevated
        color="secondary"
        @click="DeletePost"
        :size="xs"
        rounded
        icon="edit"
      />
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ post.content }}
    </q-card-section>
    <q-card-actions>
      <q-form class="full-width" @submit="submitAnswer">
        <q-input
          v-model="answerText"
          label="Answer"
          bg-color="white"
          filled
          type="textarea"
        />
        <div>
          <q-input type="submit" bg-color="white" class="q-mt-md"></q-input>
          <q-input type="reset"></q-input>
        </div>
      </q-form>
    </q-card-actions>
  </q-card>
</template>

<script>
import { ref } from "vue";
import router from "../router";
import AnswerService from "../services/AnswerService";
import PostsService from "../services/PostsService";

export default {
  props: {
    post: Object,
  },
  setup(props) {
    const answerData = ref({
      content: "",
      author: "",
    });

    const deletePost = async () => {
      try {
        const { data, status } = await PostsService.deleteQuestion(
          props.post.id
        );
        console.log(data, status);
      } catch (error) {
        console.log(error);
      } finally {
        router.push("/");
      }
    };

    const submitAnswer = async () => {
      try {
        const { res } = await AnswerService.postAnswer(answerData);
        console.log(res);
      } catch (error) {
        window.alert(error.message);
      }
    };

    return { props, answerData, deletePost, submitAnswer };
  },
};
</script>

<style scoped>
.q-card {
  width: 50%;
}
</style>
