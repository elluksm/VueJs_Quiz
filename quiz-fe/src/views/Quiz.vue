<template>
  <div class="quiz">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col sm="12" md="8">
          <h1>{{ question.title }}</h1>

          <b-form>
            <b-form-group>
              <div v-for="option in question.options" :key="option.value">
                <b-form-radio
                  v-model="selectedAnswer"
                  name="some-radios"
                  :value="option.value"
                  >{{ option.text }}
                </b-form-radio>
              </div>
            </b-form-group>
          </b-form>
          <b-row class="justify-content-md-center">
            <b-col sm="12" md="8">
              <ProgressBar 
                :max="quizQuestions.length"
                :value="questionNumber - 1"
              />
            </b-col>
          </b-row>

          <b-button
            type="submit"
            variant="outline-success"
            size="lg"
            v-on:click="onSubmit"
            >Nākamais
          </b-button>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "quiz",
  components: {
    ProgressBar
  },
  data: function() {
    return {
      selectedAnswer: "",
      questionNumber: Number(this.$route.params.number)
    };
  },
  computed: {
    ...mapState(["quizQuestions"]),
    ...mapGetters(["getQuestion"]),
    question() {
      return this.$store.getters.getQuestion(this.questionNumber - 1);
    }
  },
  created() {},
  methods: {
    ...mapActions(["checkAnswer"]),
    onSubmit() {
      if (this.questionNumber < this.quizQuestions.length) {
        this.questionNumber++;
        this.$router.push({
          name: "quiz",
          params: { number: this.questionNumber }
        });
      } else {
        this.$router.push({ name: "summary" });
      }
    }
  }
};
</script>
