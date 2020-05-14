import React, { useState } from 'react';
import './header.css';
import { toast } from 'react-toastify';
import logo from '../assets/img/logo.svg';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FormConnexion from '../AuthPages/FormConnexion';
import FormInscription from '../AuthPages/FormInscription';
import PageInscription from '../AuthPages/PageInscription';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/authActionCreators';
import { FaUserAlt } from 'react-icons/fa';


const Header = ({ userName, isLoggedIn, onLogout }) => {

    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);

  
    return (
        <div className="fixed-top">
            <div id="topbar">
                <div className="container">
                    <div className="row">
                        <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                            Annoncer sur le plus grand marché automobile au maroc
                        </div>
                        <div class="col-12 col-md-6 col-lg-6 col-xl-6">{!isLoggedIn &&   
                            <Link to="/edit-annonce">
                                <button type="button" className="btn btn-dark  btn-sm w-50 float-right text-warning ">
                                DEPOSER VOTRE ANNONCE
                                </button>
                            </Link>
                        }             
                        </div>
                    </div>
                </div>
            </div>
            <div>
              <nav className="navbar   navbar-light navbar-expand-md navbar-expand-lg navbar-style justify-content-between ">
                <div className="container">
                  
                    
                        <Link  className="navbar-brand" to="/"><img src={logo} alt="Logo" className="logo img-fluid"/></Link>
                        <button 
                        type="button"
                        className="navbar-toggler" 
                        data-toggle="collapse" 
                        data-target="#micon"
                    >
                            <span className="navbar-toggler-icon"/>
                            
                        </button>
                  
                    <div className="collapse navbar-collapse" id="micon">
                    <ul className="navbar-nav ml-auto mt-3">
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/automobile/Recherche">RECHERCHE</Link></li>
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/vendre">VENDRE</Link></li>
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/estimation">ESTIMATION</Link></li>
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/automobile">ACTUALITE</Link></li>
                        <li  className="nav-item">
                            <Link  className="nav-link" to="/automobile"><span className="border-left border-dark pl-3">FR</span></Link></li>
                         {isLoggedIn &&<li>
                            <button type="button" onClick={onLogout} className="btn btn-outline-warning ">
                                Logout 
                            </button></li>}
                                 {!isLoggedIn &&  
                            <li><button type="button" onClick={(e)=>setOpenLogin(true)}
                            className="btn pt-0 pr-0"><FaUserAlt color="black" size="30"/><br/>CONNEXION</button></li>}
                    </ul>
                    </div>
                </div>
            </nav>
          

    
    <Modal open={openLogin} onClose={() => setOpenLogin(false)} center>
    <FormConnexion/>
        <button type="button"
        onClick={() => {
            setOpenLogin(false);
            setOpenRegister(true)
                        }
                } 
        className="btn btn-dark w-100 mt-2">INSCRIPTION</button>
     

    </Modal>
 
    <Modal open={openRegister} onClose={() => setOpenRegister(false)} center>
    <h4 className="p-4"><span>INSCR</span>IVEZ-VOUS</h4>
        <FormInscription/>
       
    </Modal>
         
            </div>
        </div>
  
     
    )
}

//const mapStateToProps = (state) => ({ user: state.user });

export default Header