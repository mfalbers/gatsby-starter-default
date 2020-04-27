import React from "react"
import { Link } from "gatsby"
import Table from "react-bootstrap/Table"
import Card from "react-bootstrap/Card"

const PlayerData = ({ stats }) => {
  return (
    // {stats.map((data) => (
      <div>
        {/* <p>{ stats.name }</p>
        <p>{ stats.team_name }</p> */}

        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="https://nba-players.herokuapp.com/players/curry/stephen" />
          <Card.Body>
            <Card.Title>{ stats.name }</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{ stats.team_name }</Card.Subtitle>
            <Card.Text>
              Some text.
            </Card.Text>
            <Link to="/app/locker-room">View Team</Link>
            {/* <Card.Link href="#">Another Link</Card.Link> */}
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Games Played</th>
                  <th>Points</th>
                  <th>Rebounds</th>
                  <th>Assists</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2017</td>
                  <td>{ stats.games_played }</td>
                  <td>{ stats.points_per_game }</td>
                  <td>{ stats.rebounds_per_game }</td>
                  <td>{ stats.assists_per_game }</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    // )}
  )
};

export default PlayerData