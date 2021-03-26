import axios from 'axios';
import { Product } from './../interfaces';

export const createProduct = (data: Product) => {
    return axios({
        url: `http://localhost:4000/product/ins`,
        method: 'post',
        data: data,
    })
    .then(res => {
        return res?.data;
    })
    .catch(err => {
        return err
    })
}