import {selectedShow, ShowData} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchSearchShows, fetchSelectedShow} from './showsThunks';
import {RootState} from "../app/store";

interface ShowsState {
  fetchSearchShows: ShowData[],
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
  extraReducers: (builder) => {
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
    builder.addCase(fetchSelectedShow.fulfilled, (state, {payload: fetchSelectedShow}) => {
      state.fetchLoading = false;
      state.fetchSelectedShow = fetchSelectedShow;
    });
    builder.addCase(fetchSelectedShow.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const showsReducer = showsSlice.reducer;
export const selectShows = (state: RootState) => state.shows.fetchSearchShows;





















