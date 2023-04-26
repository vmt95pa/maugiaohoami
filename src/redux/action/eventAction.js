import axios from "axios";
import {EVENT} from "../actionTypes";

export const requestEvent = (data) => async (dispatch) => {
  dispatch({
    type: EVENT.LOAD
  });
  try {
    const json = await axios.get("http://localhost:6969/event");
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
