/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { apiBaseUrl } from '../constants';

const AddEntryForm = ({patientId}: any) => {

    
    

    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [specialist, setSpecialist] = useState('');

    const handleSubmit = () => {
        const newEntry = {
            desc,
            date,
            specialist
        };     
    };

    

  return (
    <Box>
       <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
        <label htmlFor="1">description</label>
        <input onChange={({target}) => setDesc(target.value)} type="text" id="1"/>
        <label  htmlFor="2">date</label>
        <input onChange={({target}) => setDate(target.value)} type="text" id="2"/>
        <label htmlFor="">specialist</label>
        <input onChange={({target}) => setSpecialist(target.value)} type="text" id="3"/>
        </Box>
        <button>create</button>
       </form>
    </Box>
  );
};

export default AddEntryForm;