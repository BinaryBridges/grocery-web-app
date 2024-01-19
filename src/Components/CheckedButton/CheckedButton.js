import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import './CheckedButton.css';
import SwipeableTemporaryDrawer from '../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer';

export default function MultiActionAreaCard({image, name}) {

  var numberPicked = 0;

  const [checked, setChecked] = React.useState([0]);
  const [buttonText, setButtonText] = React.useState("ADD")
  const [Variant, setVariant] = React.useState("contained")
  const [color, setColor] = React.useState("success")
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      setButtonText("ADD")
      setVariant("contained")
      setColor("success")
      localStorage.removeItem("1")
      numberPicked = localStorage.getItem("numberPicked")
      numberPicked -=1;
      localStorage.setItem("numberPicked", toString(numberPicked))
    } else {
      newChecked.splice(currentIndex, 1);
      setButtonText("REMOVE")
      setVariant("outlined")
      setColor("error")
      localStorage.setItem("1", name)
      numberPicked = localStorage.getItem("numberPicked")
      console.log(numberPicked)
      numberPicked +=1;
      localStorage.setItem("numberPicked", toString(numberPicked))
    }
    setChecked(newChecked);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea onClick={openDrawer}>
      
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="green iguna"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color={color} variant={Variant} onClick={handleToggle(0)}>
            {buttonText}
        </Button>
      </CardActions>
      <SwipeableTemporaryDrawer open={isDrawerOpen} onClose={closeDrawer} />
    </Card>
  );
}
