import style from './CustomSets.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SetCard from '../../components/SetCard/SetCard';
import Button from '../../components/Button/Button';
import {useEffect, useState} from 'react';

type CustomSet = {
    customSetId: string,
    title: string,
    photo: any,
    creationDate: string,
    creatorUsername: string
};

function CustomSets() {
    const [customSetList, setCustomSetList] = useState<CustomSet[]>([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8080/public/custom-sets', {
                method: 'GET'
            }
        ).then((response) => response.json())
            .then((data) => {
                setCustomSetList(data);
            });
    }, []);

    return (
        <>
            <div className={style.custom_sets}>
                <Navbar/>
                <div style={{width: 10, alignSelf: "center"}}>
                    <Button text={"Add set"} redirection={'/add-set'}/>
                </div>
                {/*component search bar*/}
                <div className={style.container}>
                    <div className={style.grid}>
                        {customSetList && customSetList.map(customSet => <SetCard
                            key={customSet.customSetId}
                            id={customSet.customSetId} {...customSet}/>)}
                    </div>
                </div>
                <div className={style.footer}>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default CustomSets;
