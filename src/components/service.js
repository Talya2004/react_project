import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from "../img/cyber.jpg"
export default function Service1(props) {
    const{description,name,duration,price}=props; 
  return (
    
    <Card sx={{ minWidth: 350,maxWidth:350,marginLeft:15,marginTop:10 }}>
      <CardActionArea >
        <CardMedia 
          component="img"
          height="225"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="text.secondary" >
          price: {price}$
          </Typography>
          <Typography variant='h6' color="text.secondary">
           duration: {duration} academic hours.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}