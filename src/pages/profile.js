import React from "react"
// import { getCurrentUser } from "../utils/auth"

export default class ProfileView extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
  }

  // const { name, username, email } = getCurrentUser()

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name} (${this.state.username})!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Preferred Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    // <View heading="Head Coach's Office">
    //   <p>Welcome back Coach {name}!</p>
    //   <p>Here's the current info we have for your profile.</p>
    //   <ul>
    //     <li>Preferred Name: <code>{name}</code></li>
    //     <li>Username: <code>{username}</code></li>
    //     <li>Email address: <code>{email}</code></li>
    //   </ul>
    // </View>
    )
  }
}

// export default ProfileView