import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Reducers/productReducer';

const store = configureStore({
    reducer: {
        products: productReducer
    }

});

export default store;