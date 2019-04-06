<template>
  <div class="quiz">
    <b-container>
      <h1>Paldies, {{ userName }}!</h1>
      <p>
        Tu atbildēji pareizi uz 
        {{ correctAnswers }}
        no {{ quizQuestions.length }} jautājumiem.
      </p>

      <b-button
        type="submit"
        variant="outline-success"
        size="lg"
        v-on:click="onSubmit"
        >Mēģināt vēlreiz
      </b-button>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "summary",
  computed: {
    ...mapState(["userName", "correctAnswers", "quizQuestions"])
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped lang="scss">
$white: #fff;

p {
  color: $white;
  font-size: 1.2em;
  padding-bottom: 2%;
}
</style>
