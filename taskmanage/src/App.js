import React from 'react';

import './App.css';


import List from './list';
// import Screen from './screen';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
  text:'',

   
       
        showText:false,
      todoChange:false,
      
    }

  
  
  
    
  }
 
  


    
 render(){
  return (
    <div className="App">
  

{/* <Screen onChange={()=>{this.setState({todoChange:!this.state.todoChange})}}/> */}
{/* todoChange={this.state.todoChange} */}
   <List/>
        
   
    </div>
  );
 }
}


export default App;