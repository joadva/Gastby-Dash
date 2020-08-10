import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

import "../style/login.css"
import logo from "../img/logo.png"

export default function Login() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()
    handleLogin({ username, password })
  }

  if (isLoggedIn()) {
    navigate(`/app/perfil`)
  } else {
    navigate(`/app/login`)
  }

  return (
    <>
      <div className="login-box">
        <img src={logo} width="300px" height="medium" alt="logo"></img>
        <h2>Sign in</h2>

        <form
          method="post"
          onSubmit={event => {
            handleSubmit(event)
            navigate(`app/perfil`)
          }}
        >
          <div className="user-box">
            <h4>User </h4>
            <input
              type="text"
              name="username"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="user-box">
            <h4>Password</h4>
            <input
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <input className="boton" type="submit" value="Log in" />
        </form>
      </div>
    </>
  )
}
