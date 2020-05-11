import React, { useState } from 'react';


import logo from '../assets/img/logo.svg';

import {Link} from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FormConnexion from '../AuthPages/FormConnexion';
import FormInscription from '../AuthPages/FormInscription';
import PageInscription from '../AuthPages/PageInscription';
import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/authActionCreators';


const Navbar = () => {

    return (
        <div>
           
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

    )

    }
export default Navbar
