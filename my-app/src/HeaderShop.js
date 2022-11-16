import './style.css'
import {React} from 'react';
import {Shop} from './Product';
import {products, setProduct} from './Product'
import {useState} from 'react'

export const Basket=()=>{
    const [orders, setOrders] = useState([]);

    const Card=id=>{
        const newCard=orders.find(item=>item.id===id);
        if(newCard){
            newCard++;
            const newOrders = orders.map(item => item.id === id ? newCard : item);
            setOrders(newOrders);

        }
    }

}
