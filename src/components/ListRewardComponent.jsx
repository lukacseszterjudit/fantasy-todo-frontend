import React, { useState, useEffect } from 'react';
import RewardService from '../services/RewardService';
import { Link } from 'react-router-dom';

function ListRewardComponent(props) {
    const[rewards, setRewards] = useState([]);

    useEffect(() => {
        RewardService.getRewards().then((res) => {
            setRewards(res.data);
        });
    });

    return (
        <div>
            <h2 className='text-center'>Reward List</h2>
            <Link className="btn btn-primary" to="/add-reward">Add Reward</Link>
            <div className="row">
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Reward Title</th>
                            <th>Reward Description</th> 
                            <th>Reward Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            rewards.map(
                                reward => 
                                <tr key = {reward.id}>
                                    <td>{reward.title}</td>
                                    <td>{reward.description}</td>
                                    <td>{reward.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
    }


export default ListRewardComponent;