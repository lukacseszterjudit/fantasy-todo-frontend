import React, { useState, useEffect } from 'react';
import RewardService from '../services/RewardService';
import { Link } from 'react-router-dom';

function ListRewardComponent(props) {
    const[rewards, setRewards] = useState([]);

    useEffect(() => {
        let isMounted = true;   
        RewardService.getRewards().then((res) => {
            if (isMounted) setRewards(res.data);
        });
        return () => { isMounted = false };
    }, []);

    return (
        <div>
            <h2 className='text-center'>Reward Shop</h2>
            <Link className="btn btn-primary" to="/add-reward/-1">Add Reward</Link>
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
                                    <td>{reward.price} gold</td>
                                    <td>
                                    <Link className="btn btn-info" to={'/add-reward/' + reward.id}>Edit</Link>
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


export default ListRewardComponent;