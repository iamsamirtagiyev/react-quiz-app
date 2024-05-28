import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) ?? false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.user = action.payload
        },
        logoutUser: state => {
            localStorage.removeItem('user')
            state.user = false
        }
    }
})

export const { loginUser, logoutUser } = auth.actions
export default auth.reducer