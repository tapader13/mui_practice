import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const Cards = () => {
  return (
    <Card sx={{ width: '300px' }}>
      <CardMedia
        component={'img'}
        sx={{ height: '150px' }}
        image='/src/images/img1.png'
        alt='image not found'
      />
      <CardContent>
        <Typography sx={{ textTransform: 'capitalize' }} variant={'h5'}>
          minhaj uddin tapader
        </Typography>
        <Typography component={'p'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          eligendi perferendis fugit aliquam nisi atque corporis!
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
