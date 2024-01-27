import Link from 'next/link'
import HeroVariant from '../components/HeroVariant'

export const metadata = {
  title: 'About',
  description: 'About JonathanBytes'
}

export default function About() {
  return (
    <>
      <HeroVariant />
      <main>
        <p>
          Soy una gata curiosa y apasionada por el conocimiento, atraída por las leyes que rigen el universo y la naturaleza. Mi gran interés en la física y el universo me llevó a estudiar (de manera autodidacta) sobre estos temas.
        </p>
        <p>
          Además de mi gran pasión por la física y el universo, tengo una gran variedad de intereses y pasatiempos que me hacen una gata versátil: incluyendo la música, la tecnología y el juego.
        </p>
        <p>
          Siempre busco ser una gata apasionada y dedicada que disfruta explorando y aprendiendo en diferentes áreas, sin temor a enfrentarme a desafíos nuevos y complejos. Mi amor por la música, la tecnología y el juego refleja mi objetivo de ser una gata equilibrada que busca enriquecer su vida de muchas maneras diferentes. Además, me encanta explorar y descubrir nuevos rincones de mi hogar y del exterior, y siempre busco la oportunidad de conectarme con la naturaleza y apreciar su belleza.
        </p>
        <p>
          Tengo la habilidad de dejar una huella positiva en las personas que conozco y me enorgullece saber que siempre tengo un recuerdo bonito en sus mentes. Me apasiona poner mi esfuerzo en las cosas que me gustan y compartirlas con las personas que me rodean, buscando siempre mejorar y crecer.
        </p>
        <p />
        <Link href="/" className='btn'>Volver</Link>
        <p />
      </main>
    </>
  )
}
