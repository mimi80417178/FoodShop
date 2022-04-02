import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import Title from './Title'
import '../css/ProductsView.css'

const ProductsView = () => {

    const paramsId = useParams();
    //console.log(paramsId) //{id:1}....
    const value = useContext(DataContext)  //console.log(value)
    const [products] = value.products
    const [productsView, setProductsView] = useState([])
    //console.log(productsView)
    const addCart = value.addCart


    useEffect(() => {
        if (paramsId) {
            products.forEach((item) => {
                if (item.id === paramsId.id) {
                    setProductsView(item)
                }
            })
        }
    }, [paramsId, products])

    const info = `${productsView.title} A nutrient is "a substance obtained from food that is used in the human body to promote growth and development, maintain health and repair body tissues", that is, "a substance that provides nutrients to the body". Broadly speaking, nutrients are divided into two categories, namely energy-producing nutrients (also known as energy-providing nutrients or macronutrients) and micronutrients. Nutrients that provide energy include carbohydrates, fats and proteins.`

    return (
        <>
            <Title title={productsView.title} />
            <div key={productsView.id} className="introduce-banner">

                <div className="img-area">
                    <div className="image">
                        <img src={productsView.image} alt={productsView.image} className='image-size' />
                    </div>
                </div>
                <div className="introduce-area">
                    <h2 className="model-title">Model : {productsView.title}</h2>
                    <h4 className="company-name" style={{ color: '#004CC0' }}>Brand Name : {productsView.category} </h4>
                    <h3 className="price">Price : $ {productsView.price}</h3>
                    <h3 className="sold" style={{ color: 'red' }} >Sold  :  {productsView.sold}</h3>
                    <h4 className="product-info"><span>Product Description :</span> {info}</h4>

                    <div className="two-btn">
                        <Link to="/">
                            <button className='info-bagbtn'>
                                <span className='info-cart-plus'><i class="fa fa-arrow-circle-o-left" ></i></span>
                                <span className='info-bagbtnText' >Back To Product</span>
                            </button>
                        </Link>


                        <button className='info-bagbtn' >
                            <span className='info-cart-plus'><i class="fa fa-cart-plus" ></i></span>
                            <span className='info-bagbtnText' onClick={() => addCart(productsView.id)}>AddCart</span>
                        </button>


                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductsView