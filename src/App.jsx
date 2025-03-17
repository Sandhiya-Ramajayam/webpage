import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.png'
import Burger from './assets/burger.jpg'
import Biriyani from './assets/biriyani life.avif'
import chinese from './assets/chinese wok.avif'
import KFC from './assets/kfc.avif'
import McDonald from './assets/McDonalds.avif'
import Pizzahut from './assets/pizza hut.avif'
import Header from './components/header/Header'
import { baseUrl } from './utils/mockDara'
import Search from './components/body/Search'
import Body from './components/body/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Body />
    </>
  )
}
export default App

