import React, { createContext, useState, useEffect } from 'react';
import { data } from './data'




export const DataContext = createContext();

export const DataProvider = (props) => {

    const [products, setProducts] = useState(data)
    const [cart, setCart] = useState([])


    //addCart
    const addCart = (id) => {
        const check = cart.every(item => {
            return item.id !== id
        })

        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            setCart([...cart, ...data])
        }
        else {
            alert("The product already added to cart.")
        }
    }

    //LocalStorage Cart保存資料  
    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])


    //DataContext value值
    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }
    //console.log(value.products)




    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );

}

export default DataProvider;
