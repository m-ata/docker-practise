import * as React from 'react';
import AddProduct from './components/AddProduct';
import { Typography } from '@material-ui/core';

const App = () => {

    return (
        <Typography component={'div'} >
            <h2>
                Welcome to Product CRUD APP
            </h2>
            <AddProduct />
        </Typography>
    )
}
export default App;