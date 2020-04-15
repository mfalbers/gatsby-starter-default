import React from "react"
import View from "../View"
import { getCurrentUser } from "../../utils/auth"
import Table from "react-bootstrap/Table"

const GymView = () => {
  const { name, username, email } = getCurrentUser()

  return (
    <View heading="Gym">
      <p>{name}'s Team</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23</td>
            <td>Michael</td>
            <td>Jordan</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>24</td>
            <td>Kobe</td>
            <td>Bryant</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <p>
        TODO pull up a yahoo team?

        pull some stats?
      </p>
    </View>
  )
}

export default GymView