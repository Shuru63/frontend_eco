import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../Action/productAction"

const initialProductState={
    products:[],
    error:"",
    success:"",
    loading:"",
}

 const productReducer=(state=initialProductState,action) =>{
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST :
            return{...state , _loading:true}

        case FETCH_PRODUCTS_SUCCESS :
            localStorage.getItem(products)
            return{...state,product:action.payload,loading:false,success:"prodct fetch successfully"}

        case FETCH_PRODUCTS_FAIL :
                return{...state,error:action.payload,_loading:false,}

        default:
            return state
    }
}
export default productReducer;