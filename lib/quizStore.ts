import { create } from 'zustand';

interface QuizStore {
  currentQuestionIndex: number;
  userAnswers: Record<number, number | undefined>;
  quizState: "init" | "inProgress" | "result";
  startQuiz: () => void;
  answerQuestion: (questionIndex: number, answerIndex: number, isCorrect: boolean) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setUserAnswers: (currentQuestionIndex: number, userAnswer:number | undefined) => void;
  setQuizState: (state: "init" | "inProgress" | "result") => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  currentQuestionIndex: 0,
  userAnswers: {},
  quizState: "init",
  startQuiz: () => set({ quizState: "inProgress", userAnswers: {}, currentQuestionIndex: 0 }),
  answerQuestion: (questionIndex: number, answerIndex: number) => set((state) => {
    const newState = Object.assign({}, state)
    newState.userAnswers[questionIndex] = answerIndex;
    return newState
  }),
  setCurrentQuestionIndex: (index: number) => set({ currentQuestionIndex: index }),
  setUserAnswers: (currentQuestionIndex, userAnswer) => set((state) => {
    const newState = Object.assign({}, state)
    newState.userAnswers[currentQuestionIndex] = userAnswer
    return newState
  }),
  setQuizState: (state: "init" | "inProgress" | "result") => set({ quizState: state })
}))