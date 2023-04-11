import style from './Footer.module.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className={style.footer_container}>
                <Link to='/faq' className={style.link}>
                    FAQ
                </Link>
                <Link to='/about' className={style.link}>
                    About
                </Link>
                <Link to='/contact' className={style.link}>
                    Contact
                </Link>
            </div>
        </>
    );
};

export default Footer;