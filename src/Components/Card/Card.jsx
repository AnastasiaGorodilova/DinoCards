import { useState, useEffect, useRef } from 'react'
import './Card.css'
import { words } from '../../App'

export default function Card({ english, transcription, russian, onCardChange, hidden }) {


    const buttonRef = useRef();

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    return (
        <div className={'cardBody'}>
            <h1 className={'cardEnglish'}>{english}</h1>
            <h2 className={'cardTranscription'}>{transcription}</h2>
            <p className='cardRussian '>
                {!hidden && <button ref={buttonRef} className='button' onClick={() => onCardChange(true)} hidden={hidden} >Проверить</button>}
                {hidden && <>{russian}</>}
            </p>
        </div >
    )
}
