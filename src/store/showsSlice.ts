import {createSlice} from '@reduxjs/toolkit';
import {fetchSearchShows, fetchSelectedShow} from './showsThunks';
import {RootState} from '../app/store';
import {SelectedShow, ShowData} from '../types';

interface ShowsState {
  searchInput: string;
  fetchSearchShows: ShowData[],
  fetchSelectedShow: SelectedShow | null,
  fetchLoading: boolean;
  isAutocompleteVisible: boolean;
}

const initialState: ShowsState = {
  searchInput: '',
  fetchSearchShows: [],
  fetchSelectedShow: {id: -1, name: '', image: {medium: '', original: ''}, premiered: '', language: ''},
  fetchLoading: false,
  isAutocompleteVisible: false,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setSearchInput: (state, {payload: searchInput}) => {
      state.searchInput = searchInput;
    },
    setAutocompleteVisibility: (state, action) => {
      state.isAutocompleteVisible = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchShows.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchSearchShows.fulfilled, (state, {payload: fetchSearchShows}) => {
      state.fetchLoading = false;
      state.fetchSearchShows = fetchSearchShows;
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

export const {setSearchInput, setAutocompleteVisibility} = showsSlice.actions;
export const SearchInputSelector = (state: RootState) => state.shows.searchInput;
export const searchShowsSelector = (state: RootState) => state.shows.fetchSearchShows;
export const selectFetchShowsLoading = (state: RootState) => state.shows.fetchLoading;
export const isAutocompleteVisibleSelector = (state: RootState) => state.shows.isAutocompleteVisible;

































