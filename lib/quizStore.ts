import { create } from 'zustand';

interface UserAnswer {
  answerIndex: number;
  isCorrect: boolean;
}

interface QuizStore {
  currentQuestionIndex: number;
  userAnswers: {[key: string]: UserAnswer};
  quizStarted: boolean;
  startQuiz: () => void;
  answerQuestion: (questionIndex: number, answerIndex: number, isCorrect: boolean) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  currentQuestionIndex: 0,
  userAnswers: {},
  quizStarted: false,

  startQuiz: () => set({ quizStarted: true, userAnswers: {}, currentQuestionIndex: 0 }),
  answerQuestion: (questionIndex: number, answerIndex: number, isCorrect: boolean) => set((state) => {
    const newState = Object.assign({}, state)
    newState.userAnswers[questionIndex] = {answerIndex, isCorrect} as UserAnswer
    return newState
  })
}))