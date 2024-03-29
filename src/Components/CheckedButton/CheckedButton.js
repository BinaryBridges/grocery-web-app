import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import SwipeableTemporaryDrawer from '../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer';
import './CheckedButton.css';

var foodList = [];

export default function MultiActionAreaCard({image, name, callBackPressed}) {

  const [checked, setChecked] = React.useState([0]);
  const [buttonText, setButtonText] = React.useState("ADD")
  const [Variant, setVariant] = React.useState("contained")
  const [color, setColor] = React.useState("success")
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  React.useEffect(() =>{
    if(localStorage.getItem("foodList") != null) {
      if(JSON.parse(localStorage.getItem("foodList")).includes(name)) {
        setButtonText("REMOVE")
        setVariant("outlined")
        setColor("error")
        setChecked([-1])
      }
    }
  }, [])
  
  

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    callBackPressed(name, currentIndex)

    if (currentIndex === -1) {//BUTTON SAYS REMOVE
      newChecked.push(value);
      setButtonText("ADD")
      setVariant("contained")
      setColor("success")
      foodList = JSON.parse(localStorage.getItem("foodList"))
      foodList.splice(foodList.indexOf(name), 1)
      localStorage.setItem("foodList",JSON.stringify(foodList))
    } else {//BUTTON SAYS ADD
      newChecked.splice(currentIndex, 1);
      setButtonText("REMOVE")
      setVariant("outlined")
      setColor("error")
      
      if(localStorage.getItem("foodList") != null) {
        foodList = JSON.parse(localStorage.getItem("foodList"))
      }
        foodList.push(name)
        localStorage.setItem("foodList", JSON.stringify(foodList))
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
          height="170"
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
