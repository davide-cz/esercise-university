import { useState } from "react"

export default function SearchBar({onSearch}){
    
    const [inputValue, setInputValue] = useState('')
    
      
    //onchange vuole inputvalue e useState
    return (
        <>
            <input type="text"    
                onChange={(e) => setInputValue(e.target.value)}            
                />
            <button onClick={() => onSearch(inputValue)}>Cerca</button>    
        </>
    )
}