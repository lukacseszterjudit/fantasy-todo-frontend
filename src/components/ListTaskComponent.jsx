import React, { Component } from 'react';
import TaskService from '../services/TaskService';
import { Link } from 'react-router-dom';

class ListTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
        TaskService.getTasks().then((res) => {
            this.setState({tasks: res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Task List</h2>
                <Link className="btn btn-primary" to="/add-task">Add Task</Link>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Task Title</th>
                                <th>Task Description</th> 
                                <th>Gold on Completion</th> 
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.tasks.map(
                                    task => 
                                    <tr key = {task.id}>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td>{task.goldOnCompletion}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTaskComponent;