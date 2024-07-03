import { useState } from "react"
import { TotalGifts } from "./TotalGifts";


export const GifList = () => {
    const [regalos,  setRegalo] = useState([])

    
    const agregarGif = () =>{
        const nuevoRegal = prompt('Quieres añadir un regalo?');

        setRegalo([
            ...regalos,
            nuevoRegal
        ])
    }
  return (
    <>
    <h2>Regalos</h2>
    <ul>
        {
            regalos.map(gif =>(
                <li key={gif}>{gif}</li>
            ))
        }
    </ul>
    <button onClick={agregarGif} >Añadir regalo</button>

    <TotalGifts FuntotalReg={regalos.length} />
    </>
  )
}






