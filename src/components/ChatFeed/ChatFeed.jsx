import MessageForm from "./MessageForm";
import RecipientMessage from "./RecipientMessage";
import SenderMessage from "./SenderMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isSenderMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isSenderMessage ?
                                <SenderMessage message={message} />
                                : <RecipientMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-reciepts" style={{marginRight: isSenderMessage ? '18px' : '0', marginLeft: isSenderMessage ? '68px' : '0'}}>
                        read recceipts
                    </div>
                </div>
            )
        })
    }

    if(!chat) return 'loading...';

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person)=> ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;