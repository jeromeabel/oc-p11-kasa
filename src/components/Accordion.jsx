import '../styles/Accordion.css'

export default function Accordion( {title, text }) {

    return (
        <div className='accordion'>
            <h2 className='accordion__title'>{title}</h2>
            <p className='accordion__text'>{text}</p>
        </div>
    )
}