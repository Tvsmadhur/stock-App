const defaultState = {
  getGainerLoserResultData: "",
  getGraphDataResult: "",
  getCompanyResult: "",
  getStockMatchesResult: "",
};
const reducer = (state = defaultState, action) => {
  console.log(action, "...action");
  switch (action.type) {
    case "GAINER_LOSER_SUCCESS": {
      return {
        ...state,
        getGainerLoserResultData: action.payload,
      };
    }
    case "GAINER_LOSER_FAILURE": {
      return {
        ...state,
        getGainerLoserResultData: action.payload,
      };
    }
    case "GRAPH_DATA_SUCCESS": {
      return {
        ...state,
        getGraphDataResult: action.payload,
      };
    }
    case "GRAPH_DATA_FAILURE": {
      return {
        ...state,
        getGraphDataResult: action.payload,
      };
    }
    case "GET_COMPANYDATA_SUCCESS": {
      return {
        ...state,
        getCompanyResult: action.payload,
      };
    }
    case "GET_COMPANYDATA_FAILURE": {
      return {
        ...state,
        getCompanyResult: action.payload,
      };
    }
    case "GET_STOCKMATCHES_SUCCESS": {
      return {
        ...state,
        getStockMatchesResult: action.payload,
      };
    }
    case "GET_STOCKMATCHES_FAILURE": {
      return {
        ...state,
        getStockMatchesResult: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
