import { useState, useEffect, useRef } from 'react'
import './Card.css'
import { data } from '../data.json'

export default function Card({ english, transcription, russian, onCardChange, isHiden, count = 0 }) {


    const buttonRef = useRef();

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    return (
        <div className={'cardBody'}>
            <h1 className={'cardEnglish'}>{english}</h1>
            <h2 className={'cardTranscription'}>{transcription}</h2>
            <p className='cardRussian '>
                {!isHiden && <button ref={buttonRef} className='button' onClick={() => onCardChange(count + 1)} isHiden={isHiden} >Проверить</button>}
                {isHiden && <>{russian}</>}
            </p>
        </div >
    )
}
