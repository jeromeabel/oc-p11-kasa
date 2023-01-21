import './Banner.scss'

export default function Banner( { image, text, children }) {

    return (
        <div className="container banner">
            <img className="banner__img" src={image} alt="Paysages" aria-hidden="true" />
            {/* { text && <h1>{text}</h1> } */}
            { children && <h1>{children}</h1> }
        </div>
    )
}