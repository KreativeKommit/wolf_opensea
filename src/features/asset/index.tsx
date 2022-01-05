import Styles from "./asset.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const convert = require("ethereum-unit-converter");
interface Props {
  image: string;
  description: string;
  name: string;
  permalink: string;
  token_id: string;
  address: string;
  price?: string;
}
const Asset: React.FC<Props> = ({
  image,
  description,
  name,
  permalink,
  token_id,
  address,
  price,
}) => {
  return (
    <div className={Styles.asset}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Link href={permalink} target="_blank">
              {price ? "Buy it Now on  OpenSea" : "See in Opensea"}
            </Link>
          </Button>
          <Button>
            {price ? (
              convert(price, "wei", "eth") + "ETH"
            ) : (
              <RouterLink to={`/${address}/${token_id}`}>Details</RouterLink>
            )}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Asset;
