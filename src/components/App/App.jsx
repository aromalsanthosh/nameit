import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';



class App extends React.Component{
  state = {
    headerText:'Name It!',
    headerExpanded:true
  }

  handleInputChange = (inputText)=>{
    this.setState({headerExpanded: !inputText});
  }

  render(){
    return(
      <div>
        <Header 
          headerExpanded={this.state.headerExpanded} 
          headTitle={this.state.headerText} 
        />
        <SearchBox onInputChange={this.handleInputChange}/>
      </div>
    )
  }
}

export default App;
