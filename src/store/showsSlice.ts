import {searchShow, selectedShow} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchSearchShows, fetchSelectedShow} from './showsThunks';


interface ShowsState {
  fetchSearchShows: searchShow[] | null,
  fetchSelectedShow: selectedShow | null,
  fetchLoading: boolean;
}

const initialState: ShowsState = {
  fetchSearchShows: [],
  fetchSelectedShow: null,
  fetchLoading: false,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchSearchShows.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchSearchShows.fulfilled, (state, {payload: fetchSearchShows}) => {
      state.fetchLoading = false;
      state.fetchSearchShows = fetchSearchShows
    });
    builder.addCase(fetchSearchShows.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(fetchSelectedShow.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchSearchShows.fulfilled, (state, {payload: fetchSelectedShow}) => {
      state.fetchLoading = false;
      state.fetchSearchShows = fetchSelectedShow;
    });
    builder.addCase(fetchSelectedShow.rejected, (state) => {
      state.fetchLoading = false;
    });
  })
});

export default showsSlice;

