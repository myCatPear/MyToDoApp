import React, { FC, useState } from 'react';

import { TextField } from '@mui/material';

import { useTextFieldHook } from '../../common/hooks';

export const EditableSpan: FC = () => {
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const { title, onTextFieldChange } = useTextFieldHook();

  const onSpanDoubleClick = (): void => setEditMode(true);
  const onTextFieldBlur = (): void => setEditMode(false);

  return (
    <div>
      {isEditMode ? (
        <TextField
          value={title}
          onChange={onTextFieldChange}
          onBlur={onTextFieldBlur}
          autoFocus
        />
      ) : (
        <span onDoubleClick={onSpanDoubleClick}>span</span>
      )}
    </div>
  );
};
