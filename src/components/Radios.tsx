import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { useState } from 'react';

const Radios = () => {
  const [state, setState] = useState('');
  console.log(state);
  return (
    <Box>
      <FormControl>
        <FormLabel id='radiogroup'>Radio Group</FormLabel>
        <RadioGroup
          aria-labelledby='radiogroup'
          value={state}
          row
          onChange={(e) => setState(e.target.value)}
        >
          <FormControlLabel
            control={<Radio />}
            labelPlacement='top'
            value={'male'}
            label='Male'
          />
          <FormControlLabel
            control={<Radio color='secondary' size='small' />}
            value={'female'}
            labelPlacement='start'
            label='Female'
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Radios;
