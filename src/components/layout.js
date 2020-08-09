import React from "react"
import NavBar from "./nav-bar"

//import Nose from "../components/nose2"

//import Login from "./login"

//import SideNav from "../components/side-nav"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />

      {children}
    </>
  )
}
