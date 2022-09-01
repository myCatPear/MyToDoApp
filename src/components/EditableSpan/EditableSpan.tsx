import React, { ChangeEvent, FC, useState } from 'react';

import { TextField } from '@mui/material';

import s from './EditableSpa.module.scss';

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

  return isEditMode ? (
    <TextField
      value={currentTitle}
      onChange={onTextFieldChange}
      onBlur={onTextFieldBlur}
      autoFocus
      className={s.textField}
    />
  ) : (
    <span onDoubleClick={onSpanDoubleClick}>{title}</span>
  );
};
