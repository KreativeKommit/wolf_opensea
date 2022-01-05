import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
interface Asset {
  id: number;
  image_url: string;
  name: string;
  permalink: string;
  description: string;
  token_id: string;
  asset_contract: {
    address: string;
  };
}
const initialState: { value: Asset[]; status: string } = {
  value: [],
  status: "idle",
};
export const fetchAssets = createAsyncThunk("assets/fetch", async () => {
  const response = await fetch(
    "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20"
  );
  const data = await response.json();
  console.log(data, "from fetch assets");
  return data.assets;
});

const assetsSlice = createSlice({
  name: "assets",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAssets.fulfilled, (state, action) => {
      console.log(action.payload, "from fullfilled");
      state.status = "fullfilled";
      state.value = action.payload;
    });
  },
});

export default assetsSlice.reducer;

//
