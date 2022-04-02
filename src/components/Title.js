import React from 'react'
import styled from 'styled-components';

export default function Title({ title }) {
    return (
        <ProductTitle>
            <div className='product-title'>
                <h2>{title}</h2>
            </div>
        </ProductTitle>
    )
}

const ProductTitle = styled.div`
.product-title{
    font-family: 'Mochiy Pop One', sans-serif;
    letter-spacing: 1.5px;
    text-align: center;
    justify-content: center;
    align-content: center;
    padding: 20px;
    
}
`;