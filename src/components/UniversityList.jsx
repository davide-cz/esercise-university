import { useEffect, useState } from "react"
import './UniversityList.scss'


export default function UniversityList({list,research}){
    const [isSorted,setIsSorted]=useState(false)

    const orderedList=list
        .filter(elenco=> elenco.name.toLowerCase().includes(research.toLowerCase()))
        .sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
            return 0;
        })
        .map((univ)=>{
            return(
                <div key={univ.name} className="uniCard" >
                    <h5>{univ.name}</h5>
                    <p><a href={univ.url}>{univ.url}</a></p>
                </div>
            )
        })

    const unorderedList=list
    .filter(elenco=> elenco.name.toLowerCase().includes(research.toLowerCase()))
    .map((univ)=>{
        return(
            <div key={univ.name} className="uniCard">
                <h5 className="uniName">{univ.name}</h5>
                <p><a href={univ.url}>{univ.url}</a></p>
            </div>
        )
    })
    
    return (
        <>
            <button onClick={()=>setIsSorted(true)}>ordina </button>
              <div className="uniList">
                {isSorted && orderedList}
                {!isSorted && unorderedList}

              </div>
        </>
    )
} 
