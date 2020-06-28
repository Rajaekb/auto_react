import React, { useState } from 'react';
import './header.css';
import { toast } from 'react-toastify';
import logo from '../assets/img/logo.svg';
import connexion from '../assets/img/Navbar/connexion.svg';
import comparer from '../assets/img/Navbar/comparer.svg';
import {Link} from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FormConnexion from '../AuthPages/FormConnexion';
import FormInscription from '../AuthPages/FormInscription';


import { FaSignOutAlt } from 'react-icons/fa';


const Header = ({ userName, isLoggedIn, onLogout }) => {

    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);

  
    return (
        <div>
            <div id="topbar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
                           <p> Annoncer sur le plus grand marché automobile au maroc</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 autosug_header_welcome justify-content-end">
                            <ul className="pl-0 mb-0 text-right">
                                <li className="d-inline-block mr-3">{isLoggedIn &&  <h6> Bienvenu {userName} !</h6> } </li>
                                <li className="d-inline-block">
                                    {isLoggedIn &&   
                                        <Link to="/add" className="btn btn-dark text-uppercase btn-sm w-80 text-warning">
                                            Déposer votre Annonce
                                        </Link>   
                                    }
                                </li>
                            </ul>
                                
                        </div>
                    </div>
                </div>
            </div>
            
           
        <div className="navbar container px-0">
        
                <div className="logo mr-auto">
                <Link to="/accueil"> <img src={logo} alt="Logo"/></Link>
                </div>
                
                <input type="checkbox" id="nav"/>
                <label htmlFor="nav"></label>
                
                <ul className="ul-list mb-0 py-2 ml-auto">
                    <li className="list-item"><a href="#">RECHERCHE</a></li>
                    <li className="list-item"><a href="#">VENDRE</a></li>
                    <li className="list-item"><a href="#">ESTIMATION</a></li>
                    <li className="list-item"><a href="#">ACTUALITE</a></li>
                    <li  className="list-item">
                        <span className="pl-3 autosug_header_after">FR</span>
                    </li>
              
                        
 
                            <li className="list-item text-center ml-4">
                                <button type="button" className="btn conx text-center"><img className="img-fluid mb-1" src={comparer} alt="comparer"/>
                            <br/>COMPARER</button></li>
                        {!isLoggedIn &&  
                            <li className="list-item text-center">
                                <button type="button" onClick={(e)=>setOpenLogin(true)}
                            className="btn conx text-center"><img className="img-fluid mb-1"src={connexion} alt="Conx"/>
                            <br/>CONNEXION</button></li>}
                            {isLoggedIn &&<li className="list-item text-center">
                            <button type="button" onClick={onLogout} className="btn  conx">
                               <FaSignOutAlt size="30"/><br/>DECONNECTER 
                            </button>
                        </li>}
                </ul>
                
            </div>
            
       
              {/*<nav className="navbar navbar-expand-sm navbar-expand-md navbar-style justify-content-between ">
                <div className="container">
                  
                    
                        <Link  className="navbar-brand" to="/"><img src={logo} alt="Logo" className="logo img-fluid"/></Link>
                        <button 
                        type="button"
                        className="navbar-toggler" 
                        data-toggle="collapse" 
                        data-target="#micon"
                    >
                            <span className="navbar-toggler-icon"></span>
                            
                        </button>
                  
                    <div className="collapse navbar-collapse" id="micon">
                    <ul className="navbar-nav ml-auto mt-3">
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/Recherche">RECHERCHE</Link></li>
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/vendre">VENDRE</Link></li>
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/estimation">ESTIMATION</Link></li>
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/">ACTUALITE</Link></li>
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/"><span className="border-left border-dark pl-3">FR</span></Link></li>
                         {isLoggedIn &&<li className="nav-item">
                            <button type="button" className="nav-link" onClick={onLogout} className="btn btn-outline-warning ">
                                Logout 
                            </button></li>}
                                 {!isLoggedIn &&  
                            <li className="nav-item"><button type="button" className="nav-link" onClick={(e)=>setOpenLogin(true)}
                            className="btn pt-0 pr-0"><FaUserAlt color="black" size="30"/><br/>CONNEXION</button></li>}
                    </ul>
                    </div>
                </div>
                                 </nav>*/}
          

    
    <Modal id="modal" open={openLogin} onClose={() => setOpenLogin(false)} center>
  
    <FormConnexion />
        <div className="container"><button type="button"
        onClick={() => {
            setOpenLogin(false);
            setOpenRegister(true)
                        }
                } 
        className="btn btn-dark w-100 mt-2">INSCRIPTION</button>
        </div>
   

    </Modal>
 
    <Modal open={openRegister} onClose={() => setOpenRegister(false)} center>
    <h4 className="p-4"><span>INSCR</span>IVEZ-VOUS</h4>
        <FormInscription/>
       
    </Modal>
         
            </div>
     
  
     
    )
}

//const mapStateToProps = (state) => ({ user: state.user });

export default Header
