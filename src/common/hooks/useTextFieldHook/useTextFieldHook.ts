import { ChangeEvent, useState } from 'react';

import { EMPTY_STRING } from 'common/constants';

type useTextFieldHookType = {
  title: string;
  onTextFieldChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setTitle: (title: string) => void;
};

export const useTextFieldHook = (): useTextFieldHookType => {
  const [title, setTitle] = useState(EMPTY_STRING);

  const onTextFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setTitle(event.currentTarget.value);
  };

  return { title, onTextFieldChange, setTitle };
};
