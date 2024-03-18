import { useState } from 'react'
import style from './Training.module.css'
import Card from '../Card/Card.jsx'
import { data } from '../data.json'
import { UilAngleRightB } from '@iconscout/react-unicons'
import { UilAngleLeftB } from '@iconscout/react-unicons'



export default function Training({ index = 0 }) {
    const [i, setI] = useState(index)
    const [hidden, setHidden] = useState(false);

    function handleClickDown() {

        if (i > 0) {
            setHidden(false)
            setI(i - 1)
        }
    }

    function handleClickUp() {

        if (i <= data.length - 2) {
            setHidden(false)
            setI(i + 1)
        }
        /*
        else {
            setI(0)
        }
        */
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

                <Card {...data.sort((a, b) => a.id - b.id)[i]} onCardChange={handleChange} hidden={hidden} />

                <UilAngleRightB size="70" color=" #935fb680" className={style.button} onClick={() => handleClickUp()} />
            </section>
            <span>{i + 1}/{data.length}</span>
        </main>
    )
}