import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://thumbs.dreamstime.com/b/burger-french-fries-basket-tartan-tablecloth-ketchup-mustard-bottle-background-close-up-135319836.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Burger & Fries
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
