import { useState } from 'react'
import style from './Training.module.css'
import Card from '../Card/Card.jsx'
import { words } from '../data.jsx'
import { UilAngleRightB } from '@iconscout/react-unicons'
import { UilAngleLeftB } from '@iconscout/react-unicons'

export default function Training() {

    const [i, setI] = useState(0)

    function handleClickDown() {
        if (i > 0) {
            setI(i - 1)
        }
    }

    function handleClickUp() {
        if (i <= words.length - 2) {
            setI(i + 1)
        }
        else {
            setI(0)
        }
    }



    return (
        <>
            <section className={style.training}>
                <UilAngleLeftB size="70" color=" #935fb680" className={style.button} onClick={() => handleClickDown()} />

                <Card {...words.sort((a, b) => a.id - b.id)[i]} />

                <UilAngleRightB size="70" color=" #935fb680" className={style.button} onClick={() => handleClickUp()} />
            </section>
            <span>{i + 1}/{words.length}</span>
        </>
    )
}