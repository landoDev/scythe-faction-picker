// Add imported ACTIONS here

import { 
    FETCH_DATA,
    GET_CAMPAIGNS,
    SET_ERROR
} from '../actions/index'

const initialState = {
    campaigns: [],
    isFetching: false,
    error: ''
}

export const campaignReducer = (state = initialState, action) => {
    // console.log("ACTION DISPATCHED", action.type);
    // console.log("PAYLOAD", action.payload);
    switch (action.type) {
    case SET_ERROR:
        return {
            ...state,
            error: action.payload
        };
      case FETCH_DATA:
        return {
          ...state,
          isFetching: true
        };
        case GET_CAMPAIGNS:
            return {
                ...state,
                campaigns: action.payload,
                isFetching: false
            }
      default:
        return state;
    }
  };