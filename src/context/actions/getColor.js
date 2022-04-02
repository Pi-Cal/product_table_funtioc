import axios from "axios"
import { COLOR_FAIL, COLOR_LOADING, COLOR_SUCCESS } from "../../constants/actionType"
import { TEKO_API } from "../../constants/api"

const getColor = () => dispatch => {
    dispatch({type: COLOR_LOADING});
    return axios.get(`${TEKO_API}/colors`)
        .then(res=>{
            dispatch({type: COLOR_SUCCESS, payload: res.data})
            return res.data
        })
        .catch(err=>{
            dispatch({type: COLOR_FAIL, payload: err.response ? err.response : {error: 'Get colors fail, try later'}})
            throw err.response ? err.response : {error: 'Get colors fail, try later'}
        })
}

export default getColor;