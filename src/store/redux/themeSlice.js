import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        theme: 'light'
    },
    reducers: {
        toggleTheme: (state, action) => {
            if (state.theme === 'light') {
                state.theme = 'dark'
            }
            else {
                state.theme = 'light'
            }
        }
    }
})

export const toggleTheme = themeSlice.actions.toggleTheme;

export default themeSlice;