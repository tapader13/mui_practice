import { Box, Typography } from '@mui/material';
export const Typograpy = () => {
  return (
    <div>
      {/* p */}
      <Typography variant='body1'>All H element</Typography>
      <Typography variant='body2'>All H element</Typography>
      {/* h */}
      <Typography variant='h1' color={'indigo'}>
        minhaj tapader
      </Typography>
      <Box textTransform={'uppercase'}>
        <Typography variant='h2'>minhaj tapader box</Typography>
      </Box>
      <Typography variant='h3'>minhaj tapader</Typography>
      <Typography variant='h4'>minhaj tapader</Typography>
      <Typography variant='h5'>minhaj tapader</Typography>
      <Typography mt={5} component={'h1'} variant='h6'>
        minhaj tapader
      </Typography>
    </div>
  );
};
