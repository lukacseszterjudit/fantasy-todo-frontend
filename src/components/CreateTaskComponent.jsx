import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateTaskComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            taskTitle: '',
            taskDescription: '',
            taskGoldEarned: 10
        }

        this.changeTaskTitleHandler = this.changeTaskTitleHandler.bind(this);
        this.changeTaskDescriptionHandler = this.changeTaskDescriptionHandler.bind(this);
        this.changeTaskGoldEarnedHandler = this.changeTaskGoldEarnedHandler.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    saveTask = (e) => {
        e.preventDefault();
        let task = {taskTitle: this.state.taskTitle, taskDescription: this.state.taskDescription, taskGoldEarned: this.state.taskGoldEarned};
        console.log('task => ' + JSON.stringify(task));
    }

    changeTaskTitleHandler= (event)=>{
        this.setState({taskTitle: event.target.value})
    }

    changeTaskDescriptionHandler= (event)=>{
        this.setState({taskDescription: event.target.value})
    }

    changeTaskGoldEarnedHandler= (event)=>{
        this.setState({taskGoldEarned: event.target.value})
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Add Task</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Task Title:</label>
                                    <input 
                                        type="text" 
                                        placeholder='Task Title' 
                                        name='taskTitle' 
                                        className='form-control' 
                                        defaultValue={this.state.taskTitle} 
                                        onChange={this.changeTaskTitleHandler}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Task Description:</label>
                                    <input 
                                        type="text" 
                                        placeholder='Task Description' 
                                        name='taskDescription' 
                                        className='form-control' 
                                        defaultValue={this.state.taskDescription} 
                                        onChange={this.changeTaskDescriptionHandler}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Golds Earned on Completion:</label>
                                    <input 
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            }
                                        }}
                                        type="number" 
                                        placeholder='Gold Earned on Completion' 
                                        name='taskGoldEarned' 
                                        className='form-control' 
                                        defaultValue={this.state.taskGoldEarned} 
                                        onChange={this.changeTaskGoldEarnedHandler}
                                    />
                                </div>

                                <button className='btn btn-success' onClick={this.saveTask}>Save</button>
                                <Link className="btn btn-danger" to="/tasks" style={{marginLeft:"10px"}}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTaskComponent;