import style from './Register.module.css';
import logo from '../../assets/bricklogo.svg';
import {Link} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import AuthBox from '../../components/AuthBox/AuthBox';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import WhiteButton from '../../components/WhiteButton/WhiteButton';

function Register() {
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
                        <InputBox type={'text'}></InputBox>
                        <h2 className={style.label}>Email</h2>
                        <InputBox type={'email'}></InputBox>
                        <h2 className={style.label}>Password</h2>
                        <InputBox type={'password'}></InputBox>
                        <h2 className={style.label}>Repeat password</h2>
                        <InputBox type={'password'}></InputBox>
                        <Button redirection={'/'} text={'Sign up'}></Button>
                    </form>
                </AuthBox>
                <AuthBox>
                    <h3 className={style.register_text}>Already have an account?</h3>
                    <WhiteButton redirection={'/login'} text={'Log in'}></WhiteButton>
                </AuthBox>
                <div className={style.footer}>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default Register;
