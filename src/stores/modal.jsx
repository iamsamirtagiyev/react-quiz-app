import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open: false
}

export const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.open = action.payload
        },
        closeModal: state => {
            state.open = false
        }
    }
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer