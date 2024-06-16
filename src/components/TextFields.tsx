import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
const TextFields = () => {
  const [state, setState] = useState(true);
  return (
    <Box>
      <TextField label='outlined' variant='outlined' required />
      <TextField label='filled' variant='filled' disabled />
      <TextField label='filled' variant='filled' autoComplete='autocom' />
      <TextField
        label='filled'
        variant='filled'
        inputProps={{
          readOnly: 'true',
        }}
      />
      <TextField
        label='filled'
        variant='filled'
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label='filled'
        variant='filled'
        InputProps={{
          startAdornment: <InputAdornment position='start'>jk</InputAdornment>,
        }}
      />
      <TextField
        label='outlined'
        variant='outlined'
        focused
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={() => setState(!state)}>
                {state ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label='filled'
        variant='filled'
        helperText='helper text'
        type='email'
        error
      />
      <TextField
        label='filled'
        variant='filled'
        type='password'
        multiline
        maxRows={2}
      />
      <TextField label='standard' variant='standard' defaultValue={'default'} />
    </Box>
  );
};

export default TextFields;
