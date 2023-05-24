import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const apiKey = "vD2NhGZsrhvfDDRhkQKWJcinuZdI3GtLvFE1qcyjc18";
  const apiURL = "https://api.unsplash.com/photos?page=1";

  const response = await fetch(
    apiURL,
    {
      headers: { Authorization: `Client-ID ${apiKey}` },
    },
    {
      mode: "no-cors",
    }
  );
  const formattedResponse = await response.json();
  return formattedResponse;
});

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.isLoading = false;
      })
      .addCase(getPhotos.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default gallerySlice.reducer;
