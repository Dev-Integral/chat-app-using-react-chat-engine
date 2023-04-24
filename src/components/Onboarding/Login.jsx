import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "ec546b40-27a4-4928-9503-05a232ef2d19", "User-Name": username, "User-Secret": password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {
            setError("Oops, incorrect credentials");
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type={'text'} onChange={(e) => setUsername(e.target.value)} value={username} className="input" placeholder="username" required />
                    <input type={'password'} onChange={(e) => setPassword(e.target.value)} value={password} className="input" placeholder="password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default Login;