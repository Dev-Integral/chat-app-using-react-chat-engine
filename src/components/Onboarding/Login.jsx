import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit =(e)=> {
        e.preventDefault();
        const authObject = {'Project-ID': "ec546b40-27a4-4928-9503-05a232ef2d19", "User-Name": username, "User-Secret": password}
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type={'text'} />
                    <input type={'password'} onChange={(e)=>setPassword(e.target.value)}  /> 
                    <div align="center">
                        <button type="submit" className="button">

                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;