import { useState } from 'react'
import style from './Training.module.css'
import Card from '../Card/Card.jsx'
import { words, sortWords } from '../../App'
import { UilAngleRightB } from '@iconscout/react-unicons'
import { UilAngleLeftB } from '@iconscout/react-unicons'



export default function Training({ index = 0 }) {
    const [id, setId] = useState(index)
    const [hidden, setHidden] = useState(false);

    function handleClickDown() {

        if (id > 0) {
            setHidden(false)
            setId(id - 1)
        }
    }

    function handleClickUp() {

        if (id <= words.length - 2) {
            setHidden(false)
            setId(id + 1)
        }
        /* else { setI(0) } */
    }

    const [totalCount, setTotalCount] = useState(0)

    function handleChange(count) {
        setHidden(true)
        setTotalCount(totalCount + count)
    }

    return (
        <main>
            <span><h3>
                Выучено слов :  {totalCount}</h3>
            </span>
            <section className={style.training}>
                <UilAngleLeftB size="70" color=" #935fb680" className={style.button} onClick={() => handleClickDown()} />

                <Card {...sortWords[id]} onCardChange={handleChange} hidden={hidden} />

                <UilAngleRightB size="70" color=" #935fb680" className={style.button} onClick={() => handleClickUp()} />
            </section>
            <span>{id + 1}/{words.length}</span>
        </main>
    )
}