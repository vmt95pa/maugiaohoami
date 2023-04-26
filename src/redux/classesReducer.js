import { CLASSES } from "./actionTypes";

const initalState = {
    classesData: [],
    isLoading: false,
    isError: false,
};

export default function classesReducer(state = initalState, action){
    switch (action.type) {
        case CLASSES.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case CLASSES.LOAD_SUCCESS:
            return {
                ...state,
                classesData: action.classesData,
                isLoading: false,
            }
        default:
            return state;
    }

};
