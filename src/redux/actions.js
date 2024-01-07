import { store } from "./store";
export const getTopGainerLoserSuccess = (data) => {
  store.dispatch({ type: "GAINER_LOSER_SUCCESS", payload: data });
};

export const getTopGainerLoserFailure = (data) => {
  store.dispatch({ type: "GAINER_LOSER_LOSER", payload: data });
};
export const getGraphDataSuccess=(data)=>{
  store.dispatch({ type: "GRAPH_DATA_SUCCESS", payload: data });
}
export const getGraphDataFailure=(data)=>{
  store.dispatch({ type: "GRAPH_DATA_FAILURE", payload: data });
}
export const getCompanyDataSucces=(data)=>
{
  store.dispatch({type: "GET_COMPANYDATA_SUCCESS", payload: data})
}
export const getCompanyDataFailure=(data)=>
{
  store.dispatch({type: "GET_COMPANYDATA_FAILURE", payload: data})
}
export const getStockMatchesSuccess=(data)=>
{
  store.dispatch({type: "GET_STOCKMATCHES_SUCCESS", payload: data})
}
export const getStockMatchesFailure=(data)=>{
  store.dispatch({type: "GET_STOCKMATCHES_FAILURE", payload: data})
}