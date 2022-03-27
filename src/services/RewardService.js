import axios from 'axios';

const REWARD_API_BASE_URL = "http://localhost:8080/api/v1/rewards"

class RewardService {

    getRewards(){
        return axios.get(REWARD_API_BASE_URL);
    }
}

export default new RewardService()