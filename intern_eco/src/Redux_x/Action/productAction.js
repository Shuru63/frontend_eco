export const FETCH_PRODUCTS_REQUEST="FETCH_PRODUCTS_REQUEST"
export const FETCH_PRODUCTS_SUCCESS="FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAIL="FETCH_PRODUCTS_FAIL"


export const productsfetch = (dispatch) = async() =>{
     dispatch({type : FETCH_PRODUCTS_REQUEST} )
     try{
        const prod =await axios.get('https://fakestoreapi.com/products');
        dispatch({type : FETCH_PRODUCTS_REQUEST,payload:prod.prooduct} )
     }
     catch(error){
        dispatch({type : FETCH_PRODUCTS_FAIL,payload:error} )
     }
}