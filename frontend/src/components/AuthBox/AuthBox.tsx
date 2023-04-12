import style from './AuthBox.module.css';
import React from 'react';

const AuthBox = (props: { children: React.ReactNode }) => {
    return (
        <>
            <div className={style.box}>{props.children}</div>
        </>
    );
};

export default AuthBox;