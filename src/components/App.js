import { ChatEngine } from 'react-chat-engine';
import React from 'react';
import ChatFeed from './ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="c20c9348-0bb8-412d-a04c-2469206b3585"
      userName="nitish"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
export default App;
