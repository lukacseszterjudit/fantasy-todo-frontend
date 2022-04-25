import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateRewardComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            rewardTitle: '',
            rewardDescription: '',
            rewardPrice: 10
        }

        this.changeRewardTitleHandler = this.changeRewardTitleHandler.bind(this);
        this.changeRewardDescriptionHandler = this.changeRewardDescriptionHandler.bind(this);
        this.changeRewardPriceHandler = this.changeRewardPriceHandler.bind(this);
        this.saveReward = this.saveReward.bind(this);
    }

    saveReward = (e) => {
        e.preventDefault();
        let reward = {
            rewardTitle: this.state.rewardTitle, 
            rewardDescription: this.state.rewardDescription, 
            rewardPrice: this.state.rewardPrice
        };
        console.log('reward => ' + JSON.stringify(reward));
    }

    changeRewardTitleHandler= (event)=>{
        this.setState({rewardTitle: event.target.value})
    }

    changeRewardDescriptionHandler= (event)=>{
        this.setState({rewardDescription: event.target.value})
    }

    changeRewardPriceHandler= (event)=>{
        this.setState({rewardPrice: event.target.value})
    }

    render() {
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
                                        defaultValue={this.state.rewardTitle} 
                                        onChange={this.changeRewardTitleHandler}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Reward Description:</label>
                                    <input 
                                        type="text" 
                                        placeholder='Reward Description' 
                                        name='rewardDescription' 
                                        className='form-control' 
                                        defaultValue={this.state.rewardDescription} 
                                        onChange={this.changeRewardDescriptionHandler}
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
                                        defaultValue={this.state.rewardPrice} 
                                        onChange={this.changeRewardPriceHandler}
                                    />
                                </div>

                                <button className='btn btn-success' onClick={this.saveReward}>Save</button>
                                <Link className="btn btn-danger" to="/rewards" style={{marginLeft:"10px"}}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateRewardComponent;