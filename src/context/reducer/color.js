import { COLOR_FAIL, COLOR_LOADING, COLOR_SUCCESS } from "../../constants/actionType";

export const color = (state, {type, payload}) => {
    switch(type) {
        case COLOR_LOADING: 
            return {
                ...state,
                loading: true
            }
        case COLOR_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: [...payload]
            }
        }
        case COLOR_FAIL: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }
        default:
            return state;
    }
}