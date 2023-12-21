import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {ApiShow, ShowByOne} from "../types";

export const searchShows = createAsyncThunk<ApiShow[]| null, string>(
  ' shows/searchShows',
  async (searchInput) => {
    const showsResponse = await axios.get(`/search/shows?q=${searchInput}`);
    return showsResponse.data;
  }
);

export const fetchShowByOne = createAsyncThunk<ShowByOne | null, number>(
  'shows/fetchShowByOne',
    async (id) => {
    const showResponse = await axios.get(`/shows/${id}`);
    return showResponse.data;
    }
);