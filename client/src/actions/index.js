import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA'


export const getCampaignsAll = () => dispatch =>{
  dispatch({type: FETCH_DATA});
  axios.get('http://localhost:3333/smurfs')
  .then(res=>{
    dispatch({type: GET_SMURFS, payload: res.data})
  })
  .catch(err=>{
    console.log(err)
    dispatch({type: SET_ERROR, payload: 'Gargamel has, at long last, turned the smurfs into gold'})
  })
}

