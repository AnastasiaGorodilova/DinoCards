import React, { useState } from 'react'
import style from './Table.module.css'
import { words, sortWords } from '../../App.jsx'
import TableData from '../TableData/TableData'


export default function Table() {
    let lastComponentId = sortWords[sortWords.length - 1]
    const [lastId, setlastId] = useState(Number(lastComponentId.id) + 1)

    function handleClickCreate() {
        setlastId(lastId + 1)
        words.push({
            "id": `${lastId}`,
            "english": "",
            "transcription": "",
            "russian": "",
            "tags": "",
            "tags_json": ""
        })
    }

    return (
        <main>
            <div className={style.tableArea}>
                <table className={style.table}>
                    <tbody>
                        {sortWords.map((table, id) => {
                            return <TableData key={id} {...table} />
                        })}
                    </tbody>
                </table>

            </div>
            <div className={style.createArea}><button className={style.button} onClick={() => handleClickCreate()}>Добавить</button></div>
        </main>
    );
}
