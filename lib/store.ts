 import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import signUpStepReducer from './features/signUpSteps/signUpStepsSlice'

 export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            signUpStep: signUpStepReducer
        }
    })
 }

 // Infer the type of makestore
 export type AppStore = ReturnType<typeof makeStore>

 // Infer 'RootState' and 'AppDispatch' types from store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
