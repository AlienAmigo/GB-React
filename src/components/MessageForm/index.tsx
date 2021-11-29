import React, { FormEvent, useState } from 'react';
import './style.scss';

const MessageForm = (props: any) => {
  const [value, setValue] = useState("");

  const isAuthorHuman = (): boolean => Boolean(Math.floor(Math.random() * (Math.floor(1) - Math.ceil(0) + 1)) + Math.ceil(0));

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (value === "") {
      return
    };
    setValue("");
    props.addMessage(
      {
        text: value,
        isAuthorHuman: isAuthorHuman(),
        date: "",
      }
    );
  }

  const onChange = (ev: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(ev.target.value);
  }

  return (
    <form
      id=""
      action=""
      method=""
      className="message-form"
      onSubmit={onSubmit}
    >
      <textarea
        name=""
        id=""
        value={value}
        className="message-form__textarea"
        onChange={onChange}
      >

      </textarea>
      <button type="submit" className="message-form__submit-btn">Отправить</button>
    </form>
  )
}

export default MessageForm;
