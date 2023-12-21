import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {selectedShow, ShowData} from '../types';
import axiosApi from '../axiosApi';

export const fetchSearchShows = createAsyncThunk<ShowData[], string>(
  ' shows/searchShows',
  async (searchInput: string) => {
    const showsResponse = await axiosApi.get(`/search/shows?q=${searchInput}`);
    return showsResponse.data;
  }
);

export const fetchSelectedShow = createAsyncThunk<selectedShow | null>(
  'shows/fetchShowByOne',
  async (id) => {
    const showResponse = await axios.get(`/shows/${id}`);
    return showResponse.data;
  }
);