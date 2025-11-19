import React, { useEffect, useState, useContext } from 'react'
import { createContext } from 'react'
import { authDataContext } from './authContext';
import axios from 'axios';
import { userDataContext } from './UserContext';

export const shopDataContext = createContext();

const ShopContext = ({ children }) => {
    let [products, setProducts] = useState([]);
    let [search, setSearch] = useState('');
    let { userData } = useContext(userDataContext);
    let [showSearch, setShowSearch] = useState(false);
    let [cartItem, setCartItem] = useState({});
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


    // ADD CART:
    const addtoCart = async (itemId, size) => {
        if (!size) {
            alert("Slect Product Size");
            return;

        }
        
        let cartData = structuredClone(cartItem);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData)
        // console.log(cartData);


        if (userData) {
            try {
                const result = await axios.post(serverUrl + '/api/cart/add', {
                    itemId, size
                }, { withCredentials: true })

                console.log(result.data);
            } catch (error) {
                console.log("error", error);
            }
        }

    }

// !Get cart detail
      const getUserCart =async ()=>{
        try{
            const result = await axios.post(serverUrl + '/api/cart/get',{}, {withCredentials:true})
// console.log(result.data);
            setCartItem(result.data)
           

        }catch(error){
            console.log(error);
        }
    }

    //! update quantity:
    const updateQuantity =async (itemId , size , quantity)=>{
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData)
        if(userData){
            try{
                await axios.post(serverUrl+"/api/cart/update", {itemId, size , quantity}, {withCredentials:true})
         }catch(error){
            console.log(error);

        }
        }
    }


    //! get cart count
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItem) {
            for (const size in cartItem[itemId]) {
                totalCount += cartItem[itemId][size];
            }
        }
        return totalCount;
    };

    //! get amount of total product add in the cart:
    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItem){
            let itemInfo = products.find((product) => product._id === items);

            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item] > 0){
                        totalAmount += itemInfo.price * cartItem[items][item];
                    }
                }catch(error){
                     console.log(error);

                }

            }
        }

return totalAmount;
    }



    useEffect(() => {
        getProduct();
    }, [])


   useEffect(() => {
    // if (userData) {  
    //  console.log(cartItem);
    //     getUserCart();
    // }
      console.log("cart detail",cartItem);
        getUserCart();
}, [])

    let value = {
        products, currency, delivery_fee, setProducts, search, setSearch, showSearch, setShowSearch, addtoCart, getCartCount, setCartItem, updateQuantity , getCartAmount, cartItem
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



//  how item will add in cart:
// cartItem = {
//   itemId1: { "M": 2, "L": 1 },
//   itemId2: { "S": 1 }
// }
