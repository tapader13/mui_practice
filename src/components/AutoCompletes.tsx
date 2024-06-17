import React, { useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';

type TopicObjType = {
  id: number;
  topic: string;
};

const AutoCompletes: React.FC = () => {
  const topics: string[] = ['cse', 'eee', 'ipe'];
  const topicsObj: TopicObjType[] = topics.map((topic, i) => ({
    id: i + 1,
    topic,
  }));

  const [val, setVal] = useState<string | null>(null);
  const [val1, setVal1] = useState<TopicObjType | null>(null);

  return (
    <Box>
      <Autocomplete
        options={topics}
        value={val}
        onChange={(event, newValue: string | null) => {
          setVal(newValue);
          console.log(newValue);
        }}
        freeSolo
        sx={{ width: 300, margin: '20px' }}
        renderInput={(params) => <TextField {...params} label='Topic' />}
      />
      <Autocomplete
        options={topicsObj}
        value={val1}
        getOptionLabel={(option) => option.topic}
        onChange={(event, newValue: TopicObjType | null) => {
          console.log(newValue);
          setVal1(newValue);
        }}
        freeSolo
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Topic' />}
      />
    </Box>
  );
};

export default AutoCompletes;
