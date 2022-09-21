import Head from 'next/head'
import Projects from '../components/Projects'
import CreateProject from './CreateProject'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Decademia</title>
        <meta name="description" content="I’m a Blockchain developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>


    <Projects />

    </div>
  )
}
