import React from "react"
//import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import "../style/sidenav.css"

export default function NavBar() {
  let mensaje = ""

  if (isLoggedIn()) {
    mensaje = `Hola ${getUser().name}!`
  } else {
    mensaje = `No estas logado`
  }

  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="#">{mensaje}</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </>
  )
}
