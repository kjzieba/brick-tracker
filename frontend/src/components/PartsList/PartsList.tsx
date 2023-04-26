import style from './PartsList.module.css';
import {Part} from '../../pages/AddCustomSet/AddCustomSet';
import {useEffect, useRef} from 'react';

const PartsList = (props: { parts: Part[] }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.scrollIntoView();
    }, [props.parts.keys()]);

    return (
        <>
            <div className={style.parts_container}>
                <table className={style.table}>
                    <thead className={style.header_container}>
                    <tr className={style.header}>
                        <th className={style.header_img}></th>
                        <th className={style.header_id}>ID</th>
                        <th className={style.header_name}>Name</th>
                        <th className={style.header_qty}>Quantity</th>
                        <th className={style.header_color}>Color</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.parts && props.parts.map(part =>
                        <tr className={style.element} key={part.elementId}>
                            <td>
                                <div className={style.img_placeholder}>
                                    <img className={style.img} src={part.imgUrl} alt={''}></img>
                                </div>
                            </td>
                            <td className={style.td_id}>{part.partNumber}</td>
                            <td className={style.td_name}>{part.name}</td>
                            <td className={style.td_qty}>{part.quantity}</td>
                            <td className={style.td_color}>{part.color}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <div ref={ref}></div>
            </div>
        </>
    );
};
export default PartsList;