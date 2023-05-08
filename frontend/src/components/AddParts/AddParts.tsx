import style from './AddParts.module.css';
import React, {useState} from 'react';

const AddParts = (props: { closePopup: any, addPartsToList: any }) => {
    let partNumber: string;
    let partColor: string;

    const [canAdd, setCanAdd] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(0);
    const [elementId, setElementId] = useState<number>(0);

    const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(e.target.value));
    }

    async function verifyPartNumber(e: any) {
        partNumber = e.target.value;

        const exists = await fetch(`http://127.0.0.1:8080/part/${partNumber}`, {
                method: "GET"
            }
        ).then((response) => response.json());

        if (!exists) {
            e.target.className = style.input_invalid;
            setCanAdd(false)
        } else {
            e.target.className = style.input;
        }
    }

    async function verifyColorAndPartNumber(e: any) {
        partColor = e.target.value;

        const data = await fetch(`http://127.0.0.1:8080/part/${partNumber}/${partColor}`, {
                method: "GET"
            }
        ).then((response) => response.json());

        if (data.elementId == 0) {
            e.target.className = style.input_invalid;
            setCanAdd(false)
        } else {
            e.target.className = style.input;
            setElementId(data.elementId);
            setCanAdd(true)
        }
    }

    async function addParts(e: any) {
        e.preventDefault()
        if (canAdd) {
            const part = await fetch(`http://127.0.0.1:8080/element/${elementId}`, {
                    method: "GET"
                }
            ).then((response) => response.json());
            part.quantity = quantity;
            props.addPartsToList(part);
            props.closePopup();
        }
    }

    return (
        <>
            <div className={style.popup_background} onClick={props.closePopup}></div>
            <div className={style.container}>
                <form id={"form"} onSubmit={addParts}>
                    <b>Part number</b>
                    <input className={style.input} type={"text"} onBlur={verifyPartNumber} required={true}></input>
                    <b>Part color</b>
                    <input className={style.input} type={"text"} onBlur={verifyColorAndPartNumber}
                           required={true}></input>
                    <b>Quantity</b>
                    <input className={style.input} type={"number"} required={true} onChange={changeQuantity}></input>
                    <div className={style.button_container}>
                        <button className={style.button} form={"form"} type={"submit"}>
                            <b>Add part</b>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddParts;