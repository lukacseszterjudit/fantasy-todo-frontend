import React, { Component } from 'react';
import TaskService from '../services/TaskService';

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
                <div className="row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Task Title</th>
                                <th>Task Description</th> 
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