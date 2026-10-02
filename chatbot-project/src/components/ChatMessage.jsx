import dayjs from 'dayjs';
import RobotProfile from '../assets/robots.png';
import UserProfileImage from '../assets/profile.png';
import './ChatMessage.css';


     function ChatMessage({ message, sender, date}) {
        return (
          <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && (
              <img src={RobotProfile}className="chat-message-profile"/>
            )}
            <div className="chat-message-text">
                <div>{message}</div>
                <div className="chat-message-time">
                    {dayjs(date).format('h:mma')}
                </div>
            </div>
            {sender === 'user' && (
              <img src={UserProfileImage}className="chat-message-profile"/>
            )}
          </div>

         
        );
      }
       

        // const message = props.message; this for above this the longer one
        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender === 'robot'){  
          return (
            <div>
            <img src="robots.png" width="50"/>
            {message}
            </div>
          );
        }
        */

export default ChatMessage;