import type { NextPage } from 'next'
import Biography from '../components/Biography'
import { CardsProcess } from '../components/CardsProcess'
import CounterArea from '../components/CounterArea'
import { HomeScreen } from '../components/HomeScreen'
import Specification from '../components/Specification'
import TechArea from '../components/TechArea'
import Warranty from '../components/Warranty.tsx'
import WorkUsForm from '../components/WorkUsForm'

const Home: NextPage = () => {
  return (
    <>
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
