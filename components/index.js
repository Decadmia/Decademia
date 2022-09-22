import Head from 'next/head'
import Projects from '../components/Projects'
import ProjectDetails from "./ProjectDetails"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Decademia</title>
        <meta name="description" content="Invest in biopharma researchers and their work" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Projects />
      <ProjectDetails />
    </div>
  )
}
