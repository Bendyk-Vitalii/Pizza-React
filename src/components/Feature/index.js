import React from "react";
import { FeatureContainer, FeatureButton } from "./Feature";
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../Redux/cart';

const Feature = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      {data.map((product) => {
        
        return (
          <>
            <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            <FeatureButton onClick={() => dispatch(AddToCart(product.id))}>
              Order Now
            </FeatureButton> 
          </>
        );
      })}
    </FeatureContainer>
  );
};

export default Feature;
