import Vue from "vue";
import Vuex from "vuex";
import QuizService from "./services/Quiz.service";

Vue.use(Vuex);

export const state = {
  userName: "",
  selectedQuiz: "null",
  correctAnswers: 0,
  possibleQuizes: [
    {
      value: "value1",
      text: "kjh jfjrj"
    },
    {
      value: "value2",
      text: "2kjh jfjrj"
    }
  ],
  quizQuestions: [
    {
      title: "first question",
      questionId: 1,
      options: [
        {
          text: "kjh jfjrj",
          value: "value1"
        },
        {
          text: "2kjh jfjrj",
          value: "value12"
        },
        {
          text: "3kjh jfjrj",
          value: "value13"
        },
        {
          text: "4kjh jfjrj",
          value: "value14"
        }
      ]
    },
    {
      title: "second question",
      questionId: 2,
      options: [
        {
          text: "kjh jfjrj",
          value: "value1"
        },
        {
          text: "kjh jfjrj",
          value: "value2"
        }
      ]
    }
  ]
};

export const actions = {
  async fetchPossibleQuizes({ commit }) {
    const possibleQuizes = await QuizService.fetchPossibleQuizes();
    commit("setPossibleQuizes", possibleQuizes);
  },
  async fetchQuizQuestions({ commit, state }) {
    const quizQuestions = await QuizService.fetchQuizQuestions(
      state.selectedQuiz
    );
    commit("setQuizQuestions", quizQuestions);
  },
  async checkAnswer({ commit }, questionId, selectedAnswer) {
    const isAnswerCorrect = await QuizService.checkAnswer(
      questionId,
      selectedAnswer
    );
    if (isAnswerCorrect) {
      commit("addCorrectAnswer");
    }
  }
};

export const mutations = {
  setPossibleQuizes(state, possibleQuizes) {
    state.possibleQuizes = possibleQuizes;
  },
  setQuizQuestions(state, quizQuestions) {
    state.quizQuestions = quizQuestions;
  },
  addCorrectAnswer(state) {
    state.correctAnswers++;
  },
  updateUserName(state, userName) {
    state.userName = userName;
  },
  updateSelectedQuiz(state, selectedQuiz) {
    state.selectedQuiz = selectedQuiz;
  }
};

export const getters = {
  getQuestion: state => number => {
    return state.quizQuestions[number];
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
