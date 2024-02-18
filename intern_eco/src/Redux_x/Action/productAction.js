import axios from "axios"
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST"
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL"


export const productsfetch = () => async (dispatch) => {
   dispatch({ type: FETCH_PRODUCTS_REQUEST })
   try {
      const prod = await axios.get('https://fakestoreapi.com/products');
      console.log("pwd", prod.products)
      return dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: prod.prooduct })
   }
   catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAIL, payload: error })
   }
}

export const FETCH_CARD_REQUEST = "FETCH_CARD_REQUEST"
export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS"
export const FETCH_CARD_FAIL = "FETCH_CARD_FAIL"


export const cartAction = (id) = async (dispatch) => {
   dispatch({ type: FETCH_CARD_REQUEST })
   try {
      const prod = (await axios.get(`https://fakestoreapi.com/products/${id}`)).data;
      console.log("pwd", prod.products)
       dispatch({ type: FETCH_CARD_SUCCESS, payload:cartItem })
   }
   catch (error) {
      return dispatch({ type: FETCH_CARD_FAIL, payload: error })
   }
}