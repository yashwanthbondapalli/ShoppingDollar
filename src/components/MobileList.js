import React from 'react';
import { Grid } from '@mui/material';
import MobileCard from './MobileCard';
import mobilesData from '../mobiles.json';

const MobileList = () => {
  return (
    <Grid container justifyContent="center">
      {mobilesData.mobiles.map((mobile, index) => (
        <MobileCard key={index} mobile={mobile} />
      ))}
    </Grid>
  );
};

export default MobileList;
