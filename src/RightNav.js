import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
display: flex;
@media screen and (max-width: 900px) {
     
  position: absolute;
  position: fixed;
  z-index: 999;
  top: 60px;
  right: 10px;
  display:  ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  text-align: center;
  background-color: white;
}
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className='links'>
                        <li className='hide'><a href="index.html">HOME</a></li>
                        <li className='hide'><a href="index.html">ABOUT</a></li>
                        <li className='hide'><a href="index.html">CONTACT</a></li>
                        <li className='hide'><a href="index.html">JOIN</a></li>
                        
    </Ul>
  )
}

export default RightNav