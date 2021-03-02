import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class List extends Component {
  
     state = {

            text: '',
            showText: false,
            task: [],
            status: '',
        }
    

    componentDidMount() {
        this.fetchTask();
    }


    add() {


        if (this.state.text !== "") {
            axios.post("http://localhost:8080/taskcon/addTask", {
                task: this.state.text,

            }).then((result) => {
                this.componentDidMount();

                console.log(result, "gfhjkdfhjksdfhk")
                if (result.status === 200 && result.data !== "") {
                    alert('Saved Successfully')
                }
                else {
                    alert('Save failed!!!')
                }
            })
        }

        else {
            alert("No Data")
        }

    }

    fetchTask = () => {
        axios.get("http://localhost:8080/taskcon/findAllTask")
            .then((res) => {

                console.log(res.data, "result")
                this.setState({
                    task: res.data,
                })
            })


    }
    CheckboxChange = (item) => {
        axios.get("http://localhost:8080/taskcon/taskStatus/" + item.id)
            .then((res) => {
                this.fetchTask();

            })

    }


    render() {
        return (
            <div>
                <div>

                    <div >
                        <header>
                            <div >
                                <Fab className="add" color="secondary" aria-label="add"
                                    onClick={() => this.setState({ showText: !this.state.showText })}>
                                    <AddIcon />

                                </Fab>
                                <h3 className="buttondtext">Add a task </h3>
                            </div>
                            {
                                this.state.showText ?
                                    <div>

                                        <form id="to-do-form" >
                                            <input type="text" placeholder="Enter task"
                                                onChange={(e) => { this.setState({ text: e.target.value, }) }}></input>
                                            <button onClick={(e) => this.add()}
                                                onChange={() => { this.setState({ showText: !this.state.showText }) }} >Add</button>
                                        </form>

                                    </div>
                                    : null
                            }



                        </header>
                    </div>

                </div>




                <div>
                    {
                        this.state.task.map((item) => {
                            return (
                                <div>
                                    <div>
                                        <input type="checkbox"

                                            style={{ margin: '20px', boxSizing: "10px" }}
                                            checked={item.status === 'complete' ? true : false}
                                            onChange={() => { this.CheckboxChange(item) }}
                                        />

                                        <span style={(item.status === 'complete') ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} className="listText"

                                        >{item.task}    </span>

                                        <hr style={{ marginLeft: "10%" }} />

                                    </div>


                                </div>
                            )
                        })


                    }
                </div >
            </div>

        )
    }
}



export default List;
