import style from './InputBox.module.css';

interface InputProps {
    type: string;
}

const InputBox = (props: InputProps) => {
    return (
        <>
            <input className={style.input}
                   type={props.type}></input>
        </>
    );
};

export default InputBox;