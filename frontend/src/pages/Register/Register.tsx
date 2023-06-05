import style from './Register.module.css';
import logo from '../../assets/bricklogo.svg';
import {Link, useNavigate} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import AuthBox from '../../components/AuthBox/AuthBox';
import InputBox from '../../components/InputBox/InputBox';
import WhiteButton from '../../components/WhiteButton/WhiteButton';
import React, {useState} from 'react';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeated, setPasswordRepeated] = useState<string>('');

    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const changePasswordRepeated = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordRepeated(e.target.value);
    }

    async function register(e: any) {
        e.preventDefault();

        if (password != passwordRepeated || username.trim() === '' || email.trim() === '' || passwordRepeated.trim() === '') {
            return;
        }

        await fetch(`http://127.0.0.1:8080/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
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
            <div className={style.register}>
                <Link to='/' className={style.logo}>
                    <img className={style.logo_img} src={logo} alt='logo'></img>
                    <h2>BrickTracker</h2>
                </Link>
                <h2 className={style.register_header}>Sign up</h2>
                <AuthBox>
                    <form className={style.form}>
                        <h2 className={style.label}>Username</h2>
                        <InputBox type={'text'} onChange={changeUsername}/>
                        <h2 className={style.label}>Email</h2>
                        <InputBox type={'email'} onChange={changeEmail}/>
                        <h2 className={style.label}>Password</h2>
                        <InputBox type={'password'} onChange={changePassword}/>
                        <h2 className={style.label}>Repeat password</h2>
                        <InputBox type={'password'} onChange={changePasswordRepeated}/>
                        <div className={style.submit}>
                            <button className={style.button} onClick={register}>
                                <h2 className={style.button_text}>
                                    Log in
                                </h2>
                            </button>
                        </div>
                    </form>
                </AuthBox>
                <AuthBox>
                    <h3 className={style.register_text}>Already have an account?</h3>
                    <WhiteButton redirection={'/login'} text={'Log in'}/>
                </AuthBox>
                <div className={style.footer}>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default Register;
