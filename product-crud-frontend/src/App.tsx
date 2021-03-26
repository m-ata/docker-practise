import * as React from 'react';
import AddProduct from './components/AddProduct';
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
        </ToastProvider>
    )
}
export default App;