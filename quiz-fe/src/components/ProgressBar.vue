<template>
  <div class="quiz-progress">
    <b-progress :max="max" height="2rem">
      <b-progress-bar :value="value" variant="success">
        <strong>{{ value }} / {{ max }}</strong>
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    max: Number,
    value: Number
  }
};
</script>

<style scoped lang="scss">
.quiz-progress {
  padding-bottom: 5%;
}
.progress {
  border-radius: 1rem;
  font-size: 1rem;
}
</style>
