import styled, { keyframes } from "styled-components";




const AboutSection = styled.section`
  width: 100vw;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const Main = styled.div`
  margin: 0 15rem;
  margin-top: 23rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;



export const About = () => {
  return (
    <AboutSection id="about">
      

     <p style={{fontSize:'15px',fontFamily:'Roboto',textAlign:'center' }}>
      Nós sabemos como pode ser dificil e desconfortavel para você sorrir quando não se tem um sorriso que de segurança < br/>
      Assim como varios pacientes que ja passaram por aqui e hoje apos a <strong style={{color:'red',fontSize:'15px',fontFamily:'Roboto' }}>transformação que fizemos em seu sorriso
      </strong > agora <strong style={{color:'red',fontSize:'15px',fontFamily:'Roboto' }}>sentem prazer em sorrir</strong> 
      <div style={{height:'50px',borderRadius:'8px', background:'black'}}>
        <p style={{color:'white',fontSize:'18px',fontFamily:'Roboto' }}>Coloque implantes e volte definitivamente <br/> a sentir o sabor dos alimentos e sorrir sem medo</p>
      </div>
     </p>
    </AboutSection>
  );
};

