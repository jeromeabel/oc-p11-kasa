import './Caroussel.scss'

// fleche : setIndex ( index +1)
// fleche : setIndex( index -1)

/*
function nextImage() {
    if (index === pictures.length - 1) setIndex(0)
    else setIndex(index++)
}

function prevImage() {
     if (index === 0) setIndex(pictures.length - 1)
    else setIndex(index--)
}

*/

// img src pictures[index]

export default function Caroussel( { title, pictures }) {

    let index = 0;
    // transition ? slide ?

    return (
        <section className='caroussel'>
            <img src={pictures[index]} alt={title} />
        </section>
    )

}