import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';

const Selects = () => {
  const [age, setAge] = useState<string[]>([]);
  const handleChange = (e: SelectChangeEvent<string[]>) => {
    const value = e.target.value;
    setAge(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <Box width={'200px'}>
      <FormControl fullWidth>
        <InputLabel id='inp'>Age</InputLabel>
        <Select
          label='Age'
          labelId='inp'
          multiple
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selects;
