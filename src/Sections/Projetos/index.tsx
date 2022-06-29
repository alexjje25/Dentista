import React,{ useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Icons2 from '../../assets/icons2.svg'
import Icon3 from '../../assets/icon3.svg'
import {PortfolioSection, Container, RepoContainer, InfoRepo, DetailsRepoNav, 
Button, ContentSectionPortfolio, Title} from './styles';

export const Projetos: React.FC = () => {
  
    return(
        <PortfolioSection id="portfolio">
            <Container>
         <h1 style={{color:'white', marginTop:'-69px'}}>SOMOS ESPECIALIZADOS EM:</h1>

        <div style={{}} >
            <img style={{width:'70%', marginLeft:'69px', marginTop:'44px'}} src={Icons2} alt="teste" />
            <img style={{width:'26%', marginTop:'-50rem',marginLeft:'10px', marginBottom:'5px'}} src={Icon3} alt="teste" />
        </div>
                       
                        
            </Container>
        </PortfolioSection>
    );
}
