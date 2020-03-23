import axios from "axios";
import networkdata from "../json/Network.json";

import {
  FETCH_NETWORK_DATA,
  FETCH_NETWORK_DATA_SUCCESS,
  FETCH_NETWORK_DATA_FAIL
} from "../constants/actiontypes";

export const fetchNetworkData = () => {
  return dispatch => {
    networkDataFetchInitiated(dispatch);

    return axios({
      method: "get",
      //url: "http://HIC012452:5001/trustflow/platform/network/list",
      url: "https://www.reddit.com/r/reactjs.json",
      headers: { "content-type": "application/x-www-form-urlencoded" }
    })
      .then(response => {
        console.log("success response", response);
        networkDataFetchSuccess(dispatch, networkdata);
        /* Use the below code for api data
        networkDataFetchSuccess(dispatch, response); */
      })
      .catch(response => {
        console.log("failure response", response);
        networkDataFetchFailed(dispatch, response);
      });
  };
};
const networkDataFetchInitiated = dispatch => {
  dispatch({
    type: FETCH_NETWORK_DATA
  });
};

const networkDataFetchSuccess = (dispatch, response) => {
  dispatch({
    type: FETCH_NETWORK_DATA_SUCCESS,
    payload: response
  });
};

const networkDataFetchFailed = (dispatch, response) => {
  dispatch({
    type: FETCH_NETWORK_DATA_FAIL,
    payload: response.message
  });
};
