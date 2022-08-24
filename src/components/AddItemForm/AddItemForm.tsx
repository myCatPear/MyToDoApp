import React from 'react';

import { AddBox } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';

import { useTextFieldHook } from 'common/hooks/useTextFieldHook';

type AddItemFormPropsType = {
  onIconButtonAddBoxClick: (title: string) => void;
};

export const AddItemForm: React.FC<AddItemFormPropsType> = props => {
  const { onIconButtonAddBoxClick } = props;

  const { title, onTextFieldChange, setTitle } = useTextFieldHook();

  const onIconButtonHandlerClick = (): void => {
    onIconButtonAddBoxClick(title);
    setTitle('');
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={title}
        onChange={onTextFieldChange}
      />
      <IconButton onClick={onIconButtonHandlerClick}>
        <AddBox />
      </IconButton>
    </div>
  );
};
