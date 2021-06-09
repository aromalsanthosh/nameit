import React from 'react';
import Header from '../Header/Header';
import './App.css';



class App extends React.Component{
  state = {
    headerText:'Hello User'
  }

  render(){
    return(
      <div>
        <Header/>
        <h3>{this.state.headerText}</h3>
        <button 
        onClick={()=> {
          this.setState({headerText:"Wow"})
          console.log(this.state.headerText);
        }}>Magic HAppens Here!</button>
      </div>
    )
  }
}

export default App;
