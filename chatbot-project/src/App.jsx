import { useState, useEffect} from 'react';
import { Chatbot } from 'supersimpledev';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'; 

  function App() {
        const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        useEffect(() => {
          const messagesToSave = chatMessages.filter((chatMessage) => {
         return typeof chatMessage.message === 'string';
         });
            localStorage.setItem('messages', JSON.stringify(messagesToSave));
        }, [chatMessages])

        useEffect(() => {
          Chatbot.addResponses({
             'who made you': 'Carl made me using React!',
             'who created you': 'Carl made me using React!',
              'what is react': 'React is a JavaScript library for building user interfaces.'
          });
        }, [])
      
        return (
          <div className="app-container">
           {chatMessages.length === 0 ? (
          <p className="welcome-message">Welcome to the chatbot project! Send a message using the textbox below.</p>
        ) : (
                <ChatMessages 
                  chatMessages={chatMessages}
                />
        )}
                <ChatInput 
                  chatMessages={chatMessages}
                  setChatMessages={setChatMessages}
                />
          </div>
        );
      }

export default App;
