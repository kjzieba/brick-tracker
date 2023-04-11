import style from './FeatureBox.module.css';
import img1 from '../../assets/featurebox1.jpg';
import img2 from '../../assets/featurebox2.jpg';
import img3 from '../../assets/featurebox3.jpg';
import Button from '../Button/Button';

const images: string[] = [img1, img2, img3];

interface FeatureBoxProps {
    title: string;
    text: string;
    buttonText: string;
    redirection: string;
    img: number;
    alt: string;
}

const FeatureBox = (props: FeatureBoxProps) => {
    return (
        <>
            <div className={style.feature_box}>
                <h2 className={style.header}>
                    {props.title}
                </h2>
                <img className={style.image} src={images[props.img]} alt={props.alt}></img>
                <p className={style.text}>
                    {props.text}
                </p>
                <div className={style.button}>
                    <Button text={props.buttonText} redirection={props.redirection}></Button>
                </div>
            </div>
        </>
    );
};

export default FeatureBox;