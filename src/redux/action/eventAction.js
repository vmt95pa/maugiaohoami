import axios from "axios";
import {EVENT} from "../actionTypes";
import {API_URL} from "../../common/defines"

const url = "/event"
export const requestEvent = (data) => async (dispatch) => {
  dispatch({
    type: EVENT.LOAD
  });
  try {
    const json = await axios.get(API_URL + url);
    console.log(json + "data");
    dispatch({
      type: EVENT.LOAD_SUCCESS,
      eventData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: EVENT.LOAD_FAIL,
      eventData: [],
      isError: true,
    });
  }
};
