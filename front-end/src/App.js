import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Widget from './Components/Widget';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
