import * as React from 'react';
import AddProduct from './components/product/AddProduct';
import ProductList from './components/product/ProductList'
import { Typography } from '@material-ui/core';
import { ToastProvider } from 'react-toast-notifications'

const App = () => {

    return (
        <ToastProvider>
            <Typography component={'div'} >
                <h2>
                    Welcome to Product CRUD APP
            </h2>
                <AddProduct />
            </Typography>
            <ProductList />
        </ToastProvider>
    )
}
export default App;