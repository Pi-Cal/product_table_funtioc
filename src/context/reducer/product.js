import { PRODUCT_FAIL, PRODUCT_LOADING, PRODUCT_SUCCESS, UPDATE_PRODUCT } from "../../constants/actionType";

export const product = (state, {type, payload}) => {
    switch(type) {
        case PRODUCT_LOADING: 
            return {
                ...state,
                loading: true
            }
        case PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: [...payload.map(p=>({...p, error:null}))]
            }
        }
        case PRODUCT_FAIL: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }
        case UPDATE_PRODUCT: {
            const temp = [...state.data];
            const index = temp.findIndex((p) => {return p.id == payload.id});
            temp[index] = {...payload}

            const temp1 = [...state.tempData];
            const index1 = temp1.findIndex(p =>p.id == payload.id);
            if(index1 >= 0) temp1[index1] = {...payload}
            else temp1.push({...payload})
            
            return {
                ...state,
                data: [...temp],
                tempData: [...temp1],
                loading: false,
            }
        }
        default:
            return state;
    }
}