import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({ monst }) {
  return (
    <div key={monst.id}>
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          margin: "10px",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {monst.name}
        </Typography>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={`https://robohash.org/${monst.id}?set=set2`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {monst.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {monst.address.city}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
