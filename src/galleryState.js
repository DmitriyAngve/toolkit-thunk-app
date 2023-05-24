import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=3&limit=9");
  const formattedResponse = await response.json();
  return formattedResponse;
});

// crateSlice contains everything you need
export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
});

export default gallerySlice.reducer;
