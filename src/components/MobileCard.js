import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MobileCard = ({ mobile }) => {
  return (
    <Card 
      sx={{
        maxWidth: 345,
        m: 2,
        color:'#b0b0b0',
        backgroundColor:'#100e17',
        boxShadow: '0 10px 200px rgb(2, 20, 86)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
        }
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={mobile.image}
        alt={mobile.name}
        sx={{
                    borderRadius:'5%',
                    filter: 'drop-shadow(0px 1px 1px #fff)',
        }}
      />
      <CardContent
        sx={{
          textAlign: 'center', // Center align text
        }}
      >
      <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
          {mobile.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
          {mobile.details}
        </Typography>
        <Typography variant="h6" sx={{ color: '#ffdf00', mt: 1 }}>
          {mobile.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MobileCard;









