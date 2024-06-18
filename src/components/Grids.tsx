import { Box, Grid } from '@mui/material';
import React from 'react';

const Grids = () => {
  return (
    <Grid container spacing={2} width={'500px'}>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'yellow',
            height: '100px',
          }}
        >
          1
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'yellow',
            height: '100px',
          }}
        >
          2
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'yellow',
            height: '100px',
          }}
        >
          3
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'yellow',
            height: '100px',
          }}
        >
          4
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'yellow',
            height: '100px',
          }}
        >
          5
        </Box>
      </Grid>
    </Grid>
  );
};

export default Grids;
