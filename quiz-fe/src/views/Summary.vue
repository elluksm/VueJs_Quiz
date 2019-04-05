<template>
  <div class="summary">
    <h1>Paldies, {{userName}}!</h1>
    <p>Tu atbildēji pareizi uz {{correctAnswers}} no {{quizQuestions.length}} jautājumiem.</p>

    <router-link to="/">Sākt no sākuma</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'userName',
      'correctAnswers',
      'quizQuestions',
    ])
  },
}
</script>
