import { useSetTitle } from 'common/hooks/setTitle';

import Banner from 'common/UI/Banner/Banner';
import Dropdown from 'common/UI/Dropdown/Dropdown';

import imgBanner from 'assets/banner-about.jpg';

import styles from './About.module.scss';

export default function About() {
  useSetTitle('À propos');

  return (
    <section className={styles.about}>
      <Banner image={imgBanner} />

      <div className={styles.about__container}>
        <div className={styles.about__list}>
          <Dropdown title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </Dropdown>
          <Dropdown title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </Dropdown>
          <Dropdown title="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </Dropdown>
          <Dropdown title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </Dropdown>
        </div>
      </div>
    </section>
  );
}
