import style from './WhiteButton.module.css';
import {Link} from 'react-router-dom';

const WhiteButton = (props: { text: string, redirection: string }) => {
    return (
        <>
            <Link to={props.redirection} className={style.button}>
                <h2 className={style.text}>
                    {props.text}
                </h2>
            </Link>
        </>
    );
};

export default WhiteButton;