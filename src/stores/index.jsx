import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal"
import auth from "./auth"

export const store = configureStore({
    reducer: {
        modal,
        auth
    }
})