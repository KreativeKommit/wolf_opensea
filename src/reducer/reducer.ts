import counterReducer from "../features/counter/counterSlice";
import activeAsset from "../slices/active-asset";
import assetsSlice from "../slices/assets-directory";

const reducer = {
  counter: counterReducer,
  assets: assetsSlice,
  activeAsset,
};

export default reducer;
