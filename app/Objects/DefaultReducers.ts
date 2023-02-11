import { ReducerDefaultProp } from '@appTypes/DefaultStateType';
import {
    SliceCaseReducers,
    ValidateSliceCaseReducers,
} from '@reduxjs/toolkit/src/createSlice';

type State = ReducerDefaultProp;

export const defaultReducerState: ReducerDefaultProp = {
    loading: false,
    error: false,
    errorMessage: '',
};

export const defaultSliceCase: ValidateSliceCaseReducers<
    State,
    SliceCaseReducers<State>
> = {
    setError: (state, action) => {
        state.error = true;
        state.errorMessage = action.payload;
    },
    setLoading: (state) => {
        state.loading = true;
    },
    stopLoading: (state) => {
        state.loading = false;
    },
    clearError: (state) => {
        state.error = false;
        state.errorMessage = null;
    },
};
