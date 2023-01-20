import { useState } from 'react'

import './Accordion.scss'

export default function Accordion( {title, children, list }) {
    const [ isVisible, setIsVisible ] = useState(false)
    
    return (
        <div className='accordion'>
            <div className='accordion__header'>
                <h2 className='accordion__title'>{title}</h2>
                <button
                    type="button"
                    className={`accordion__btn ${isVisible ? "rotate0" : "rotate180"}`}
                    aria-expanded="false"
                    onClick={() => setIsVisible(!isVisible)}>
                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                </button>
            </div>
            <div className={`accordion__body ${isVisible ? "showY" : "hideY"}`}>
                {children}
            </div>

            {/* { isVisible && text &&
                <div className='accordion__body'>
                    <p>{text}</p>
                </div>
            }
             { isVisible && list &&
                <div className='accordion__body'>
                    <ul>{list.map( (item, index) => <li key={`${item}`}>{item}</li>)}</ul>
                </div>
            }    */}
        </div>
    )
}