import React, { useState } from 'react'
import style from './Table.module.css'
import { data } from '../data.json'


function TableData({ english, russian, tags, id }) {

    const [isEditing, setIsEditing] = useState(false)


    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
    }

    const handleCancel = () => {
        setIsEditing(false)
    }


    return (
        <>
            <tr key={id} className={style.line}>
                <td className={style.column}> {isEditing === true ? <input className={style.input} defaultValue={english} /> : english}</td>
                <td className={style.column}> {isEditing === true ? <input className={style.input} defaultValue={russian} /> : russian} </td >
                <td className={style.column}> {isEditing === true ? <input className={style.input} defaultValue={tags} /> : tags} </td >
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

export default function Table() {
    let sortTable = data.sort((a, b) => a.id - b.id)

    const lastComponentId = sortTable[sortTable.length - 1]

    function handleClickCreate() {
        lastComponentId.id
    }

    return (
        <main>
            <div className={style.tableArea}>
                <table className={style.table}>
                    <tbody>
                        {sortTable.map((table, id) => {
                            return <TableData key={id} {...table} />
                        })}
                    </tbody>
                </table>

            </div>
            <div className={style.createArea}><button className={style.button} onClick={() => handleClickCreate()}>Добавить</button></div>
        </main>
    );
}
