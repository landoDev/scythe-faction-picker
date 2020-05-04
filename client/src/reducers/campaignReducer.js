// Add imported ACTIONS here

const initialState = {
    isFetching: false
}

export const campaignReducer = (state = initialState, action) => {
    // console.log("ACTION DISPATCHED", action.type);
    // console.log("PAYLOAD", action.payload);
    switch (action.type) {
      case FETCH_DATA:
        return {
          ...state,
          isFetching: true
        };
      default:
        return state;
    }
  };