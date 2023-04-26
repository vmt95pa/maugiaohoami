import axios from "axios";
import { CLASSES } from "../actionTypes";
import {API_URL} from "../../common/defines"

const url = "/classes"
export const requestClasses = (data) => async (dispatch) => {
    dispatch({
        type: CLASSES.LOAD
    });
    try {
        const json = await axios.get(API_URL + url);
        console.log(json + "data");
        dispatch({
            type: CLASSES.LOAD_SUCCESS,
            classesData: json.data,
            isError: false,
        });
    } catch (e) {
        dispatch({
            type: CLASSES.LOAD_SUCCESS,
            classesData: [],
            isError: console.log("Lỗi trích xuất dữ liệu"),
        });
    }
};
