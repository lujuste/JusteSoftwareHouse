import type { NextPage } from 'next'
import { CardsProcess } from '../components/CardsProcess'
import CounterArea from '../components/CounterArea'
import { HomeScreen } from '../components/HomeScreen'
import TechArea from '../components/TechArea'

const Home: NextPage = () => {
  return (
    <>
      <HomeScreen />
      <CardsProcess />
      <TechArea />
      <CounterArea />
    </>
  )
}

export default Home
