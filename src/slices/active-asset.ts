import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Asset {
  orders: { closing_extendable: boolean; current_price: string }[];
  image_url: string;
  name: string;
  permalink: string;
  description: string;
}
const initialState: { value: Asset | null; status: string } = {
  value: null,
  status: "idle",
};
export const fetchActiveAsset = createAsyncThunk(
  "activeAsset/fetch",
  async (params: { address: string; token_id: string }, thunkApi) => {
    const response = await fetch(
      `https://api.opensea.io/api/v1/asset/${params.address}/${params.token_id}/`
    );
    const data = await response.json();
    console.log(data, "from fetch  a single asset");
    return data;
  }
);

const activeAssetSlice = createSlice({
  name: "activeAsset",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActiveAsset.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchActiveAsset.fulfilled, (state, action) => {
      console.log(action.payload, "from fullfilled");
      state.status = "fullfilled";
      state.value = action.payload;
    });
  },
});

export default activeAssetSlice.reducer;
