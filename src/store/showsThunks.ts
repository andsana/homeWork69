import {createAsyncThunk} from '@reduxjs/toolkit';
import {SelectedShow, ShowData} from '../types';
import axiosApi from '../axiosApi';

export const fetchSearchShows = createAsyncThunk<ShowData[], string>(
  ' shows/searchShows',
  async (searchInput: string) => {
    const showsResponse = await axiosApi.get(`/search/shows?q=${searchInput}`);
    return showsResponse.data;
  }
);

export const fetchSelectedShow = createAsyncThunk<SelectedShow | null, string>(
  'shows/fetchShowByOne',
  async (id: string) => {
    const showResponse = await axiosApi.get(`/shows/${id}`);
    return showResponse.data;
  }
);