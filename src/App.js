import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_sound: 'https://cdn.discordapp.com/attachments/410799807880364035/580041796315250727/movie_1.mp3',
      player_status: 'STOPPED'
    }
  }

  handleChange = (e) => {
    this.setState({
      current_sound: e.target.value,
    })
  }

  getSounds = () => {
    let sounds = [
      {
        value: 'https://cdn.discordapp.com/attachments/410799807880364035/580041796315250727/movie_1.mp3',
        name: 'bruh.mp3'
      },
      {
        value: 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
        name: '1.mp3'
      }
    ];

    let arr = []
    for (let i = 0; i < sounds.length; i++) {
      arr.push(<option value={`${sounds[i].value}`}>{`${sounds[i].name}`}</option>)
    }

    return arr
  }

  playSound = () => {
    this.setState({player_status: 'PLAYING'})
  }

  stopSound = () => {
    this.setState({player_status: 'STOPPED'})
  }

  render() {
    return (
      <div className="App">
        <div>
          <select onChange={this.handleChange} value={this.state.current_sound}>
            {this.getSounds()}
          </select>
        <Sound
          url={this.state.current_sound}
          playStatus={this.state.player_status}
          onFinishedPlaying={this.stopSound}
        />
        </div>
        <button onClick={this.playSound}>Play sound</button>
      </div>
    )
  }
}

export default App;
