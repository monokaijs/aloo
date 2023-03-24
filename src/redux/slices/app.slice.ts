import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppSliceState {
  booted: boolean;
  isLoading: boolean;
  sheets: {
    createMeeting: boolean;
  }
}

const initialData: AppSliceState = {
  booted: false,
  isLoading: false,
  sheets: {
    createMeeting: false,
  }
};

export const appSlice = createSlice({
  name: 'app',
  initialState: initialData,
  reducers: {
    setAppSheets(state, action) {
      state.sheets = {
        ...state.sheets,
        ...action.payload
      }
    }
  },
  extraReducers: builder => {
  },
});

export const {setAppSheets} = appSlice.actions;
