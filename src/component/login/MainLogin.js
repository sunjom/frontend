import "../Css/loginCss/LoginMain.css";
import { Link } from 'react-router-dom';
import {useState} from "react";
import axios from "axios";
export default function MainLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // API를 호출해 로그인을 시도
            const response = await axios.post('/api/login', {
                username,
                password
            });

            // 서버로부터 토큰을 받았다면 로컬 스토리지에 저장
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            setError('로그인에 실패했습니다.');
        }
    };


    return (
        <div className="login-page">
            <div className="login-container">
                <div className="half-circle left-half-circle"></div>
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>로그인</h2>
                    <div className="input-group">
                        <label htmlFor="username">아이디</label>
                        <input type="text" id="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit">로그인</button>
                </form>
                <div className="half-circle right-half-circle"></div>
            </div>
        </div>
    );
}



