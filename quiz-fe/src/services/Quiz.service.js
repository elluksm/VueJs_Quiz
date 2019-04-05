import axios from 'axios'

class QuizService {
    async fetchPossibleQuizes() {
        const response = await axios.get('/api/getquizes');
        return response.data;
    }

    async fetchQuizQuestions() {
        const response = await axios.get('/api/getquestions');
        return response.data;
    }

    async checkAnswer(questionId, selectedAnswer) {
        const response = await axios.post('/api/check',
            {
                questionId: questionId,
                selectedAnswer: selectedAnswer
            });
        return response.data;
    }
}

export default new QuizService();