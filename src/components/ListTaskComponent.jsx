import React, { useState, useEffect } from 'react';
import TaskService from '../services/TaskService';
import { Link } from 'react-router-dom';

function ListTaskComponent(props) {
    const[tasks, setTasks] = useState([]);

    useEffect(() => {
        let isMounted = true;   
        TaskService.getTasks().then((res) => {
            if (isMounted) setTasks(res.data);
        });
        return () => { isMounted = false };
    }, []);

    return (
        <div>
            <h2 className='text-center'>Task List</h2>
            <Link className="btn btn-primary" to="/add-task/-1">Add Task</Link>
            <div className="row">
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Task Title</th>
                            <th>Task Description</th> 
                            <th>Reward</th> 
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
                                    <td>{task.goldEarned} gold</td>
                                    <td>
                                    <Link className="btn btn-info" to={'/add-task/' + task.id}>Edit</Link>
                                    </td>
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