import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allQuiz: [],
    quiz: false

}

export const quiz = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuiz: (state, action) => {
            state.allQuiz = action.payload
        },
        getQuiz: (state, action) => {
            state.quiz = action.payload
        },
        appendQuiz: (state, action) => {
            state.allQuiz = [...state.allQuiz, action.payload]
        }
    }
})

export const { setQuiz, appendQuiz, getQuiz } = quiz.actions
export default quiz.reducer