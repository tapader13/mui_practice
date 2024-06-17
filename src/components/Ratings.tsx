import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const labels: LabelType = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
type LabelType = {
  [index: number]: string;
};
export default function Ratings() {
  const [value, setValue] = React.useState<number | null>(1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Stack direction={'row'}>
        <Rating
          value={3}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
        />
        <Box sx={{ ml: 2 }}>{labels[3]}</Box>
      </Stack>
      <Stack>
        <Rating
          value={value}
          precision={0.5}
          highlightSelectedOnly
          icon={<FavoriteIcon color='success' />}
          emptyIcon={<FavoriteBorderIcon color='success' />}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Stack>
    </Box>
  );
}
