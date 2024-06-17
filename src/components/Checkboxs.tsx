import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const Checkboxs = () => {
  const [skill, setSkill] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = skill.indexOf(e.target.value);
    if (val === -1) {
      setSkill([...skill, e.target.value]);
    } else {
      setSkill(skill.filter((val) => val !== e.target.value));
    }
  };
  console.log(skill);
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={skill.includes('CSE')}
              onChange={handleChange}
              value={'CSE'}
            />
          }
          label='CSE'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={skill.includes('EEE')}
              onChange={handleChange}
              value={'EEE'}
            />
          }
          label='EEE'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={skill.includes('Civil')}
              onChange={handleChange}
              value={'Civil'}
            />
          }
          label='Civil'
        />
      </FormGroup>
      <Checkbox checkedIcon={<BookmarkIcon />} icon={<BookmarkBorderIcon />} />
    </Box>
  );
};

export default Checkboxs;
