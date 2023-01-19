import Banner from '../components/Banner'
import imgBanner from '../assets/banner-about.jpg'
import Accordion from '../components/Accordion'

import '../styles/AccordionsList.css'


const allText = [  
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.", "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.", "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.", "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
    ]

export default function about() {
    return (
      <section className="about">
        <Banner image={imgBanner} />

        <div className='accordions-list' style={{ marginTop:'40px' }}>
            <Accordion title="Fiabilité" text={allText[0]} />
            <Accordion title="Respect" text={allText[1]} />
            <Accordion title="Service" text={allText[2]} />
            <Accordion title="Sécurité" text={allText[3]} />
        </div>
      </section>
    )
}