import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    value: []
}

export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {}
})

export default reservationsSlice.reducer