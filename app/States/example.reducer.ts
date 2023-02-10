import { createSlice } from '@reduxjs/toolkit';
import {
    defaultSliceCase,
    defaultReducerState,
} from '@app/Objects/DefaultReducers';

const initialState = {
    ...defaultReducerState,
};

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        ...defaultSliceCase,
    },
});

export const ExampleActionCreator = exampleSlice.actions;

export default exampleSlice.reducer;
