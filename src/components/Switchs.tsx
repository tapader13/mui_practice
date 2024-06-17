import { Box, FormControlLabel, FormGroup, Switch } from '@mui/material';
import React, { useState } from 'react';

const Switchs = () => {
  const [state, setState] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
  };
  console.log(state);
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          label={state ? 'on' : 'off'}
          control={
            <Switch
              checked={state}
              onChange={handleChange}
              size='small'
              color='success'
            />
          }
        />
      </FormGroup>
    </Box>
  );
};

export default Switchs;
