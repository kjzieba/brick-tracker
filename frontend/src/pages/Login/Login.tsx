import style from './Login.module.css';
import logo from '../../assets/bricklogo.svg';
import {Link, useNavigate} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import AuthBox from '../../components/AuthBox/AuthBox';
import InputBox from '../../components/InputBox/InputBox';
import WhiteButton from '../../components/WhiteButton/WhiteButton';
import React, {useState} from 'react';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    async function login(e: any) {
        e.preventDefault();
        await fetch(`http://127.0.0.1:8080/auth/authenticate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }
        ).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(data => {
            localStorage.setItem("token", data.token);
            navigate("/");
        })
    }

    return (
        <>
            <div className={style.login}>
                <Link to='/' className={style.logo}>
                    <img className={style.logo_img} src={logo} alt='logo'></img>
                    <h2>BrickTracker</h2>
                </Link>
                <h2 className={style.login_header}>Log in</h2>
                <AuthBox>
                    <form className={style.form}>
                        <h2 className={style.label}>Username</h2>
                        <InputBox type={'text'} onChange={changeUsername}/>
                        <h2 className={style.label}>Password</h2>
                        <InputBox type={'password'} onChange={changePassword}/>
                        <Link to={'/recovery'} className={style.recovery}>Forgot your password?</Link>
                        <div className={style.submit}>
                            <button className={style.button} onClick={login}>
                                <h2 className={style.button_text}>
                                    Log in
                                </h2>
                            </button>
                        </div>
                    </form>
                </AuthBox>
                <AuthBox>
                    <h3 className={style.login_text}>Don't have an account?</h3>
                    <WhiteButton redirection={'/register'} text={'Sign up'}/>
                </AuthBox>
                <div className={style.footer}>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default Login;
