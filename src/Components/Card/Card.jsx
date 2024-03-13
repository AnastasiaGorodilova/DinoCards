import { useState } from 'react'
import './Card.css'
import { words } from '../data.jsx'


export default function Card({ english, transcription, russian }) {

    const [content, setContent] = useState('')
    const [isHiden, setIsHiden] = useState(false);

    function handleClick() {
        setContent(russian)
        setIsHiden(true)
    }

    return (
        <div className={'cardBody'}>
            <h1 className={'cardEnglish'}>{english}</h1>
            <h2 className={'cardTranscription'}>{transcription}</h2>
            <p className='cardRussian '>
                <button className={`button  ${isHiden ? ' hide' : ''}`} onClick={() => handleClick()}>
                    Проверить</button>
                {content}</p>
        </div >
    )


}
