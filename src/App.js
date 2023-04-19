import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/ChatFeed';
import './App.css';
import Login from './components/Onboarding/Login';

const App = () => {
	return (
		<div>
			<Login />
		<ChatEngine
			height="100vh"
			projectID="ec546b40-27a4-4928-9503-05a232ef2d19" 
			userName="test1"
			userSecret="111111"
			renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
		/>
		</div>
	)
}

export default App;