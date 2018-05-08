import React, {Component} from 'react';

class TaskItem extends Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.removeTask(this.props.task);
    }

    render(){
        return(
            <div><input type="checkbox" onClick={this.handleClick}/>{this.props.task}</div>
        )
    }
}

export default TaskItem;