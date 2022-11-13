<template>
  <q-card class="my-card text-white bg-primary">
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
      <div class="text-subtitle2">{{ post.author }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ post.content }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  setup(props) {
    return { props };
  },
};
</script>

<style scoped>
.q-card {
  width: 50%;
}
</style>
