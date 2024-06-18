import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const Papers = () => {
  return (
    <Paper
      sx={{ height: '300px', width: '500px', bgcolor: 'gray' }}
      elevation={1}
      square={false}
    >
      <Box>
        <Typography
          variant='h5'
          sx={{
            textTransform: 'capitalize',
          }}
        >
          minhaj tapader
        </Typography>
      </Box>
    </Paper>
  );
};

export default Papers;
