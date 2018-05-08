import React, { Component } from 'react';

class TaskInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            taskInput: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //Pass the new task to parent component and clear text input
    handleSubmit(e){
        e.preventDefault();
        
        this.props.addTask(this.state);
        this.setState({
            taskInput: ""
        });
    }

    //Maintain the input's state
    handleChange(e){
        let value = e.target.value;
        this.setState({
            taskInput: value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.taskInput} onChange={this.handleChange} type="text" name="newTask" />
                <input type="submit" value="Add To Do" />
            </form>
        )
    }
}

export default TaskInput;