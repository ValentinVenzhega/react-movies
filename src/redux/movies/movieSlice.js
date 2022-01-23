import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
