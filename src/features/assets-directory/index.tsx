import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAssets } from "../../slices/assets-directory";
import Asset from "../asset";
import Styles from "./assets-directory.module.css";
import Grid from "@mui/material/Grid";
interface Props {}

const AssetsDirectory: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const assets = useAppSelector((state) => state.assets);
  useEffect(() => {
    dispatch(fetchAssets());
  }, []);

  const renderAssets = () => {
    if (assets.status === "pending") return <div>Loading...</div>;
    console.log(assets.value, "from value");
    return assets.value.map(
      ({
        description,
        image_url,
        permalink,
        name,
        id,
        token_id,
        asset_contract,
      }) => {
        return (
          <Grid item key={id} sm={4}>
            <Asset
              image={image_url}
              description={description}
              name={name}
              permalink={permalink}
              token_id={token_id}
              address={asset_contract.address}
            />
          </Grid>
        );
      }
    );
  };
  return (
    <div className="">
      <Grid container spacing={2}>
        {renderAssets()}
      </Grid>
    </div>
  );
};
export default AssetsDirectory;
