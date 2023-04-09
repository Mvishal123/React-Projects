import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import {data} from './Database'
import CardList from './CardList';

class App extends Component{
  render(){
    return(
      <div className='main-container'>
        <Header/>
        <div className='cardlist-container'>
        <CardList data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
