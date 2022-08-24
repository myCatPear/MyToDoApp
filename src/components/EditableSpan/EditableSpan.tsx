import React, { ChangeEvent, FC, useState } from 'react';

import { TextField } from '@mui/material';

type EditableSpanPropsType = {
  title: string;
  changeTitle: (newTitle: string) => void;
};

export const EditableSpan: FC<EditableSpanPropsType> = props => {
  const { title, changeTitle } = props;
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>(title);

  const onSpanDoubleClick = (): void => setEditMode(true);
  const onTextFieldBlur = (): void => {
    setEditMode(false);
    changeTitle(currentTitle);
  };
  const onTextFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => setCurrentTitle(event.currentTarget.value);

  return (
    <div>
      {isEditMode ? (
        <TextField
          value={currentTitle}
          onChange={onTextFieldChange}
          onBlur={onTextFieldBlur}
          autoFocus
        />
      ) : (
        <span onDoubleClick={onSpanDoubleClick}>{currentTitle}</span>
      )}
    </div>
  );
};
