import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Compewter Lab</h2>
          <a href="https://github.com/compewter"><img className="social-img" src="/assets/images/GitHub-Mark-Light-32px.png" /></a>
          <a href="https://twitter.com/thecompewterlab"><img className="social-img" width="32px" src="/assets/images/Twitter_Logo_WhiteOnImage.png" /></a>
        </div>
        <p className="App-intro">
          <code>Coming Soon...</code>
        </p>
      </div>
    );
  }
}

export default App;
