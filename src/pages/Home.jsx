
import Banner from '../components/Banner'
import AccomodationsGrid from '../components/AccomodationsGrid';
import imgBanner from '../assets/banner-home.jpg'

export default function Home() {
    return (
      <section className="home">
        <Banner image={imgBanner} text="Chez vous, partout et ailleurs" />
        <AccomodationsGrid />
      </section>
    )
}