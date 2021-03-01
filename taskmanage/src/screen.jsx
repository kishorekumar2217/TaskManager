import React from 'react';
import axios from 'axios';

import Fab from '@material-ui/core/Fab';
 import AddIcon from '@material-ui/icons/Add';



 class Screen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
 text:'',
   
       
        showText:false,
     
      
    }

  
  
  
    
  }
 
  handleInput =(e)=>{
    this.setState({
   
        text: e.target.value,
    
    })
  }

  componentDidMount() {
    axios.get("http://localhost:8080/taskcon/findAllTask")
      .then((res) => {
        console.log("data are ",res);

        this.setState({
         task: res.data,
         text:'',
          
        })
      })
  }

  add() {
    
   this.setState({
    showText:false,
    text:'',
   })
    if(this.state.text!=""){
      axios.post("http://localhost:8080/taskcon/addTask", {
        task: this.state.text,
    
      }).then((result) => {
        console.log(result, "gfhjkdfhjksdfhk")
        if (result.status =='200') {
          alert('Saved Successfully')
          this.props.onChange();
        }
        else {
          alert('Save failed!!!')
        }
        this.componentDidMount();
      })
    }
    else{
      alert("No Data")
    }
    }
  


    
    operation = () =>{
this.setState({
  showText:true

})

    }
 render(){
  return (
    <div >
      <header>
<div >
<Fab className="add" color="primary" aria-label="add" onClick={()=>this.operation()}>
        <AddIcon /> 

</Fab>
<h3 className="buttondtext">Add a task </h3>
</div>
{
  this.state. showText?
  <div>
      
        <form id="to-do-form" >
          <input type="text" placeholder="Enter task" value= {this.state.text} 
          onChange={this.handleInput}></input>
          <button onClick={(e) => this.add()} >Add</button>
        </form>
       
        </div>
        :null
}


 
      </header>
    </div>
  );
 }
}


export default Screen;