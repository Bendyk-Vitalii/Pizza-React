import React, { useState } from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './Products';

const Products = ({ heading, data }) => {
  const [cart, addCart] = useState([])
  const addCartHandler = (e) => addCart(e.target.id) 

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          console.dir(product)
          return (
            
            <ProductCard key={index} data-aos="fade-up">
              <ProductImg src={product.image.url} alt={product.name} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc dangerouslySetInnerHTML={{ __html: product.description }} />
                <ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
                <ProductButton onClick={addCartHandler}  id={product.id}>Add to card</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;