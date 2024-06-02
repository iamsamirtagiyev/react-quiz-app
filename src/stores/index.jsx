import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal"
import auth from "./auth"
import quiz from "./quiz"

export const store = configureStore({
    reducer: {
        modal,
        auth,
        quiz
    }
})