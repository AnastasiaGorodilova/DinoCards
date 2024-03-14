import { useState } from 'react'
import './Card.css'
import { data } from '../../data.json'

export default function Card({ english, transcription, russian, onCardChange }) {

    const [isHiden, setIsHiden] = useState(false);
    let count = 0


    function handleClick() {
        setIsHiden(true)
        onCardChange(count + 1)
    }


    return (
        <div className={'cardBody'}>
            <h1 className={'cardEnglish'}>{english}</h1>
            <h2 className={'cardTranscription'}>{transcription}</h2>
            <p className='cardRussian '>
                {!isHiden && <button className='button' onClick={() => handleClick()} >Проверить</button>}
                {isHiden && <>{russian}</>}
            </p>
        </div >
    )
}
