import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UniversityLis from './components/UniversityList'
import UniversityList from './components/UniversityList'
import SearchBar from './components/SearchBar'

function App() {
  
  /* const [inputValue,setInputValue]=('') */
  const [universities, setUniversities]=useState([])
  const [searchValue,setSearchValue]=useState('')
  
  useEffect(()=>{fetchRequest()},[])
  
  const fetchRequest = async ()=>{
      const response = await fetch('http://universities.hipolabs.com/search?country=Italy')
      const obj= await response.json()
      
      const elencoUniversita=obj.map((universita=>{
        return {
          name:universita.name,
          url:universita.web_pages[0]
        }                 
      }))
      setUniversities(elencoUniversita)
  }

//fare uno usestate che aggiorna universities
  return (
    <>
      <SearchBar
        onSearch={(searchValue)=>setSearchValue(searchValue)}
      />
      <UniversityList
        list={universities}
        research={searchValue}
      />
    </>
  )
}

export default App
