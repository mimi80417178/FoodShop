import React, { useContext } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Product.css'
import Title from './Title'
import PlateBanner from './PlateBanner'

const Products = () => {
    const value = useContext(DataContext)
    //console.log(value)
    const [products] = value.products
    //console.log(products)
    const addCart = value.addCart


    return (
        <>
            <PlateBanner />
            <Title title="Our Products..." />
            <div className='productList-banner'>
                {
                    products.map((item) => {
                        return (
                            <div key={item.id} className='itemsAll' >
                                <img src={item.image} alt="" className='productImage' />
                                <div className='productText'>
                                    <h4 className='productText-tilte'>Name : {item.title}</h4>
                                    <h4>USD ${item.price}</h4>
                                </div>

                                <div className='adminBuEdit'>
                                    <Link to={`/productsview/${item.id}`}><button id="btn_buy" > View</button>
                                    </Link>
                                    < button id="btn_Edit" onClick={() => addCart(item.id)}> AddCart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products


