import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    defaultSliceCase,
    defaultReducerState,
} from '@app/Objects/DefaultReducers';
import Constants from '@constants';

const initialState = {
    ...defaultReducerState,
    language: Constants.LOCALE.ID,
};

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        ...defaultSliceCase,
        setLang: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
    },
});

export const UserDataActionCreator = userDataSlice.actions;

export default userDataSlice.reducer;
