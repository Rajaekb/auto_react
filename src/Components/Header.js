import React, { useState } from 'react';

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
import { loginUser } from './../redux/actions/authActionCreators';


const Header = ({ userName, isLoggedIn, onLogout }) => {

    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);

  
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
                <div className="col-md-3">
                    {isLoggedIn &&
                <h6>          
                        Welcome {userName} !
             
                </h6>}</div>
                <div className="col-md-2"> {isLoggedIn &&
                <button type="button" onClick={onLogout} className="btn btn-outline-warning">
                    Logout | 
                </button>}
                </div>
				<div className="col-2 col-md-2 col-sm-2 ">
                {!isLoggedIn &&
                <button type="button" onClick={(e)=>setOpenLogin(true)}
                className="btn btn-dark  btn-sm">CONNEXION</button>}</div>

				<div className="col-md-1 col-sm-2"><button type="button" className="btn btn-dark  btn-sm fr">FR</button></div>
			</div>
           
	        <Navbar/>
		</div>
	</div>
</div>
        
      </div>
    
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
  
     
    )
}

//const mapStateToProps = (state) => ({ user: state.user });

export default Header
