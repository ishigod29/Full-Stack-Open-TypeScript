import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { HealthCheckEntry } from '../types';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FavoriteIcon from '@material-ui/icons/Favorite';

const HealthCheck: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  let color: 'primary' | 'secondary' | 'inherit' | 'error' | 'action';

  switch (entry.healthCheckRating) {
    case 0:
      color = 'primary';
      break;
    case 1:
      color = 'error';
      break;
    case 2:
      color = 'secondary';
      break;
    case 3:
      color = 'action';
      break;
    default:
      color = 'primary';
      break;
  }

  return (
    <Box padding={2}>
      <Box display="flex" gridGap={5} alignItems="center">
        <Typography variant='h5'>
          {entry.date}
        </Typography>
        <LocalHospitalIcon fontSize="large"/>
      </Box>        
      <Typography>{entry.description} </Typography>
      <FavoriteIcon color={color}/>
    </Box>
  );
};

export default HealthCheck;