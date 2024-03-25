import { useState } from "react"
import style from './TableData.module.css'
import { data } from '../../data.json'

export default function TableData({ english, russian, tags, id }) {

    const [isEditing, setIsEditing] = useState(false)
    const [isInputEmpty, setIsInputEmpty] = useState(false)
    const [tableData, settableData] = useState(data)

    const handleEdit = () => {
        setIsEditing(true)
        setIsInputEmpty(true)
    };

    const handleInputChange = (id, field, value) => {
        const updatedData = tableData.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        );
        settableData(updatedData);
    };


    const handleSave = () => {
        console.log('Сохранено:', tableData);
    }

    const handleCancel = () => {
        setIsEditing(false)
        setIsInputEmpty(false)
    }


    return (
        <>
            <tr key={id} className={style.line}>
                <td className={`${style.column} ${isInputEmpty ? style.empty : ''}`}> {isEditing === true ? <input
                    className={style.input}
                    value={english}
                    onChange={() => handleInputChange()}
                /> : english} </td>
                <td className={`${style.column} ${isInputEmpty ? style.empty : ''}`}> {isEditing === true ? <input
                    className={style.input}
                    value={russian}
                    onChange={() => handleInputChange()}
                /> : russian} </td >
                <td className={`${style.column} ${isInputEmpty ? style.empty : ''}`}> {isEditing === true ? <input
                    className={style.input}
                    value={tags}
                    onChange={() => handleInputChange()}
                /> : tags} </td >
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