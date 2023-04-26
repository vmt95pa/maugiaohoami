import { EVENT } from "./actionTypes";

const initalState = {
  eventData: [],
  isLoading: false,
  isError: false,
};

export default function eventReducer(state = initalState, action) {
  switch (action.type) {
    case EVENT.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case EVENT.LOAD_SUCCESS:
      return {
        ...state,
        eventData: action.eventData,
        isLoading: false,
      };
    default:
      return state;
  }

};