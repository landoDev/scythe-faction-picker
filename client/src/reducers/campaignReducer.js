// Add imported ACTIONS here

import { 
    FETCH_DATA,
    POST_DATA,
    SET_ERROR,
    GET_CAMPAIGNS,
    ADD_CAMPAIGN_SUCCESS,
    ADD_PLAYER_SUCCESS
    
} from '../actions/index'

const initialState = {
    noPlayers: true, // state for quick form but can go elsewhere
    factions: [
        'Republic of Polania',
        'Saxony Empire', 
        'Crimean Khanate',
        'Nordic Kingdoms',
        'Rusviet Union',
        'Clan Albion',
        'Togawa Shogunate'
    ],
    playerMats: [
        'Engineering (2)',
        'Patriotic (3)',
        'Industrial (1)',
        'Agricultural (5)',
        'Innovative (3A)',
        'Militant (2A)',
        'Mechanical (4)'
    ],
    campaigns: [],
    isFetching: false,
    isPosting: false,
    error: '',
    readyToMount: false
}

export const campaignReducer = (state = initialState, action) => {
    console.log("ACTION DISPATCHED", action.type);
    console.log("PAYLOAD", action.payload);
    switch (action.type) {
    case SET_ERROR:
        return {
            ...state,
            error: action.payload,
            isFetching: false,
            isPosting: false
        };
    case FETCH_DATA:
    return {
        ...state,
        isFetching: true
    };
    case POST_DATA:
        return {
            ...state,
            isPosting: true,
        };
    case GET_CAMPAIGNS:
        return {
            ...state,
            campaigns: action.payload,
            isFetching: false
        }
    case ADD_CAMPAIGN_SUCCESS:
    return {
        ...state,
        campaigns: [...state.campaigns, action.payload], // keep an eye on this, I think if I just make another get it will be fine. May double entries?
        isPosting: false
    }
    case ADD_PLAYER_SUCCESS:
    return {
        ...state,
        isPosting: false
    }
    default:
    return state;
    }
  };