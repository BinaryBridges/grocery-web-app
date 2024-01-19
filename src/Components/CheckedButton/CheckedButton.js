import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import './CheckedButton.css';

export default function MultiActionAreaCard({image, name}) {



  const [checked, setChecked] = React.useState([0]);
  const [buttonText, setButtonText] = React.useState("ADD")
  const [Variant, setVariant] = React.useState("contained")
  const [color, setColor] = React.useState("success")
  

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      console.log("Push")
      setButtonText("ADD")
      setVariant("contained")
      setColor("success")
    } else {
      newChecked.splice(currentIndex, 1);
      console.log("pushed")
      setButtonText("REMOVE")
      setVariant("outlined")
      setColor("error")
    }

    setChecked(newChecked);
  };

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
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
    </Card>
  );
}
