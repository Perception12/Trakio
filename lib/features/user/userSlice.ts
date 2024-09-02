import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
    name: string;
    email: string;
    occupation: string;
}

const initialState: userState = {
    name: "",
    email: "",
    occupation: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<userState>) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.occupation = action.payload.occupation
        }
    }
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer