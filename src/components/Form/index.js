import React from "react"
// import styles from "./form.module.css"
import { navigate } from "@reach/router"
import Button from 'react-bootstrap/Button';

export default ({ handleSubmit, handleUpdate }) => (
  <form
    className="form"
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/app/profile`)
    }}
  >
    <p className="form__instructions">
      To start a game or see your coach's profile. Please log in.
    </p>
    <label className="form__label">
      Username
      <input
        className="form__input"
        type="text"
        name="username"
        onChange={handleUpdate}
      />
    </label>
    <label className="form__label">
      Password
      <input
        className="form__input"
        type="password"
        name="password"
        onChange={handleUpdate}
      />
    </label>
    {/* <input className="form__button" type="submit" value="Log In" /> */}
    <Button type="submit">Log In</Button>
  </form>
)