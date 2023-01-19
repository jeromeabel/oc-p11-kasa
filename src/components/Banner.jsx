import '../styles/Banner.css'

export default function Banner( { image, text }) {

    return (
        <div className="container banner">
            <img className="banner__img" src={image} alt="Paysages" ariaHidden="true" />
            { text && <h1>{text}</h1> }
        </div>
    )
}