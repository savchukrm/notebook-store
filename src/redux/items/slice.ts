import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataItem, DataSliceState, Status } from './types';
import { fetchData } from './asynAction';

const initialState: DataSliceState = {
  items: [],
  status: Status.LOADING,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<DataItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload; //  it's same  dispatch(setItems(response.data))
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = dataSlice.actions;

export default dataSlice.reducer;
