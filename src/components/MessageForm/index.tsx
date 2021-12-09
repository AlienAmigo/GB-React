import React, { FormEvent, useState, useEffect, useRef, ReactNode } from 'react';
import { IAddMessageFunc } from 'types';
import { StyledTextField, StyledFormGroup, StyledButton } from './style';

const MessageForm = (props: any) => {
  const [value, setValue] = useState('');

  const isAuthorHuman = (): boolean =>
    Boolean(Math.floor(Math.random() * (Math.floor(1) - Math.ceil(0) + 1)) + Math.ceil(0));

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (value === '') {
      return;
    }
    setValue('');
    props.addMessageFunc({
      text: value,
      isAuthorHuman: isAuthorHuman(),
      date: ''
    });
  };

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(ev.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <form id="" action="" method="" className="message-form" onSubmit={onSubmit}>
      <StyledFormGroup>
        <StyledTextField
          name=""
          id=""
          type="text"
          inputRef={inputRef}
          aria-label="empty textarea"
          multiline
          rows={2}
          placeholder="Введите сообщение"
          value={value.toString()}
          className="message-form__textarea"
          onChange={onChange}
        />
        <StyledButton type="submit" className="message-form__submit-btn">
          Отправить
        </StyledButton>
      </StyledFormGroup>
    </form>
  );
};

export default MessageForm;
