import { PRODUCT_LOADING, UPDATE_PRODUCT } from "../../constants/actionType"

export const updateProduct = (product) => dispatch => {
    dispatch({type: PRODUCT_LOADING});
    dispatch({type: UPDATE_PRODUCT, payload: product})
}