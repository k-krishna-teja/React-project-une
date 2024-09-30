import React, { useState } from 'react' 
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Hommes} from '../data'
import { Femmes } from '../data'
import FemmesCollection from '../components/FemmesCollection'

const MainPage = () => {
const [hommesFashion , setHommesFashion] = useState(Hommes)
const [femmesFashion , setFemmesFashion] = useState(Femmes)
  return (
    <div>
      <Header />
      <Banner />
      <Collections hommesFashion= {hommesFashion} />
      <FemmesCollection femmesFashion={femmesFashion} />
      <Footer />
    </div>
  )
}

export default MainPage
