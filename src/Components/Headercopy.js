import React, { useState } from 'react';
import './header.css'
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


const Headercopy = ({ userName, isLoggedIn, onLogout }) => {

    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);

  
    return (
        <div>
            <div id="topbar">
                <div className="container">
                <div className="row">
                <div class="col-6">
                    Annoncer sur le plus grand marché automobile au maroc
                </div>
                <div class="col-6">{isLoggedIn &&   
                    <Link to="/edit-annonce">
                        <button type="button" className="btn btn-dark  btn-sm w-50 float-right text-warning ">
                         DEPOSER VOTRE ANNONCE
                        </button>
                    </Link>
                }             
                </div>

                </div>
            </div>
             <div id="navbar" className=" container">       
            <div className="row">
            <div className="col-3">
            <img src={logo} alt="Logo" />
            </div>
            <div className="col-7">
                <Navbar/>
            </div>
        
            <div className="col-2">
                 {isLoggedIn &&
                <button type="button" onClick={onLogout} className="btn btn-outline-warning float-right">
                    Logout 
                </button>}
                {!isLoggedIn &&
                <button type="button" onClick={(e)=>setOpenLogin(true)}
                className="btn float-right"><FaUserAlt color="black" size="30"/><br/>CONNEXION</button>}
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

export default Headercopy
