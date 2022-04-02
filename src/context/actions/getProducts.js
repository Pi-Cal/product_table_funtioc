import axios from "axios"
import { PRODUCT_FAIL, PRODUCT_LOADING, PRODUCT_SUCCESS } from "../../constants/actionType"
import { TEKO_API } from "../../constants/api"

const getProducts = () => dispatch => {
    dispatch({type: PRODUCT_LOADING});
    return axios.get(`${TEKO_API}/products`)
        .then(res=>{
            const temp = res.data.map(p=>({...p, color: p.color == null ? -1 : p.color}));
            dispatch({type: PRODUCT_SUCCESS, payload: temp})
            return temp
        })
        .catch(err=>{
            dispatch({type: PRODUCT_FAIL, payload: err.response ? err.response : {error: 'Get products fail, try later'}})
            throw err.response ? err.response : {error: 'Get products fail, try later'}
        })
}

export default getProducts;