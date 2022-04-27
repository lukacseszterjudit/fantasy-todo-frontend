import axios from 'axios';

const REWARD_API_BASE_URL = "http://localhost:8080/api/v1/rewards"

class RewardService {

    getRewards(){
        return axios.get(REWARD_API_BASE_URL);
    }

    createReward(reward){
        console.log(reward);
        return axios.post(REWARD_API_BASE_URL, reward);
    }
}

export default new RewardService()