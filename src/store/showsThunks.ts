import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {searchShow, selectedShow} from '../types';

export const fetchSearchShows = createAsyncThunk<searchShow[]| null, string>(
  ' shows/searchShows',
  async (searchInput) => {
    const showsResponse = await axios.get(`/search/shows?q=${searchInput}`);
    return showsResponse.data;
  }
);

export const fetchSelectedShow = createAsyncThunk<selectedShow | null, number>(
  'shows/fetchShowByOne',
    async (id) => {
    const showResponse = await axios.get(`/shows/${id}`);
    return showResponse.data;
    }
);