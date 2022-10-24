import {configureStore} from "@reduxjs/toolkit"
import reservationReducer from "../features/reservationSlice"

export const store = configureStore({
    reducer: {
        reservations: reservationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch