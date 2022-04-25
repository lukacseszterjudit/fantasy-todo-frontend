import React, { Component } from 'react';
import RewardService from '../services/RewardService';
import { Link } from 'react-router-dom';

class ListRewardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rewards: []
        }
    }

    componentDidMount(){
        RewardService.getRewards().then((res) => {
            this.setState({rewards: res.data})
        });
    }

    render() {
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
                                this.state.rewards.map(
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
}

export default ListRewardComponent;