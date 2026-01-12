import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text } from './components/Text/Text';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import { Footer } from './components/Footer/Footer'; 

import { ItemCard } from './components/Stock/ItemCard';
import { ContentContainer } from './components/componentContainer';
import { StockContainer } from './components/Stock/StockContainer';

//40ml
import Arya from "./assets/images/40/Arya.jpg"
import BEdition from './assets/images/40/BEditionMan.jpg'
import BerryBerry from './assets/images/40/BerryBerry.jpg'
import BlackOud from './assets/images/40/BlackOud.jpg'
import ClubDeAbsolu from './assets/images/40/ClubDeAbsolu.jpg'
import D from './assets/images/40/D.jpg'
import DezireBlue from './assets/images/40/DezireBlue.jpg'
import DezireRed from './assets/images/40/DezireRed.jpg'
import FlawlessClassic from './assets/images/40/FlawlessClassic.jpg'
import GorgeousGirl from './assets/images/40/GorgeousGirl.jpg'
import KashmiriOud from './assets/images/40/KashmiriOud.jpg'
import OnMyWayy from './assets/images/40/OnMyWayy.jpg'
import OudDGreat from './assets/images/40/OudDGreat.jpg'
import SCandle from './assets/images/40/SCandle.jpg'
import SelverSense from './assets/images/40/SelverSense.jpg'
import Stallion from './assets/images/40/Stallion.jpg'
import Sugar from './assets/images/40/Sugar.jpg'
import SweetCandle from './assets/images/40/SweetCandle.jpg'
import WhiteOudClassic from './assets/images/40/WhiteOudClassic.jpg'
import WildIntense  from './assets/images/40/WildIntense.jpg'

//80ml
// import
// import



function App() {
  const [count, setCount] = useState(0)
  const [stock, setStock] = useState([
    { name: "Arya", imgLink: Arya, price: 80, id: 1 },
    { name: "BEditionMan", imgLink: BEdition, price: 80, id: 2 },
    { name: "BerryBerry", imgLink: BerryBerry, price: 80, id: 3 },
    { name: "BlackOud", imgLink: BlackOud, price: 80, id: 4 },
    { name: "ClubDeAbsolu", imgLink: ClubDeAbsolu, price: 80, id: 5 },
    { name: "D", imgLink: D, price: 80, id: 6 },
    { name: "DezireBlue", imgLink: DezireBlue, price: 80, id: 7 },
    { name: "DezireRed", imgLink: DezireRed, price: 80, id: 8 },
    { name: "FlawlessClassic", imgLink: FlawlessClassic, price: 80, id: 9 },
    { name: "GorgeousGirl", imgLink: GorgeousGirl, price: 80, id: 10 },
    { name: "KashmiriOud", imgLink: KashmiriOud, price: 80, id: 11 },
    { name: "OnMyWayy", imgLink: OnMyWayy, price: 80, id: 12 },
    { name: "OudDGreat", imgLink: OudDGreat, price: 80, id: 13 },
    { name: "SCandle", imgLink: SCandle, price: 80, id: 14 },
    { name: "SelverSense", imgLink: SelverSense, price: 80, id: 15 },
    { name: "Stallion", imgLink: Stallion, price: 80, id: 16 },
    { name: "Sugar", imgLink: Sugar, price: 80, id: 17 },
    { name: "SweetCandle", imgLink: SweetCandle, price: 80, id: 18 },
    { name: "WhiteOudClassic", imgLink: WhiteOudClassic, price: 80, id: 19 },
    { name: "WildIntense", imgLink: WildIntense, price: 80, id: 20 }
  ])

  return (
    <>
    <div id='app-container'>
      <div id='scrollable'>
            <Navbar />
            <Search />
            <StockContainer stock={stock}/>
      </div>
      <Footer/>
    </div>

    </>
  )
}

export default App
