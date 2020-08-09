import React from "react"
import { Router } from "@reach/router"
import Perfil from "../components/perfil"
import Login from "../components/login"
import Empleado from "../components/empleados"
import RutaPrivada from "../components/rutaPrivada"

export default function App() {
  return (
    <Router>
      <RutaPrivada path="/app/perfil" component={Perfil} />
      <RutaPrivada path="/app/empleados" component={Empleado} />
      <Login path="/app/login" />
    </Router>
  )
}
