import type { NextPage } from 'next'
import Biography from '../components/Biography'
import { CardsProcess } from '../components/CardsProcess'
import CounterArea from '../components/CounterArea'
import { HomeScreen } from '../components/HomeScreen'
import Specification from '../components/Specification'
import TechArea from '../components/TechArea'
import Warranty from '../components/Warranty.tsx'
import WorkUsForm from '../components/WorkUsForm'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Juste Software House - Next Gen </title>
        <meta name="description" content="Software House - Soluções em Desenvolvimento web e mobile de ponta a ponta." />
      </Head>
      <HomeScreen />
      <CardsProcess />
      <TechArea />
      <CounterArea />
      <Specification />
      <Biography />
      <Warranty />
      <WorkUsForm />
    </>
  )
}

export default Home
