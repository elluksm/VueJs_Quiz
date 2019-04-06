<template>
  <div class="home">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col sm="12" md="8">
          <h1>Testa uzdevums</h1>
          <b-form>
            <b-form-group>
              <b-form-input
                type="text"
                v-model="userName" 
                placeholder="Ievadi savu vārdu"
              >
              </b-form-input>
              <p v-if="userNameError">{{ userNameError }}</p>
            </b-form-group>
            <b-form-group>
              <b-form-select v-model="selectedQuiz" :options="possibleQuizes">
                <template slot="first">
                  <option :value="null" disabled>Izvēlies testu</option>
                </template>
              </b-form-select>
              <p v-if="quizSelectionError">{{ quizSelectionError }}</p>
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
  methods: {
    onSubmit() {
      if (this.userName && this.selectedQuiz !== "null") {
        this.$router.push({ name: "quiz", params: { number: 1 } });
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

<style scoped lang="scss">
</style>
