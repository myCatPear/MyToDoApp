import React from 'react';

import { AddBox } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';

// type AddItemFormPropsType = {
//   title: string;
// };

export const AddItemForm: React.FC = () => {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <IconButton>
        <AddBox />
      </IconButton>
    </div>
  );
};
