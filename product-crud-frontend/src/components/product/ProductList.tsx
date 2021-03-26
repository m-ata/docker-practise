import * as React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { getAllProducts, deleteProduct } from '../../services/product.service';
import Alert from './../alert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { useToasts } from 'react-toast-notifications'

const useStyles = makeStyles({
    icon: {
        cursor: 'pointer',
    },
});

const ProductList = (props: any) => {

    const { hasProductAdded } = props;
    const [localState, setLocalState] = React.useState({
        products: [],
        showAlert: false,
        selectedProduct: null,
        isFetchData: true
    });
    const { products, showAlert, selectedProduct, isFetchData } = localState;
    const classes = useStyles();
    const { addToast } = useToasts();

    React.useEffect(() => {
        isFetchData && getProducts();
    }, [isFetchData]);
    
    React.useEffect(() => {
        setLocalState(prevState => ({...prevState, isFetchData: hasProductAdded}));
    }, [hasProductAdded]);

    const getProducts = async () => {
        const updatedProducts = await getAllProducts();
        (updatedProducts?.count > 0) && setLocalState(prevState => ({...prevState, products: updatedProducts?.data, isFetchData: false}));
    }

    const handleDeleteProduct = async () => {
        const deletedProduct = await deleteProduct(selectedProduct?._id);
        if (deletedProduct?.success) {
            addToast(deletedProduct?.message || 'Deleted successfully', { appearance: 'success', autoDismiss: true });
            setLocalState(prevState => ({...prevState, isFetchData: true}));
        } else {
            addToast(deletedProduct?.message || 'Something went wrong while deleting product', { appearance: 'error', autoDismiss: true })
        }
    }

    const handleCloseAlert = (isDelete: boolean) => {
        setLocalState(prev => ({...prev, showAlert: !showAlert}));
        if (isDelete) handleDeleteProduct();
    }

    return (
        <Typography component={'div'}>
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell >{row.description}</TableCell>
                            <TableCell  >
                                <EditIcon className={classes.icon} color={'primary'} />
                                <DeleteIcon 
                                    onClick={() => setLocalState(prev => ({...prev, showAlert: !showAlert, selectedProduct: row}))} 
                                    className={classes.icon} 
                                    color={'primary'} 
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        {
            showAlert && 
            <Alert onCloseAlert={handleCloseAlert} title={'Alert'} content={'Do you want to delete this product?'} />
        }
        </Typography>
    )
}
export default ProductList;