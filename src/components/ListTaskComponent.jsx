import React, { useState, useEffect } from 'react';
import TaskService from '../services/TaskService';
import { Link } from 'react-router-dom';

function ListTaskComponent(props) {
    const[tasks, setTasks] = useState([]);

    useEffect(() => {
        TaskService.getTasks().then((res) => {
            setTasks(res.data);
        });
    });

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
                            <th>Gold Earned on Completion</th> 
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tasks.map(
                                task => 
                                <tr key = {task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.goldEarned}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}

export default ListTaskComponent;