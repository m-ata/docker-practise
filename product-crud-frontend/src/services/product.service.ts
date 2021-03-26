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

export const getAllProducts = () => {
    return axios({
        url: `http://localhost:4000/product/get`,
        method: 'get',
    })
    .then(res => {
        return res?.data;
    })
    .catch(err => {
        return err
    })
}
export const deleteProduct = (id: String) => {
    return axios({
        url: `http://localhost:4000/product/delete/${id}`,
        method: 'delete',
    })
    .then(res => {
        return res?.data;
    })
    .catch(err => {
        return err
    })
}