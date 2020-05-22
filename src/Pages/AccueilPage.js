import React , { Component } from 'react';
import '../Components/accueil/accueil.css';

import HeaderAccueil from '../Components/accueil/HeaderAccueil';
import Bienvenue from '../Components/accueil/Bienvenue';
import Mobile from '../Components/Mobile';
import Actualite from '../Components/Actualite';



 class AccueilPage extends Component {

  render() {
      return (
       
          <div>
    
          <HeaderAccueil/>
          <Bienvenue/>
          
          <Actualite/>
          <Mobile/>
          

        
         </div>
          
         
      );
    }
}
export default  AccueilPage ;