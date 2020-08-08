import React from "react"
import { getUser } from "../services/auth"

import Charts from "../graficas/chart"
import Pie from "../graficas/pie"
import Barra from "../graficas/barra"
import Dona from "../graficas/dona"
import TwoChart from "../graficas/twoChart"

import "../style/graficas.css"

export default function Perfil() {
  return (
    <>
      <h1>Tu perfil</h1>
      <ul>
        <li>Nombre: {getUser().name}</li>
        <li>Email: {getUser().email}</li>
      </ul>

      <Barra />

      <br></br>
      <Charts />
      <Pie />
      <Dona />
      <TwoChart />
    </>
  )
}
