import style from './SetCard.module.css';
import up from '../../assets/upvote.svg'
import down from '../../assets/downvote.svg'
import {Link} from 'react-router-dom';

interface SetCardProps {
    id: any,
    title: string,
    photo: any,
    creationDate: string,
    creatorUsername: string
}

const SetCard = (props: SetCardProps) => {
    return (
        <>
            <Link to={`/custom-sets/${props.id}`} className={style.link}>
                <div className={style.card}>
                    <h2 className={style.title}>{props.title}</h2>
                    <div className={style.img_placeholder}>
                        <img className={style.img} src={`data:image/png;base64,${props.photo}`}
                             alt={''}></img>
                    </div>
                    <div className={style.votes}>
                        <div className={style.vote}>
                            <img src={up} alt={'Upvote'} className={style.img_vote}></img>
                            <div className={style.number}>
                                <b>123</b>
                            </div>
                        </div>
                        <div className={style.vote}>
                            <img src={down} alt={'Down-vote'} className={style.img_vote}></img>
                            <div className={style.number}>
                                <b>9</b>
                            </div>
                        </div>
                    </div>
                    <div className={style.info}>
                        <b>{props.creatorUsername}</b>
                        <b>{props.creationDate}</b>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default SetCard;