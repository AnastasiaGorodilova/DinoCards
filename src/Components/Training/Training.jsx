import { useState } from 'react'
import style from './Training.module.css'
import Card from '../Card/Card.jsx'
import { data } from '../data.json'
import { UilAngleRightB } from '@iconscout/react-unicons'
import { UilAngleLeftB } from '@iconscout/react-unicons'



export default function Training({ index = 0 }) {
    const [i, setI] = useState(index)
    const [isHiden, setIsHiden] = useState(false);

    function handleClickDown() {
        setIsHiden(false)
        if (i > 0) {
            setI(i - 1)
        }
    }

    function handleClickUp() {
        setIsHiden(false)
        if (i <= data.length - 2) {
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
        setIsHiden(true)
        setTotalCount(totalCount + count)
    }

    return (
        <main>
            <span><h3>
                Выучено слов :  {totalCount}</h3>
            </span>
            <section className={style.training}>
                <UilAngleLeftB size="70" color=" #935fb680" className={style.button} onClick={() => handleClickDown()} />

                <Card {...data.sort((a, b) => a.id - b.id)[i]} onCardChange={handleChange} isHiden={isHiden} />

                <UilAngleRightB size="70" color=" #935fb680" className={style.button} onClick={() => handleClickUp()} />
            </section>
            <span>{i + 1}/{data.length}</span>
        </main>
    )
}