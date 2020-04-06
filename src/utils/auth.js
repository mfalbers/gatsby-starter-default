const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false

  if (username === `23` && password === `23`) {
    console.log(`Credentials match! Setting the active user.`)
    return setUser({
      name: `MJ`,
      username: `jumpman23`,
      email: `jumpman23@nike.com`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  callback()
}