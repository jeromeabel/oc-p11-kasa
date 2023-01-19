import { useState } from 'react'
import '../styles/Accordion.css'

export default function Accordion( {title, text }) {
    const [ isVisible, setIsVisible ] = useState(false)
    
    return (
        <div className='accordion'>
            <div className='accordion__header'>
                <h2 className='accordion__title'>{title}</h2>
                <button
                    type="button"
                    className={`accordion__btn ${isVisible ? "rotate0" : "rotate180"}`}
                    ariaExpanded="false"
                    onClick={() => setIsVisible(!isVisible)}>
                    <i className="fa-sharp fa-solid fa-chevron-up"></i>
                        {/* { isVisible ?  
                            <i className="fa-sharp fa-solid fa-chevron-up"></i> : 
                            <i className="fa-sharp fa-solid fa-chevron-down"></i> 
                        } */}
                </button>
            </div>
            { isVisible && 
                <div className='accordion__body'>
                    <p>{text}</p>
                </div>
            }   
        </div>
    )
}