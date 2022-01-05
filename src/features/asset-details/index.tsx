import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchActiveAsset } from "../../slices/active-asset";
import Asset from "../asset";

interface Props {}

const AssetDetails: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { value, status } = useAppSelector((state) => state.activeAsset);

  const params = useParams();
  const address = params.address;
  const token_id = params.token_id;
  useEffect(() => {
    if (address && token_id) dispatch(fetchActiveAsset({ address, token_id }));
  }, []);
  const renderActiveAsset = () => {
    if (status === "pending") return <div>Loading.....</div>;
    if (value?.orders.length === 0 || value?.orders[0].closing_extendable) {
      return <h1>This is item is not for sale</h1>;
    }

    if (value && address && token_id) {
      const { orders, image_url, permalink, description, name } = value;
      return (
        <Asset
          price={orders[0].current_price}
          image={image_url}
          permalink={permalink}
          description={description}
          name={name}
          address={address}
          token_id={token_id}
        />
      );
    }
  };
  return <div className="asset-details">{renderActiveAsset()}</div>;
};

export default AssetDetails;
