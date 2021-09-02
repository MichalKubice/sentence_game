const initialState = {
  questionsAnswered: false,
  selectedQuestion: 0,
  questions: [
    { id: 0, text: "Who?", answer: "" },
    { id: 1, text: "What?", answer: "" },
    { id: 2, text: "When?", answer: "" },
    { id: 3, text: "Where?", answer: "" },
  ],
  sentences: [],
};
const gameReducer = (state = initialState, action) => {
  if (action.type === "reset") {
    return {
      ...state,
      questionsAnswered: false,
      questions: [
        { id: 0, text: "Who?", answer: "" },
        { id: 1, text: "What?", answer: "" },
        { id: 2, text: "When?", answer: "" },
        { id: 3, text: "Where?", answer: "" },
      ],
      sentences: [...state.sentences, action.payload],
    };
  }
  // All questions answered
  if (action.type === "done_check") {
    let done = true;
    state.questions.map((q) => {
      if (q.answer === "") {
        done = false;
      }
      return q;
    });
    if (!done) {
      return {
        ...state,
      };
    } else {
      return { ...state, questionsAnswered: true };
    }
  }
  // Selects current question
  if (action.type === "select") {
    return { ...state, selectedQuestion: action.questNum };
  }
  // Add answer to selected question
  if (action.type === "answer") {
    return {
      ...state,
      questions: state.questions.map((q) => {
        if (q.id !== state.selectedQuestion) {
          return q;
        }
        return {
          ...q,
          answer: action.payload,
        };
      }),
    };
  }
  return state;
};
export default gameReducer;
