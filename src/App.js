import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyADuhffztDYloRfJtFSnR9uI7vzx4AkAQQ';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "jessica soho hypebeast"}, (videos)=>{
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <SearchBar/>
          <VideoDetail video={this.state.videos[0]} />
          <VideoList videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
