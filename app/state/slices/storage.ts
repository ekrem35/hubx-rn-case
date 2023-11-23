import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from 'state/store';

interface StorageState {
  hasUserSeenGuiding: boolean;
}

const initialState: StorageState = {
  hasUserSeenGuiding: false,
};

export const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    setHasUserSeenGuiding: (state, action: PayloadAction<boolean>) => {
      state.hasUserSeenGuiding = action.payload;
    },
  },
});

export const {setHasUserSeenGuiding} = storageSlice.actions;

export const getHasUserSeenGuiding = (state: RootState) =>
  state.storage.hasUserSeenGuiding;

export default storageSlice.reducer;
