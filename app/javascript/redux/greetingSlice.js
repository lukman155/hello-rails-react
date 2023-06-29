import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "/api/messages/random_greeting.json"; 

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: { data: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default greetingSlice.reducer;
