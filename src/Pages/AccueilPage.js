import React , { Component } from 'react';
import '../Components/accueil/accueil.css';

import HeaderAccueil from '../Components/accueil/HeaderAccueil';
import Bienvenue from '../Components/accueil/Bienvenue';



 class AccueilPage extends Component {

  render() {
      return (
       
          <div>
    
          <HeaderAccueil/>
          <Bienvenue/>

        
         </div>
          
         
      );
    }
}
export default  AccueilPage ;