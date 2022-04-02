import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../Context'
import '../css/Cart.css'

const Cart = () => {
    const value = useContext(DataContext)
    //console.log(value)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)

    //Total
    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [cart])

    //decrease
    const decrease = id => {
        cart.forEach((item) => {
            if (item.id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })
        setCart([...cart])
    }

    //increase
    const increase = id => {
        cart.forEach((item) => {
            if (item.id === id) {
                item.quantity += 1
            }
        })
        setCart([...cart])
    }

    //deleteItem
    const deleteItem = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1) ////刪除一個
                }
            })
            setCart([...cart])
        }
    }



    if (cart.length === 0)
        return <h2 style={{ color: "#CF0014", textAlign: "center", fontSize: "30px", marginTop: "20px" }}>Cart Empty...</h2>


    return (
        <>
            <div className="cartBanner">
                {
                    cart.map(item => (

                        <div className="details-cart" key={item._id}>
                            <img src={item.image} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2 className='box-title'>Title : {item.title}</h2>
                                    <h4 className='box-price'>Price : ${item.price}</h4>
                                    <h4 className='box-totalprice' style={{ color: "#CF0014" }}>TotalPrice : ${item.price * item.quantity}</h4>
                                </div>
                                <p className='box-description'>Description : {item.info}</p>
                                <div className="amount">
                                    <button className="count" onClick={() => decrease(item.id)}> - </button>
                                    <span className='quantity'>{item.quantity}</span>
                                    <button className="count" onClick={() => increase(item.id)}> + </button>
                                </div>
                            </div>
                            <div className="delete" onClick={() => deleteItem(item.id)}>X</div>
                        </div>
                    ))
                }
                <div className="total" style={{ color: "#CF0014" }}>
                    <h3>Totally: $ {total}</h3>
                </div>
            </div>
        </>
    )
}

export default Cart