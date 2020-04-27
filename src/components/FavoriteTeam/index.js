import React from "react"
import { navigate } from "gatsby"
import { getCurrentUser, isLoggedIn } from "../../utils/auth"
import View from "../View"
import Loading from "../Loading"

// TOODO where should this go?
const { name, username, email } = getCurrentUser();

class FavoriteTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      teams: [],
      selectedTeam: ""
    };
  }

  async componentDidMount() {
    if (typeof fetch == 'undefined') return

    fetch('https://nba-players.herokuapp.com/teams')
    .then(res => res.json())
    .then(
      (data) => {
        console.dir(data)
        let teamsFromAPI = data.map(team => {
          return { value:team, display: team }
        });
        this.setState({
          isLoaded: true,
          teams: [{
            value: "",
            display: "select a team"
          }].concat(teamsFromAPI)
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
        <View heading="Test dropdown">
          <p>{name}'s Team</p>

          <div>
            <select 
              value={this.state.selectedTeam}
              onChange={e =>
                this.setState({
                  selectedTeam: e.target.value,
                  validationError:
                    e.target.value === ""
                      ? "You must select a team"
                      : ""
                })
              }
            >
              {this.state.teams.map(team => (
                <option
                  key={team.value}
                  value={team.value}
                >
                  {team.display}
                </option>
              ))}
            </select>
            <div
              style={{
                color: "red",
                marginTop: "5px"
              }}
            >
              {this.state.validationError}
            </div>
          </div>

        </View>
      );
    }
  }
}

export default FavoriteTeam