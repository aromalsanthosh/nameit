import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import './App.css';
import Footer from '../Footer/Footer';
const name = require('@rstacruz/startup-name-generator');



class App extends React.Component{
  state = {
    headerText:'Name It!',
    headerExpanded:true,
    suggestedNames:[]
  }

  handleInputChange = (inputText)=>{
    
    this.setState({
      headerExpanded: !inputText,
      suggestedNames:name(inputText),
    });
  }

  render(){
    return(
      <div>
        <Header 
          headerExpanded={this.state.headerExpanded} 
          headTitle={this.state.headerText} 
        />
        <SearchBox onInputChange={this.handleInputChange}/>
        <ResultsContainer suggestedNames={this.state.suggestedNames}/>
        <Footer/>
      </div>
    )
  }
}


export default App;
