import React from 'react';
import axios from 'axios';
import './App.css'

class App extends React.Component{
   state = {
      advice: ""
   };

   componentDidMount() {
    this.fitchAdvice()
   }

   fitchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      this.setState({advice: response.data.slip.advice})
      })
      .catch(data => {
        console.log(data);
      })

   }



  render(){
    return (
      <div className="App">
         <div className='card'>
          <h1 className="Quote-text">
            {this.state.advice}
          </h1>
          <button className='btn' onClick={this.fitchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
          </div>
      </div>
      )
  }
           
}

export default App;
