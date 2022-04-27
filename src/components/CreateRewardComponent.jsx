import { Link } from 'react-router-dom';
import RewardService from '../services/RewardService';
import {useState} from 'react';
import { useHistory } from "react-router-dom";

function CreateRewardComponent(props) {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState(10);
    const history = useHistory();

    const saveReward = (e) => {
        e.preventDefault();
        let reward = {
            title: title, 
            description: description, 
            price: price
        };
        RewardService.createReward(reward).then(res =>(
            history.push("/rewards")
        ));  
    }

    const changeTitleHandler= (event)=>{
        setTitle(event.target.value);
    }

    const changeDescriptionHandler= (event)=>{
        setDescription(event.target.value);
    }

    const changePriceHandler= (event)=>{
        setPrice(event.target.value);

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Reward</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Reward Title:</label>
                                <input 
                                    type="text" 
                                    placeholder='Reward Title' 
                                    name='rewardTitle' 
                                    className='form-control' 
                                    defaultValue={title} 
                                    onChange={changeTitleHandler}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Reward Description:</label>
                                <input 
                                    type="text" 
                                    placeholder='Reward Description' 
                                    name='rewardDescription' 
                                    className='form-control' 
                                    defaultValue={description} 
                                    onChange={changeDescriptionHandler}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Reward Price:</label>
                                <input 
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                        }
                                    }}
                                    type="number" 
                                    placeholder="Reward Price" 
                                    name='rewardPrice' 
                                    className='form-control' 
                                    defaultValue={price} 
                                    onChange={changePriceHandler}
                                />
                            </div>

                            <button className='btn btn-success' onClick={saveReward}>Save</button>
                            <Link className="btn btn-danger" to="/rewards" style={{marginLeft:"10px"}}>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    }


export default CreateRewardComponent;