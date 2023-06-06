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
    const [isModerator, setIsModerator] = useState<boolean>(false);
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

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role == null || role != 'MODERATOR') {
            setIsModerator(false);
            return;
        } else {
            setIsModerator(true);
        }
    }, []);

    async function deleteSet(id: any) {
        const token = localStorage.getItem("token");
        await fetch(`http://127.0.0.1:8080/mod/custom-set/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            }
        )
        let setsTemp: any = customSetList;
        const idx = setsTemp.findIndex((set: CustomSet) => set.customSetId == id);
        if (idx > -1) {
            setsTemp.splice(idx, 1);
        }
        setCustomSetList([...setsTemp]);

    }

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
                            isModerator={isModerator}
                            deleteSet={deleteSet}
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
