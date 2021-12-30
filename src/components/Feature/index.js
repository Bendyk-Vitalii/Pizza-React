import React from "react";
import { FeatureContainer, FeatureButton } from "./Feature";
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../Redux/cart';

const Feature = ({data}) => {
const dispatch = useDispatch()
  console.log(data)
  return (
   data.map((item) => (
    <FeatureContainer key={item.id}>
    <h1>Pizza of the Day</h1>
        <div className='feature'>
          <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
          <FeatureButton onClick={() => dispatch(AddToCart(item.id))}>
            Order Now
          </FeatureButton> 
        </div>    
  </FeatureContainer>
   ))

  );
};

export default Feature;
