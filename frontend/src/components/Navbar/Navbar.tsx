import style from './Navbar.module.css';
import Button from '../Button/Button';
import logo from '../../assets/bricklogo.svg'
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch(`http://127.0.0.1:8080/user`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                }
            ).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error();
                }
            }).then(data => {
                setUsername(data.username);
                localStorage.setItem("username", data.username);
                localStorage.setItem("role", data.role);
            }).catch(() => {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                localStorage.removeItem("role");
            })
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);
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
                    {!isLoggedIn && <>
                        <Link to='/login' className={style.link}>
                            <h2>Log in</h2>
                        </Link>
                        <Button text={'Sign up'}
                                redirection={'/register'}></Button>
                    </>}
                    {isLoggedIn && <h2>Hello, {username}</h2>}

                </div>
            </div>
        </>
    );
};

export default Navbar;