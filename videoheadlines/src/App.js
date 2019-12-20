import React from 'react';
import logo from './logo.svg';
import mainjs from './main.js';
import endpoint from '//s3.amazonaws.com/frankly-news-web/test/playlist.js';

import './App.css';
import './init.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div id="wrapper">
            <video id="videoclip" controls></video>
            <div id="vidTitle"></div>
            <div id="thumbContainer"></div>
        </div>
        <script src={endpoint}></script>
        <script src={mainjs}></script>
        // <p>
        //   Edit <code>src/App.js</code> and save to reload.
        // </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
