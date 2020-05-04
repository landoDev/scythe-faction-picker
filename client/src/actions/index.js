import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const GET_CAMPAIGNS = 'GET_CAMPAIGNS';
export const SET_ERROR = 'SET_ERROR';


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
}

