import React from "react"
import NavBar from "./nav-bar"

import SideNav from "../components/side-nav"

export default function Layout({ children }) {
  return (
    <>
      {children}

      <SideNav />
    </>
  )
}
