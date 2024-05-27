import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal"

export const store = configureStore({
    reducer: {
        modal
    }
})