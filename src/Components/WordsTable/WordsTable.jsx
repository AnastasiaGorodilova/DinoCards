import { useState } from "react"
import style from './WordsTable.module.css'
import { words } from '../../App.jsx'

export default function WordsTable({ id, english, transcription, russian, tags, tags_json }) {

    const [isEditing, setIsEditing] = useState(false)
    const [isInputEmpty, setIsInputEmpty] = useState(false)
    const [newData, setnewData] = useState(words)
    const [updateData, setupdatedData] = useState(words)

    const handleEdit = () => {
        setIsEditing(true)
    };

    const handleInputChange = (id, field, value) => {
        const updatedData = newData.map(item =>
            item.id === id ? { ...item, [field]: value } : item)
        setupdatedData(updatedData)
        setIsInputEmpty(value < 1)

        console.log(updateData, value)
    };

    const handleSave = () => {
        setnewData(updateData)
        console.log('Сохранено:', updateData)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setnewData(newData)
        console.log('отмена:', newData)
        setIsEditing(false)
        setIsInputEmpty(false)
    }

    return (
        <>
            <tr key={id} className={style.line}>
                <td className={`${style.column} ${isInputEmpty ? style.empty : ''}`}> {isEditing ? <input
                    className={style.input}
                    defaultValue={english}
                    onChange={e => handleInputChange(id, 'english', e.target.value)}
                /> : english} </td>
                <td className={`${style.column} ${isInputEmpty ? style.empty : ''}`}> {isEditing ? <input
                    className={style.input}
                    defaultValue={russian}
                    onChange={e => handleInputChange(id, 'russian', e.target.value)}
                /> : russian} </td >
                <td className={`${style.column} ${isInputEmpty ? style.empty : ''}`}> {isEditing ? <input
                    className={style.input}
                    defaultValue={tags}
                    onChange={e => handleInputChange(id, 'tags', e.target.value)}
                /> : tags} </td >
                <td className={`${style.column} ${style.buttonArea}`}>{isEditing ?
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