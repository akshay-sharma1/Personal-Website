import Head from 'next/head'
import Info from '../components/Info/Info'
import Projects from '../components/Projects/Projects'
import Nav from '../components/NavBar/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      </Head>
      <Info />
      <Nav />
      <Projects />
    </div>
  )
}
