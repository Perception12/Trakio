import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface signUpStepState {
    step: number;
}

const signUpStepSlice = createSlice({
    name: 'signUpStep',
    initialState: {
        step: 1,
    },
    reducers: {
        nextStep: (state) => {
            state.step += 1
        },
        previousStep: (state) => {
            state.step -= 1
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        }
    },
})

export const { nextStep, previousStep, setStep } = signUpStepSlice.actions

export const selectSignUpStep = (state: RootState) => state.signUpStep.step

export default signUpStepSlice.reducer;