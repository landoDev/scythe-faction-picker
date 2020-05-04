import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const POST_DATA = 'POST_DATA';
export const GET_CAMPAIGNS = 'GET_CAMPAIGNS';
export const SET_ERROR = 'SET_ERROR';
export const ADD_CAMPAIGN_SUCCESS = 'ADD_CAMPAIGN';


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
  


