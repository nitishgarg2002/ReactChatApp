import { ChatEngine } from 'react-chat-engine';
import React from 'react';
import ChatFeed from './ChatFeed';
import './App.css';
import LoginForm from './LoginForm';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="c20c9348-0bb8-412d-a04c-2469206b3585"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
        ).play()
      }
    />
  );
};
export default App;
