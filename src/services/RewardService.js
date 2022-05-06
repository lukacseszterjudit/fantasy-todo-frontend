import axios from 'axios';

const REWARD_API_BASE_URL = "http://localhost:8080/api/v1/rewards"

class RewardService {

    getRewards(){
        return axios.get(REWARD_API_BASE_URL);
    }

    getRewardById(rewardId){
        return axios.get(REWARD_API_BASE_URL + "/" + rewardId);
    }

    createReward(reward){
        return axios.post(REWARD_API_BASE_URL, reward);
    }

    updateReward(reward, rewardId){
        return axios.put(REWARD_API_BASE_URL + "/" + rewardId, reward);
    }

    deleteReward(rewardId){
        return axios.delete(REWARD_API_BASE_URL + "/" + rewardId);
    }
}

export default new RewardService()