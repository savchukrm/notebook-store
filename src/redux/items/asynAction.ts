import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchParams, DataItem } from './types';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'data/fetchDataStatus',
  async (params: FetchParams) => {
    const { currentPage, category, sortPrice } = params;
    const { data } = await axios.get<DataItem[]>(
      `https://6388d1e5a4bb27a7f792a389.mockapi.io/item?page=${currentPage}&limit=8&${category}${sortPrice}`
    );

    return data;
  }
);
