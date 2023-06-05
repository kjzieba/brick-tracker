import style from './AddCustomSet.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import InputBox from '../../components/InputBox/InputBox';
import PartsList from '../../components/PartsList/PartsList';
import React, {useEffect, useState} from 'react';
import AddParts from '../../components/AddParts/AddParts';
import {useNavigate} from 'react-router-dom';

export type Part = {
    elementId: number,
    partNumber: string,
    name: string,
    color: string,
    imgUrl: string,
    quantity: number
}

function AddCustomSet() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [parts, setParts] = useState<Part[]>([]);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [currentImage, setCurrentImage] = useState<File>();
    const [currentInstruction, setCurrentInstruction] = useState<File>();
    const [previewImage, setPreviewImage] = useState<string>("");

    const addPartToList = (part: any) => {
        let partsTemp: any = parts;
        partsTemp.push(part);
        setParts(partsTemp);
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        setCurrentImage(selectedFiles?.[0]);
        setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    };

    const selectInstruction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        setCurrentInstruction(selectedFiles?.[0]);
    };

    const addCustomSet = async () => {
        const token = localStorage.getItem("token");
        if (token == null) {
            return;
        }

        let formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);

        if (currentImage !== undefined) {
            formData.append("photo", currentImage);
        }

        if (currentInstruction !== undefined) {
            formData.append("instruction", currentInstruction);
        }

        formData.append("parts", JSON.stringify(parts, ['elementId', 'quantity']));

        await fetch('http://127.0.0.1:8080/custom-sets', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            }
        );

        navigate("/custom-sets");
    };


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/login")
        }
    }, []);

    return (
        <>
            <div className={style.add_custom_set}>
                <Navbar/>
                <div className={style.container}>
                    <div className={style.left}>
                        <b>Title</b>
                        <InputBox type={"text"} onChange={changeTitle}/>
                        <b>Description</b>
                        <textarea className={style.input} onChange={changeDescription}></textarea>
                        <b>Upload photos</b>
                        <input className={style.input_file} type={"file"} accept={"image/*"}
                               onChange={selectImage}></input>
                        <div className={style.photos}>
                            <div className={style.img_placeholder}>
                                {previewImage && (
                                    <img className={style.img} src={previewImage} alt=""/>
                                )}
                            </div>
                        </div>
                        <b>Upload instruction</b>
                        <input className={style.input_file} type={"file"} accept={"application/pdf"}
                               onChange={selectInstruction}></input>
                    </div>
                    <div className={style.right}>
                        <div className={style.right_header}>
                            <b>Parts</b>
                            <button className={style.add_button} onClick={togglePopup}>
                                <div className={style.button_text}>
                                    <b>Add new part</b>
                                </div>
                            </button>
                        </div>
                        <PartsList parts={parts}/>
                    </div>
                </div>
                <div className={style.submit}>
                    <button className={style.button} onClick={addCustomSet}>
                        <h2 className={style.button_text}>
                            Add custom set
                        </h2>
                    </button>
                </div>
                <div className={style.footer}>
                    <Footer/>
                </div>
            </div>
            {isOpen && <AddParts closePopup={togglePopup} addPartsToList={addPartToList}/>}
        </>
    );
}

export default AddCustomSet;
