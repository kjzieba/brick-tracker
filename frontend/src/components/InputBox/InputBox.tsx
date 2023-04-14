import style from './InputBox.module.css';

interface InputProps {
    type: string;
    onChange?: any
}

const InputBox = (props: InputProps) => {
    return (
        <>
            <input className={style.input}
                   type={props.type}
                   onChange={props.onChange}></input>
        </>
    );
};

export default InputBox;