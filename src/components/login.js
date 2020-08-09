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
        <h2>Login</h2>

        <form
          method="post"
          onSubmit={event => {
            handleSubmit(event)
            navigate(`app/perfil`)
          }}
        >
          <div className="user-box">
            <input
              type="text"
              name="username"
              onChange={e => setUsername(e.target.value)}
            />
            <label>User </label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <input className="boton" type="submit" value="Login" />
        </form>
      </div>
    </>
  )
}
