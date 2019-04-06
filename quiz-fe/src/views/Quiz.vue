<template>
  <div class="quiz">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col sm="12">
          <h1>{{ question.title }}</h1>

          <b-form>
            <b-form-group>
              <b-row>
                <b-col
                  sm="12"
                  lg="6"
                  v-for="option in question.options"
                  :key="option.value"
                >
                  <div class="radio-box">
                    <input
                      type="radio"
                      :value="option.value"
                      v-model="selectedAnswer"
                      :id="option.value"
                    />
                    <label :for="option.value">{{ option.text }}</label>
                  </div>
                </b-col>
              </b-row>
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
            v-if="selectedAnswer"
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
        this.selectedAnswer = "";
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

<style scoped lang="scss">
$white: #fff;
$green: #007e90;

.radio-box {
  position: relative;
  display: block;
  padding: 2% 8%;
  transition: all 250ms ease;
  will-change: transition;

  &:active {
    transform: translateY(10px);
  }

  label {
    display: block;
    padding: 20px 20px;
    background-color: $white;
    color: $green;
    font-weight: 700;
    font-size: 1.2em;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
}

input[type="radio"] {
  display: none;

  &:checked + label {
    background: $green;
    color: $white;
  }
}
</style>
