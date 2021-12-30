import React, { useState, memo } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./Hero";

const Hero = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toogle={toogle} />
      <Sidebar isOpen={isOpen} toogle={toogle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          {/* <HeroBtn>Place Order</HeroBtn> */}
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
})

export default Hero;
