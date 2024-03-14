import { useState } from 'react'
import style from './Training.module.css'
import Card from '../Card/Card.jsx'
import { data } from '../data.json'
import { UilAngleRightB } from '@iconscout/react-unicons'
import { UilAngleLeftB } from '@iconscout/react-unicons'
import { render } from 'react-dom'

export default function Training() {

    const [i, setI] = useState(0)

    function handleClickDown() {
        if (i > 0) {
            setI(i - 1)
        }
    }

    function handleClickUp() {
        if (i <= data.length - 2) {
            setI(i + 1)
        }
        else {
            setI(0)
        }
    }



    return (
        <main>
            <section className={style.training}>
                <UilAngleLeftB size="70" color=" #935fb680" className={style.button} onClick={() => handleClickDown()} />

                <Card {...data.sort((a, b) => a.id - b.id)[i]} />

                <UilAngleRightB size="70" color=" #935fb680" className={style.button} onClick={() => handleClickUp()} />
            </section>
            <span>{i + 1}/{data.length}</span>
        </main>
    )
}