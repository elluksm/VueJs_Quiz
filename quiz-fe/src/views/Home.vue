<template>
  <div class="quiz">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col sm="12" md="8">
          <h1>Testa uzdevums</h1>
          <b-form>
            <b-form-group>
              <b-form-input
                type="text"
                v-model="userName"
                size="lg"
                placeholder="Ievadi savu vārdu"
              >
              </b-form-input>
              <p v-if="userNameError" class="error">{{ userNameError }}</p>
            </b-form-group>
            <b-form-group>
              <b-form-select 
                v-model="selectedQuiz"
                size="lg"
                :options="possibleQuizes"
              >
                <template slot="first">
                  <option :value="null" disabled>Izvēlies testu</option>
                </template>
              </b-form-select>
              <p v-if="quizSelectionError" class="error">
                {{ quizSelectionError }}
              </p>
            </b-form-group>
          </b-form>
          <b-button
            type="submit"
            variant="outline-success"
            size="lg"
            v-on:click="onSubmit"
            >Sākt
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  data: function() {
    return {
      userNameError: "",
      quizSelectionError: ""
    };
  },
  computed: {
    ...mapState(["possibleQuizes"]),
    userName: {
      get() {
        return this.$store.state.userName;
      },
      set(value) {
        this.$store.commit("updateUserName", value);
      }
    },
    selectedQuiz: {
      get() {
        return this.$store.state.selectedQuiz;
      },
      set(value) {
        this.$store.commit("updateSelectedQuiz", value);
      }
    }
  },
  created() {
    this.fetchPossibleQuizes();
  },
  methods: {
    ...mapActions(["fetchPossibleQuizes", "fetchQuizQuestions"]),
    onSubmit() {
      if (this.userName && this.selectedQuiz !== "null") {
        this.fetchQuizQuestions().then(() => {
          this.$router.push({ name: "quiz", params: { number: 1 } });
        });
      }

      this.userNameError = null;
      this.quizSelectionError = null;

      if (!this.userName) {
        this.userNameError = "Lūdzu ievadi savu vārdu!";
      }
      if (this.selectedQuiz === "null") {
        this.quizSelectionError = "Lūdzu izvēlies testu!";
      }
    }
  }
};
</script>

<style lang="scss">
$white: #fff;
$background: rgba(0, 0, 0, 0.8);

.quiz {
  .container {
    background-color: $background;
    margin-top: 10%;
    padding: 3%;

    h1 {
      color: white;
      padding-top: 2%;
      padding-bottom: 3%;
    }
    .btn-lg {
      padding: 0.8rem 3rem;
      border-radius: 2rem;
    }
    .error {
      color: red;
      padding-top: 1%;
    }
    .form-group {
      padding: 2%;
    }
  }
}
</style>
