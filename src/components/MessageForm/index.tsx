import React, { FormEvent, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button } from '@mui/material/';
import './style.scss';

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
    props.addMessage({
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
      <TextField
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
      <Button type="submit" className="message-form__submit-btn">
        Отправить
      </Button>
    </form>
  );
};

export default MessageForm;
