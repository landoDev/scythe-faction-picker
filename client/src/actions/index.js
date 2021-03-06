import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const POST_DATA = 'POST_DATA';
export const GET_CAMPAIGNS = 'GET_CAMPAIGNS';
export const GET_CAMPAIGN_BY_ID = 'GET_CAMPAIGN_BY_ID';
export const SET_ERROR = 'SET_ERROR';
export const ADD_CAMPAIGN_SUCCESS = 'ADD_CAMPAIGN';
export const ADD_PLAYER_SUCCESS = 'ADD_PLAYER_SUCCESS';


export const getCampaignsAll = () => dispatch =>{
  dispatch({type: FETCH_DATA});
  axios.get('https://scythe-campaigns.herokuapp.com/api/campaigns')
  .then(res=>{
    dispatch({type: GET_CAMPAIGNS, payload: res.data})
  })
  .catch(err=>{
    console.log(err)
    dispatch({type: SET_ERROR, payload: 'Error getting campaigns'})
  })
};

export const createCampaign = (payload) => dispatch =>{
    console.log('just before post')
    dispatch({type: POST_DATA});
    axios.post('https://scythe-campaigns.herokuapp.com/api/campaigns', payload)
    .then(res=>{
        console.log('response in create dispatch', res)
      dispatch({type: ADD_CAMPAIGN_SUCCESS, payload: res.data})
    })
    .catch(err=>{
      console.log(err)
      dispatch({type: SET_ERROR, payload: 'Error adding campaigns'})
    })
  };

  export const getCampaignById = (id) => dispatch => {
    dispatch({type: FETCH_DATA});
    axios.get(`https://scythe-campaigns.herokuapp.com/api/campaigns/${id}`)
    .then(res=>{
      dispatch({type: GET_CAMPAIGN_BY_ID, payload: res.data})
    })
    .catch(err=>{
      console.log(err)
      dispatch({type: SET_ERROR, payload: 'Error getting campaign'})
    })
  }

  export const addPlayerCampaign = (id, payload) => dispatch =>{
    console.log('just before post')
    dispatch({type: POST_DATA});
    axios.post(`https://scythe-campaigns.herokuapp.com/api/campaigns/${id}`, payload)
    .then(res=>{
        console.log('response in create dispatch', res)
      dispatch({type: ADD_PLAYER_SUCCESS, payload: res.data})
    })
    .catch(err=>{
      console.log(err)
      dispatch({type: SET_ERROR, payload: 'Error adding player'})
    })
  };

// add players function will have to take an id to dynamically assign it and post the player to that id in the BE. Find the campaign by it's id, then grab that id and plug it into the axios post with the new player created. 🤞🏾
  


