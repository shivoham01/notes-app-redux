import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('notes')) || []
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addToNotes: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const { addToNotes } = notesSlice.actions
export default notesSlice.reducer