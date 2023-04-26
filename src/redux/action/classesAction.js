import axios from "axios";
import { CLASSES } from "../actionTypes";

export const requestClasses = (data) => async (dispatch) => {
    dispatch({
        type: CLASSES.LOAD
    });
    try {
        const json = await axios.get("http://localhost:6969/classes");
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
