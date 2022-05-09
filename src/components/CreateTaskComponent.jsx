import { Link } from 'react-router-dom';
import TaskService from '../services/TaskService';
import {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";

function CreateTaskComponent(props){
    const { id } = useParams();
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[goldEarned, setGoldEarned] = useState(10);
    const history = useHistory();

    const saveTask = (e) => {
        e.preventDefault();
        let task = {
            title: title, 
            description: description, 
            goldEarned: goldEarned};

        if(id == -1){
            TaskService.createTask(task).then(res =>(
                history.push("/tasks")
            ));  
        }
        else{
            TaskService.updateTask(task, id).then(res => {
                history.push("/tasks")
            });
        }    
    }

    const changeTitleHandler= (event)=>{
        setTitle(event.target.value);
    }

    const changeDescriptionHandler= (event)=>{
        setDescription(event.target.value);
    }

    const changeGoldEarnedHandler= (event)=>{
        setGoldEarned(event.target.value);
    }

    useEffect(() => {
        if(id != -1){
            TaskService.getTaskById(id).then((res) => {
                let task = res.data;
                setTitle(task.title);
                setDescription(task.description);
                setGoldEarned(task.goldEarned);
            });
        }
    }, []);
    
        
    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>{id == -1 ? 'Add' : 'Edit'} Task</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Task Title:</label>
                                <input 
                                    type="text" 
                                    placeholder='Task Title' 
                                    name='taskTitle' 
                                    className='form-control' 
                                    defaultValue={title} 
                                    onChange={changeTitleHandler}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Task Description:</label>
                                <input 
                                    type="text" 
                                    placeholder='Task Description' 
                                    name='taskDescription' 
                                    className='form-control' 
                                    defaultValue={description} 
                                    onChange={changeDescriptionHandler}
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
                                    type="text" 
                                    placeholder='Gold Earned on Completion' 
                                    name='taskGoldEarned' 
                                    className='form-control' 
                                    value={goldEarned} 
                                    onChange={changeGoldEarnedHandler}
                                />
                            </div>

                            <button className='btn btn-success' onClick={saveTask}>Save</button>
                            <Link className="btn btn-danger" to="/tasks" style={{marginLeft:"10px"}}>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    }


export default CreateTaskComponent;
