import React from 'react';
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
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../Redux/cart';

const Products = ({ heading, data }) => {
  const dispatch = useDispatch()
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {

          return ( 
            <ProductCard key={index} data-aos="fade-up">
              <ProductImg src={product.image.url} alt={product.name} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc dangerouslySetInnerHTML={{ __html: product.description }} />
                <ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
                <ProductButton onClick={() => dispatch(AddToCart(product.id))}>Add to card</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;