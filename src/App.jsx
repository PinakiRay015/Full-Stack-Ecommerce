import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import Category from './components/Category'
import Home from './components/Home'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import NewsLetter from './components/NewsLetter'
import appContext from './utils/context'

const App = () => {
  return (
    <BrowserRouter>
    <appContext>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:id' element={<Category/>}/>
        <Route path='/product/:id' element={<Products/>}/>
      </Routes>
      <NewsLetter/>
      <Footer/>
    </appContext>
    </BrowserRouter>
  )
}

export default App
