import { useState } from 'react'

import './Dropdown.scss'

export default function Dropdown( {title, children, list }) {
    const [ isVisible, setIsVisible ] = useState(false)
    
    return (
        <div className='Dropdown'>
            <div className='Dropdown__header'>
                <h2 className='Dropdown__title'>{title}</h2>
                <button
                    type="button"
                    className={`Dropdown__btn ${isVisible ? "rotate0" : "rotate180"}`}
                    aria-expanded="false"
                    onClick={() => setIsVisible(!isVisible)}>
                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                </button>
            </div>
            <div className={`Dropdown__body ${isVisible ? "showY" : "hideY"}`}>
                {children}
            </div>

            {/* { isVisible && text &&
                <div className='Dropdown__body'>
                    <p>{text}</p>
                </div>
            }
             { isVisible && list &&
                <div className='Dropdown__body'>
                    <ul>{list.map( (item, index) => <li key={`${item}`}>{item}</li>)}</ul>
                </div>
            }    */}
        </div>
    )
}