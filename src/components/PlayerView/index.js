import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../utils/auth"
import Loading from "../Loading"
import View from "../View"
import PlayerData from "../PlayerData"

class PlayerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stats: []
    };
  }

  async componentDidMount() {
    if (typeof fetch == 'undefined') return
// https://nba-players.herokuapp.com/players-stats/curry/stephen
// https://nba-players.herokuapp.com/players-stats-teams/gsw'
    fetch('https://nba-players.herokuapp.com/players-stats/curry/stephen')
      .then(res => res.json())
      .then(
        (response) => {
          console.dir(response)
          this.setState({
            isLoaded: true,
            stats: response
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

    const { error, isLoaded, stats } = this.state;
    if (error) {
      return <div>Error: { error.message }</div>;
    } else if (!isLoaded) {
      return (<Loading />)
    } else {
      return (
        <View heading="Player Data">
          <PlayerData stats={ stats } />
        </View>
      );
    }
  }
}

export default PlayerView