import axios from 'axios'
import {
        PRODUCT_DETAILS_FAIL,
        PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCESS,
        PRODUCT_LIST_FAIL,
        PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCESS
} from '../constant/productListConstant'

export const productListAction = ()=> async ( dispatch )=>{
        try {
                dispatch({type: PRODUCT_LIST_REQUEST})

                const {data} = await axios.get("/api/products")

                dispatch({type: PRODUCT_LIST_SUCESS, payload: data})

        } catch (error) {
                dispatch({type: PRODUCT_LIST_FAIL, payload:error})
        }
}

export const productDetailsAction = (id)=> async(dispatch)=>{
        try {
                dispatch({type: PRODUCT_DETAILS_REQUEST})
                const { data } = await axios.get(`/api/products/${id}`)
                dispatch({type:PRODUCT_DETAILS_SUCESS, payload: data})
        } catch (error) {
                dispatch({
                        type: PRODUCT_DETAILS_FAIL, 
                        payload: error})
        }
}
