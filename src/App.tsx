import React from 'react';
import './App.css';
import Message from './components/Message';

const myMessage = {
  title: "Тут первое сообщение",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore odio in vero illo. Hic nam aliquam commodi fuga voluptate molestiae soluta quisquam consectetur necessitatibus reiciendis!",
  author: "",
  date: "2021.11.26",
};

const App = () => {
  return (
    <div className="App">
      <Message message={myMessage}/>
    </div>
  );
}

export default App;
