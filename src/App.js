import React from 'react';
import './App.css';
import Controller from './TextComponent/TextComponent';
import Style from './Style/Style'

class App extends React.Component {

  state = {
    userInput:''
  }

  inputHandler(event){
    this.setState({userInput:event.target.value});
  }

  deleteHandler = (index) => {
    let text = this.state.userInput.split('');
    text.splice(index, 1);
    let updatedText = text.join('');
    this.setState({userInput:updatedText});
  }

  render(){
    let characters = this.state.userInput
    .toUpperCase()
    .split('')
    .map((ch, index)=>{
      return(
        <Style
          letter={ch}
          click={()=>this.deleteHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <p>Type anything:</p>
        <input onChange={(e)=>this.inputHandler(e)} value={this.state.userInput}/>
        <Controller textLength={this.state.userInput.length}/>
        <p>{'There are ' + this.state.userInput.length + ' characters'}</p>
        {characters}
      </div>
    );
  }
}

export default App;
