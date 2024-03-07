import { useState } from 'react'
import './Cards.css'
import { words } from './data.jsx'


export default function Cards({ english, transcription, russian }) {

    const [content, setContent] = useState('')
    const [isHiden, setIsHiden] = useState(false);

    function handleClick() {
        setContent(russian)
        setIsHiden(true)
    }

    return (
        <div className={'card-body'}>
            <h1 className={'card-english'}>{english}</h1>
            <h2 className={'card-transcription'}>{transcription}</h2>
            <p className='card-russian '>
                <button className={isHiden ? 'hide' : ''} onClick={() => handleClick()}>
                    Проверить</button>
                {content}</p>
        </div >
    )


}
