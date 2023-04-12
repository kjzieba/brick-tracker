import style from './Login.module.css';
import logo from '../../assets/bricklogo.svg';
import {Link} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import AuthBox from '../../components/AuthBox/AuthBox';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import WhiteButton from '../../components/WhiteButton/WhiteButton';

function Login() {
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
                        <InputBox type={'text'}></InputBox>
                        <h2 className={style.label}>Password</h2>
                        <InputBox type={'password'}></InputBox>
                        <Link to={'/recovery'} className={style.recovery}>Forgot your password?</Link>
                        <Button redirection={'/'} text={'Log in'}></Button>
                    </form>
                </AuthBox>
                <AuthBox>
                    <h3 className={style.login_text}>Don't have an account?</h3>
                    <WhiteButton redirection={'/register'} text={'Sign up'}></WhiteButton>
                </AuthBox>
                <div className={style.footer}>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default Login;
