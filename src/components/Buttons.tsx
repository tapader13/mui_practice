import {
  Button,
  ButtonGroup,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from 'react';
export const Buttons = () => {
  const [type, setType] = useState<string[]>([]);
  const handleToggle = (e: React.MouseEvent<HTMLElement>, v: string[]) => {
    setType(v);
  };
  console.log(type);
  return (
    <div>
      <Stack direction={'row'} spacing={2}>
        <Button variant='text'>minu</Button>
        <Button variant='contained' disableRipple disableElevation>
          minu
        </Button>
        <Button variant='outlined' disabled>
          minu
        </Button>
        <Button variant='contained' color='error' size='small'>
          minu
        </Button>
      </Stack>
      <Button
        startIcon={<MenuIcon color='error' />}
        endIcon={<CloseIcon color='secondary' />}
        color='success'
        variant='contained'
        sx={{ color: 'warning.main', fontSize: '20px' }}
      >
        Menu
      </Button>
      <Stack direction={'row'} marginBlock={5}>
        <ButtonGroup
          variant='outlined'
          orientation='vertical'
          color='success'
          size='large'
        >
          <Button>
            <FormatBoldIcon />
          </Button>
          <Button>
            <FormatItalicIcon />
          </Button>
          <Button>
            <FormatUnderlinedIcon />
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={'row'} marginBlock={5}>
        <ToggleButtonGroup
          orientation='vertical'
          value={type}
          onChange={handleToggle}
          exclusive
        >
          <ToggleButton value={'bold'}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={'italic'}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={'underline'}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
};
