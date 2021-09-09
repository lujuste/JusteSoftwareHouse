import type { NextPage } from 'next'
import { CardsProcess } from '../components/CardsProcess'
import { HomeScreen } from '../components/HomeScreen.tsx'
import TechArea from '../components/TechArea'

const Home: NextPage = () => {
  return (
    <>
      <HomeScreen />
      <CardsProcess />
      <TechArea />
    </>
  )
}

export default Home
