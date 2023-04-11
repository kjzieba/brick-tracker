import style from './Navbar.module.css';
import Button from '../Button/Button';
import logo from '../../assets/bricklogo.svg'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className={style.navbar}>
                <Link to='/' className={style.logo}>
                    <img className={style.logo_img} src={logo} alt='logo'></img>
                    <h2>BrickTracker</h2>
                </Link>
                <div className={style.right_items}>
                    <Link to='/custom-sets' className={style.link}>
                        <h2>Custom sets</h2>
                    </Link>
                    <Link to='/my-sets' className={style.link}>
                        <h2>My Sets</h2>
                    </Link>
                    <Link to='/build' className={style.link}>
                        <h2>What can you build</h2>
                    </Link>
                    <hr className={style.line}></hr>
                    <Link to='/login' className={style.link}>
                        <h2>Log in</h2>
                    </Link>
                    <Button text={'Sign up'}
                            redirection={'/register'}></Button>
                </div>
            </div>
        </>
    );
};

export default Navbar;