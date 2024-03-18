import { useState } from "react"
import style from './TableData.module.css'
import { data } from '../../data.json'

export default function TableData({ english, russian, tags, id }) {

    const [isEditing, setIsEditing] = useState(false)
    const [isInputEmpty, setIsInputEmpty] = useState(false);

    const handleEdit = () => {
        setIsEditing(true)
        setIsInputEmpty(true);
    };

    const [saveDisabled, setSaveDisabled] = useState(true);

    const handleSave = () => {
    }

    const handleCancel = () => {
        setIsEditing(false)
        setIsInputEmpty(false)
    }


    return (
        <>
            <tr key={id} className={style.line}>
                <td className={`${style.column} ${isInputEmpty ? style.empty : ''}`}> {isEditing === true ? <input className={style.input} defaultValue={english} /> : english}</td>
                <td className={`${style.column} ${isInputEmpty ? style.empty : ''}`}> {isEditing === true ? <input className={style.input} defaultValue={russian} /> : russian} </td >
                <td className={`${style.column} ${isInputEmpty ? style.empty : ''}`}> {isEditing === true ? <input className={style.input} defaultValue={tags} /> : tags} </td >
                <td className={`${style.column} ${style.buttonArea}`}>{isEditing === true ?
                    <>
                        <button className={`${style.edit} ${style.button}`} onClick={handleSave}>Сохранить</button>
                        <button className={`${style.edit} ${style.button}`} onClick={handleCancel}>Отмена</button>
                    </>
                    :
                    <button className={`${style.edit} ${style.button}`} onClick={() => handleEdit()}>Редактировать</button>
                }</td>
            </tr >
        </>
    );

}