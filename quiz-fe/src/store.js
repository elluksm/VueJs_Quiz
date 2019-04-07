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
      value: "0",
      text: "Geographie"
    },
    {
      value: "1",
      text: "Math"
    }
  ],
  quizQuestions: [
    {
      title: "First question",
      questionId: 1,
      options: [
        {
          text: "A",
          value: "1"
        },
        {
          text: "B",
          value: "2"
        },
        {
          text: "C",
          value: "3"
        },
        {
          text: "D",
          value: "4"
        }
      ]
    },
    {
      title: "Second question",
      questionId: 2,
      options: [
        {
          text: "yes",
          value: "1"
        },
        {
          text: "no",
          value: "2"
        }
      ]
    }
  ]
};

export const actions = {
  async fetchPossibleQuizes({ commit }) {
    const possibleQuizes = await QuizService.fetchPossibleQuizes();
    commit("setPossibleQuizes", possibleQuizes);
    commit("resetCorrectAnswers");
  },
  async fetchQuizQuestions({ commit, state }) {
    const quizQuestions = await QuizService.fetchQuizQuestions(
      state.selectedQuiz
    );
    commit("setQuizQuestions", quizQuestions);
  },
  async checkAnswer({ commit }, data) {
    const isAnswerCorrect = await QuizService.checkAnswer(data);
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
  resetCorrectAnswers(state) {
    state.correctAnswers = 0;
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
