import Vue from "vue";
import Vuex from "vuex";
import QuizService from './services/Quiz.service'

Vue.use(Vuex);

export const state = {
  userName: "Aija",
  selectedQuiz: null,
  correctAnswers: 0,
  possibleQuizes: [
    {
      text: "kjh jfjrj",
      value: "value1",
    },
    {
      text: "kjh jfjrj",
      value: "value1",
    },
  ],
  quizQuestions: [
    {
      title: "first question",
      questionId: 1,
      options: [
        {
          text: "kjh jfjrj",
          value: "value1",
        },
        {
          text: "2kjh jfjrj",
          value: "value12",
        },
        {
          text: "3kjh jfjrj",
          value: "value13",
        },
        {
          text: "4kjh jfjrj",
          value: "value14",
        },
      ],
    },
    {
      title: "first question",
      questionId: 2,
      options: [
        {
          text: "kjh jfjrj",
          value: "value1",
        },
        {
          text: "kjh jfjrj",
          value: "value2",
        },
      ],
    },
  ],
}

export const actions = {
  async fetchPossibleQuizes({ commit }) {
    const possibleQuizes = await QuizService.fetchPossibleQuizes()
    commit('setPossibleQuizes', possibleQuizes);
  },
  async fetchQuizQuestions({ commit, state }) {
    const quizQuestions = await QuizService.fetchQuizQuestions(state.selectedQuiz)
    commit('setQuizQuestions', quizQuestions);
  },
  async checkAnswer({ commit }, questionId, selectedAnswer) {
    const isAnswerCorrect = await QuizService.checkAnswer(questionId, selectedAnswer)
    if(isAnswerCorrect) {
      commit('addCorrectAnswer');
    }
  },
}

export const mutations = {
  setPossibleQuizes(state, possibleQuizes) {
    state.possibleQuizes = possibleQuizes;
  },
  setQuizQuestions(state, quizQuestions) {
    state.quizQuestions = quizQuestions;
  },
  addCorrectAnswer(state) {
    state.correctAnswers++;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
});
