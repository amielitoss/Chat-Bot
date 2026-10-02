import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import LoadingImg from '../assets/loading-spinner.gif';
import './ChatInput.css';
      
    function ChatInput({ chatMessages, setChatMessages }) {

        const [inputText, setInputText] = useState('');
        const [isLoading, setIsLoading] = useState(false);

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        function handleKeyDown(event){
          if  (event.key === 'Enter'){
            sendMessage()
         } else if (event.key === 'Escape') {
           setInputText('')
         }
        }

        function clearMessage(){
         setChatMessages([]);
        }

       async function sendMessage () {
        if(isLoading === true || inputText.trim() === ''){
          return;
        }
         const newChatMessages = [
            ...chatMessages,
           {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            date: dayjs().valueOf()
           }
         ]
          setChatMessages([
            ...newChatMessages,
           {
            message: <img src={LoadingImg} className="loading-img"/>,
            sender: 'robot',
            id: crypto.randomUUID(),
            date: dayjs().valueOf()
           }
         ]);
          
          setInputText('');
          setIsLoading(true);

         const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newChatMessages,
           {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID(),
            date: dayjs().valueOf()
           }
         ]);

           setIsLoading(false);

        }

        return (
          <div className="chat-input-container">
            <input placeholder="Send a message to Chatbot" size="30" onChange={saveInputText} value={inputText} onKeyDown={handleKeyDown}  className="chat-input"/>
            <button className="send-button" onClick={sendMessage}>Send</button>
            <button className="clear-button" onClick={clearMessage}>Clear</button>
          </div>
        );
      }

export default ChatInput;