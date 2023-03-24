import {createSlice} from '@reduxjs/toolkit';

export interface AppSliceState {
  booted: boolean;
  isLoading: boolean;
}

const initialData: AppSliceState = {
  booted: false,
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState: initialData,
  reducers: {},
  extraReducers: builder => {
  },
});

export const {} = appSlice.actions;
