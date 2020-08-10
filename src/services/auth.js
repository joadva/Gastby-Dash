export function isBrowser() {
  return typeof window !== "undefined"
}

export function getUser() {
  return isBrowser() && window.localStorage.getItem("usuario")
    ? JSON.parse(window.localStorage.getItem("usuario"))
    : {}
}

export function setUser(user) {
  window.localStorage.setItem("usuario", JSON.stringify(user))
}

export function handleLogin({ username, password }) {
  if (username === "admin" && password === "123") {
    return setUser({
      username: `Joadva`,
      name: `Jorge Guise`,
      email: `hola@jempresa.com`,
    })
  }

  return false
}

export function isLoggedIn() {
  const user = getUser()

  return !!user.username
}

export function logout(callback) {
  setUser({})
  callback()
}
