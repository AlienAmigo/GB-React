import React, { FormEvent, useState } from 'react';
import './style.scss';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

  const onChange = (ev: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(ev.target.value);
  };

  return (
    <form id="" action="" method="" className="message-form" onSubmit={onSubmit}>
      <TextField
        name=""
        id=""
        // ref={}
        aria-label="empty textarea"
        multiline
        rows={2}
        placeholder="Введите сообщение"
        value={value.toString()}
        className="message-form__textarea"
        onChange={onChange}
      ></TextField>
      <Button type="submit" className="message-form__submit-btn">
        Отправить
      </Button>
    </form>
  );
};

export default MessageForm;
