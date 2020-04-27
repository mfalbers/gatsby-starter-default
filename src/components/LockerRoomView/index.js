import React from "react"
import { Link, navigate } from "gatsby"
import { getCurrentUser, isLoggedIn } from "../../utils/auth"
import Loading from "../Loading"
import View from "../View"
import Table from "react-bootstrap/Table"

// TOODO where should this go?
const { name, username, email } = getCurrentUser();
var parseFullName = require('parse-full-name').parseFullName;

class LockerRoomView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      players: []
    };
  }

  async componentDidMount() {
    if (typeof fetch == 'undefined') return
// https://nba-players.herokuapp.com/players-stats/curry/stephen
// https://nba-players.herokuapp.com/players-stats-teams/gsw'
    fetch('https://nba-players.herokuapp.com/players-stats-teams/gsw')
      .then(res => res.json())
      .then(
        (response) => {
          console.dir(response)
          this.setState({
            isLoaded: true,
            players: response
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentWillUnmount() {
    // clean up any async calls still in progress
    console.log('clean up async requests');
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    if (!isLoggedIn()) {
      navigate(`/app/login`)
    }

    const { error, isLoaded, players, teams } = this.state;
    if (error) {
      return <div>Error: { error.message }</div>;
    } else if (!isLoaded) {
      return (<Loading />)
    } else {
      return (
        <View heading="Locker Room">
          <p>{name}'s Team</p>
          {/* <FavoriteTeam /> */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Games Played</th>
                <th>Points</th>
                <th>Rebounds</th>
                <th>Assists</th>
              </tr>
            </thead>
            <tbody>
              {players.map(player => (
                <tr key={ player.name }>
                  <td><Link to="/app/player">{ 
                  
                  parseFullName(player.name).first + ' ' + parseFullName(player.name).last 
                  
                  }</Link></td>
                  <td>{ player.games_played }</td>
                  <td>{ player.points_per_game }</td>
                  <td>{ player.rebounds_per_game }</td>
                  <td>{ player.assists_per_game }</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </View>
      );
    }
  }
}

export default LockerRoomView