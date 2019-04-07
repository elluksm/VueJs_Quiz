import axios from "axios";

const baseUrl = "http://localhost:8000";
class QuizService {
  async fetchPossibleQuizes() {
    const response = await axios.get(`${baseUrl}/api/getquizes`);
    return response.data;
  }

  async fetchQuizQuestions(data) {
    const response = await axios.get(`${baseUrl}/api/quiz/${data}`);
    return response.data;
  }

  async checkAnswer(data) {
    //Šeit vajadzēja būt POST, bet radās problēmas ar laravel CORS middleware, tāpēc šajā uzdevumā atstāts GET.
    let url = `${baseUrl}/api/checkanswer/${data.questionId}/${
      data.selectedAnswer
    }`;
    const response = await axios.get(url);
    // const response = await axios.post(`${baseUrl}/api/check`, {
    //   questionId: questionId,
    //   selectedAnswer: selectedAnswer
    // });
    return response.data;
  }
}

export default new QuizService();
