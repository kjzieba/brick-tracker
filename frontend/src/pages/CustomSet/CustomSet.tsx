import style from './CustomSet.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PartsList from '../../components/PartsList/PartsList';
import up from '../../assets/upvote.svg';
import down from '../../assets/downvote.svg';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Part} from '../AddCustomSet/AddCustomSet';

type customSetDetails = {
    customSetId: string,
    title: string,
    description: string,
    photo: any,
    instruction: any,
    parts: Part[],
    creationDate: string,
    creatorUsername: string
};

function CustomSet() {
    const {id} = useParams();
    const [customSet, setCustomSet] = useState<customSetDetails>();
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/public/custom-sets/${id}`, {
                method: 'GET'
            }
        ).then((response) => response.json())
            .then((data) => {
                setCustomSet(data);
            });
    }, []);

    return (
        <>
            <div className={style.custom_set}>
                <Navbar/>
                <div className={style.container}>
                    <div className={style.left}>
                        <b>{customSet && customSet.title}</b>
                        <div className={style.img_placeholder}>
                            {customSet &&
                                <img className={style.img} src={`data:image/png;base64,${customSet.photo}`}
                                     alt={''}></img>}
                        </div>
                        <div className={style.info}>
                            <b className={style.creator}>{customSet?.creatorUsername}</b>
                            Added {customSet && customSet.creationDate}
                        </div>
                        <div className={style.votes}>
                            <img src={up} alt={'Upvote'} className={style.img_vote}></img>
                            <b>123</b>
                            <hr className={style.line}></hr>
                            <img src={down} alt={'Down-vote'} className={style.img_vote}></img>
                            <b>9</b>
                        </div>
                        <b>Description</b>
                        <div>
                            {customSet && customSet.description}
                        </div>
                        <div className={style.download}>
                            <a href={`data:application/pdf;base64,${customSet?.instruction}`}
                               download={'instruction-' + `${customSet?.customSetId}` + '.pdf'}>
                                <button className={style.button}>
                                    <h2 className={style.text}>
                                        Download instruction
                                    </h2>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={style.right}>
                        <b>Parts list</b>
                        {customSet && <PartsList parts={customSet.parts}/>}
                    </div>
                </div>
                <div className={style.footer}>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default CustomSet;
