import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const FixedWrapper = styled.div`
position: fixed;
width: 100vw;
z-index: 100;
`

export const Nav = styled.nav`
background-color: rgba(0, 0, 0, .4);
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
position: relative;
`;

export const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
cursor: pointer;
:hover {
      color: tomato;
      transition: .2s ease-in;
}
@media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
`

export const NavIcon = styled(FaPizzaSlice)`
    display: block;
    position: absolute;
    margin-right: 2rem;
    top: 1rem;
    right: 0;
    cursor: pointer;
    color: #fff;
    font-size: 2rem;
    transform: translate(-50%, -15%);
    :hover {
        color: tomato;
      transition: .2s ease-in;
    }
`;



