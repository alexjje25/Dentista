import React from 'react';
import styled, { keyframes } from "styled-components";

import Fundo2 from '../../assets/fundo2.png';
import Logo1 from '../../assets/logo1.png';



const HomeSection = styled.section`
  width: 100%;
  min-height: 350px;
  max-height: 300px;
  display: flex;
  justify-content: center;
  position: relative;
  background-image: url(${Fundo2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  
 

  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }

  .btn{
  width: 30%;
  height: 20px;
  border-radius:6px;
 
  margin-left: 25px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, #009B3E 0%, #009B3E 35%, #009B3E 100%);
  font-family: 'roboto';
  font-weight: 700;
  font-size: 7px;
  margin-top:20px;
  
  text-align: center;
  border: none;
  cursor: pointer;

  color: #FFFFFF;

   }


   
`;

export const HeroSection: React.FC = () => {
  return (
    <HomeSection >
      
      <img style={{width:'72px', height:'48px', marginTop:'10px', marginLeft:'160px'}} src={Logo1} alt="teste" />
   

      <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
      
      <p style={{color:'#AF191A', fontFamily:'Roboto', fontWeight:'900', marginRight:'160px', fontSize:'21px'}}>SENTIR-SE BEM <br />  CONSIGO MESMO É <br /> ESSENCIAL PARA <br /> TER QUALIDADE <br /> DE VIDA  </p> 
      </div>
      <button className='btn'>AGENDAR AVALIAÇÃO</button>
      <p style={{fontFamily:'ROboto',color:'white',fontSize:'12px', marginLeft:'90px', marginTop:'50px'}}>CONDIÇÃO ESPECIAL PARA ESSE MÊS</p>
      
    </HomeSection>
  );
};

