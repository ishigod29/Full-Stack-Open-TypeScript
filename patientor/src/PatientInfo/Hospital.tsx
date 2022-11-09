import { Box, Typography } from '@material-ui/core';
import React from 'react';
import HealingIcon from '@material-ui/icons/Healing';
import { HospitalEntry } from '../types';

const Hospital: React.FC<{ entry: HospitalEntry }> = ({ entry }) => (
  <Box color='primary' padding={2}>
    <Box display="flex" gridGap={5} alignItems="center">
      <Typography variant='h5'>
        {entry.date}
      </Typography>
      <HealingIcon fontSize='large'/>
    </Box>
    <Typography>{entry.description}</Typography>
  </Box>
);

export default Hospital;