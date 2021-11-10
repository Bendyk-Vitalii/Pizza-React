import React from "react";
import { FeatureContainer, FeatureButton } from "./Feature";

const Feature = ({ data, buttonAddHandler }) => {

  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      {data.map((product) => {

        return (
          <>
            <p dangerouslySetInnerHTML={{ __html: product.description }} key={product.id}></p>
            <FeatureButton onClick={() => buttonAddHandler(product.id)}>
              Order Now
            </FeatureButton>
          </>
        );
      })}
    </FeatureContainer>
  );
};

export default Feature;
