import { useEffect } from 'react'

import Banner from '../components/Banner'
import AccomodationsGrid from '../components/AccomodationsGrid';
import imgBanner from '../assets/banner-home.jpg'

export default function Home() {

  useEffect(() => {
    document.title = "Accueil - Kasa"
  }, []);

  return (
    <section className="home">
      <Banner image={imgBanner} text="Chez vous, partout et ailleurs" />
      <AccomodationsGrid />
    </section>
  )
}