import { useSetTitle } from '../../hook/setTitle'

import Banner from '../../components/Banner/Banner'
import Accordion from '../../components/Accordion/Accordion'

import imgBanner from '../../assets/banner-about.jpg'


export default function About() {
  useSetTitle("À propos");

  return (
      <section className="about">
        <Banner image={imgBanner} />

        <div style={{ 
          width: '80%', 
          marginInline: 'auto'
          }}>
          <div style={{ 
              marginTop:'40px',
              display: 'flex',
              flexDirection: 'column' ,
              gridGap: '50px',
              }}>
              <Accordion title="Fiabilité">
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
              </Accordion>
              <Accordion title="Respect">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
              </Accordion>
              <Accordion title="Service">
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
              </Accordion>
              <Accordion title="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
              </Accordion>
          </div>
        </div>
      </section>
    )
}