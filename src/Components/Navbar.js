import React from 'react';

import logo from '../assets/img/logo.svg';
import {Link} from "react-router-dom";


function Navbar() {
    return (
        <div>
 
        <div className="fixed-top pb-2" id="navbar">

           <div>
            <div className="row container-fluid">
            <div className="col-md-4 text-center logo">
            <img src={logo} alt="Logo" />
            </div>
            <div className="col-md-8">
			<div className="row justify-content-end">
                <div className="col-md-2"></div>
				<div className="col-2 col-md-2 col-sm-2 ">
                <Link to="/login"><button type="button" className="btn btn-dark  btn-sm">CONNEXION</button></Link></div>
				<div className="col-2 col-md-2 col-sm-2">
                <Link to="/inscription"><button type="button" className="btn btn-warning  btn-sm">inscription</button></Link>
                </div>
				<div className="col-md-1 col-sm-2"><button type="button" className="btn btn-dark  btn-sm fr">FR</button></div>
			</div>
           
			<div className="row">
                <div className="col-12">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                        <Link to="/automobile" className="nav-link">ACCUEIL</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/vendre" className="nav-link">VENDRE</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/automobile/Recherche" className="nav-link">RECHERCHE</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/estimation" className="nav-link">ESTIMATION</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/automobile/apropos" className="nav-link">APROPOS</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/News" className="nav-link">NEWS</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Contact" className="nav-link">CONTACT</Link>
                        </li>
                        </ul>
                </div>
			</div>
		</div>
	</div>
</div>
        
      </div>

         
      </div>
  
     
    )
}

export default Navbar
