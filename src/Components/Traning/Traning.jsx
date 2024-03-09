import { useState } from 'react'
import Card from '../Card/Card.jsx'
import { words } from '../data.jsx'

export default function Traning() {

    console.log(words.sort((a, b) => a.id - b.id));


    return (
        <main>
            <ul className='cards'>
                {words.map((card, id) => (
                    <Card key={id} {...card} />
                ))}
            </ul>
        </main>
    )
}