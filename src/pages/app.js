import React from "react"
import { Router } from "@reach/router"
import Perfil from "../components/perfil"
import Login from "../components/login"
import RutaPrivada from "../components/rutaPrivada"

export default function App() {
  return (
    <Router>
      <RutaPrivada path="/app/perfil" component={Perfil} />

      <Login path="/app/login" />
    </Router>
  )
}
