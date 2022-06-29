import {useState} from 'react';

import emailjs from "emailjs-com";
import styled from "styled-components";


const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #020203;
  display: flex;
  flex-direction: column;
  
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;






const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  input {
    padding: 1rem calc(0.2rem + 1vw);
    
    background-color: var(--nav2);
    border: none;
    
    
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    font-family: Rosario;
    margin-bottom: 7px;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;


export function Contact(props){
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('GmailMessage', 'template_wdv4xsw', e.target, 
    'user_HGlN8QpuQpRIDGfV5iHJe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);

  };
  return (

    <ContactSection id="contact">
          </ContactSection>
  );
};
