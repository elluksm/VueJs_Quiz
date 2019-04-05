<template>
  <div class="quiz">
    <h1>Jautājums</h1>

      <RadioButton title="RadioButton" />
      <ProgressBar maxValue=5 />

    <router-link to="/summary">summary</router-link><br>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import RadioButton from "@/components/RadioButton.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: "quiz",
  components: {
    RadioButton,
    ProgressBar
  }
};
</script>
