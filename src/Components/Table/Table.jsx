import React, { useState } from 'react'
import style from './Table.module.css'
import { data } from '../data.json'
import TableData from './TableData/TableData'


export default function Table() {
    let sortTable = data.sort((a, b) => a.id - b.id)

    let lastComponentId = sortTable[sortTable.length - 1]
    const [lastId, setlastId] = useState(Number(lastComponentId.id) + 1)

    function handleClickCreate() {
        setlastId(lastId + 1)
        data.push({
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
