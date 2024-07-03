import { useEffect, useState } from "react"

//solucion NO CAMBIA EL PROP -> HOOK useEffect
export const TotalGifts = ({FuntotalReg}) => {
  
    const [regalototal, setRegaloTotal] = useState()
    
    useEffect(()=>{//cambio de estado de nuestro prop, pasarlo a nuestro useSatate con la funcion de asignacion asi cambiará el valor 
      setRegaloTotal(FuntotalReg)
    },[FuntotalReg])// dependecnia en la cual se hara el cambio a nuestra prop, solo si esta cambia 


  return (
    <>
    <h2>Total regalos</h2>
    <p>{regalototal}</p>
    </>
  )
}






