import React, { useState } from 'react'
import Footer from './components/Footer'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar'
import data from "./data/data.json"
const App=()=> {
const [searchValue,setSearchValue]=useState("")
  const inputHandler=(event)=>{
    setSearchValue(()=>event.target.value)
  }
  //return or filter the data and populate at the top when user search the data
  const returnCards=()=>{
    return data.filter(
      (card)=>card.title.toLowerCase().includes(searchValue.toLowerCase())|| searchValue===""
    )
  }

  return (
    <div>
      <Navbar inputHandler={inputHandler}/>
      <MovieCard data={data} returnCards={returnCards}/>
      <Footer/>
    </div>
  )
}

export default App