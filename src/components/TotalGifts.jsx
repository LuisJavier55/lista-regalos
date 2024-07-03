import { useState } from "react"


export const TotalGifts = ({FuntotalReg}) => {
    const [regalototal, setRegaloTotal] = useState(FuntotalReg)
  return (
    <>
    <h2>Total regalos</h2>
    <p>{regalototal}</p>
    </>
  )
}






