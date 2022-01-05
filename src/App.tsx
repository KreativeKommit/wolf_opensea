import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssetDetails from "./features/asset-details";
import AssetsDirectory from "./features/assets-directory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssetsDirectory />} />
        <Route path="/:address/:token_id" element={<AssetDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
