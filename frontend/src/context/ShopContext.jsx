import React, { useEffect, useState, useContext } from 'react'
import { createContext } from 'react'
import { authDataContext } from './authContext';
import axios from 'axios';

export const shopDataContext = createContext();

const ShopContext = ({ children }) => {
    let [products, setProducts] = useState([]);
    let [search, setSearch] = useState('');
    let [showSearch, setShowSearch] = useState(false);
    let { serverUrl } = useContext(authDataContext);
    let currency = "Rs";
    let delivery_fee = 40;

    const getProduct = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/product/listproduct");
            // console.log(result);
            setProducts(result.data)

        } catch (error) {
            console.log("product error:", error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    let value = {
        products, currency, delivery_fee, setProducts, search, setSearch, showSearch, setShowSearch
    }

    return (
        <>
            <shopDataContext.Provider value={value} >
                {children}
            </shopDataContext.Provider>
        </>
    )
}

export default ShopContext