import { useEffect, useState } from "react"
import { TotalGifts } from "./TotalGifts";


export const GifList = () => {
    const [regalos,  setRegalo] = useState([])
    const [valueInput, setValueInput] = useState('')


    const agregarGif = () =>{
        // const nuevoRegal = prompt('Quieres añadir un regalo?');
       if(valueInput.trim() !== '')
       {
            setRegalo([
                ...regalos,
                valueInput
            ])

            setValueInput('');

       }
    }

    const OnManejarCambio = ({target}) =>{
        setValueInput(target.value)
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
    {/* Input  */}

    <input
        type="text"
        value={valueInput}
        onChange={OnManejarCambio}
        placeholder="Escribe regalo..."
      />

    <button onClick={agregarGif} >Añadir regalo</button>

    <TotalGifts FuntotalReg={regalos.length} />
    </>
  )
}






