<template>
  <div class="quiz-progress">
    <b-progress :max="max" height="2rem">
      <b-progress-bar :value="value" variant="success">
        <strong v-if="value > 0">{{ value }} / {{ max }}</strong>
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
$dark: #1b1e21;
.quiz-progress {
  padding-bottom: 5%;

  .progress {
    border-radius: 1rem;
    font-size: 1rem;
    background-color: $dark;
  }
}
</style>
