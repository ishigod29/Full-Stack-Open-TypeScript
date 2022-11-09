import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { OccupationalHealthcareEntry } from '../types';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const OccupationalHealthcare: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => (
  <Box padding={2}>
    <Box display='flex' gridGap={5} alignItems='center'>
      <Typography variant="h5">
        {entry.date}
      </Typography>
      <FitnessCenterIcon fontSize='large'/>
    </Box>
    <Typography>{entry.description}</Typography>
  </Box>
);

export default OccupationalHealthcare;