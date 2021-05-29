import {
        PRODUCT_DETAILS_FAIL,
        PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCESS,
        PRODUCT_LIST_FAIL,
        PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCESS
} from '../constant/productListConstant'

//@desc: product list state update.............
export const productListReducer = (state = { products: []}, action) =>{
        switch(action.type){
                case PRODUCT_LIST_REQUEST:
                        return {loading: true, products: []}

                case PRODUCT_LIST_SUCESS:
                        return {loading: false, products: action.payload}
                
                case PRODUCT_LIST_FAIL:
                        return {loading: false, error: action.payload}
                default:
                        return {products: [], defaultValue: 0}
        }
}

//@desc: Product details state update..........
export const productDetailsReducer = (state = { product: {}}, action)=>{
        switch(action.type){
                case PRODUCT_DETAILS_REQUEST:
                        return { loading: true, product: {}}
                case PRODUCT_DETAILS_SUCESS:
                        return { loading: false, product: action.payload}
                case PRODUCT_DETAILS_FAIL:
                        return { loading: false, error: action.payload}
                default:
                        return state;
        }
}