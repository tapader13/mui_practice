import { Box, Stack } from '@mui/material';
import React from 'react';

const Stacks = () => {
  return (
    <Stack
      direction={{
        xs: 'row',
        sm: 'column',
        md: 'row-reverse',
        lg: 'column-reverse',
      }}
      spacing={{
        xs: 1,
        sm: 2,
      }}
      flexWrap={'wrap'}
      useFlexGap
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        sx={{
          bgcolor: 'yellow',
          height: '100px',
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        1
      </Box>
      <Box
        sx={{
          bgcolor: 'yellow',
          height: '100px',
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        2
      </Box>
      <Box
        sx={{
          bgcolor: 'yellow',
          height: '100px',
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        3
      </Box>
      <Box
        sx={{
          bgcolor: 'yellow',
          height: '100px',
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        4
      </Box>
      <Box
        sx={{
          bgcolor: 'yellow',
          height: '100px',
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        5
      </Box>
    </Stack>
  );
};

export default Stacks;
