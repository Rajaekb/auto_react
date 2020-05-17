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
           
                    <ul className="nav float-right">
                    <li className="nav-item">
                        <Link to="/automobile/Recherche" className="nav-link">RECHERCHE</Link>
                        </li>
                   
                        <li className="nav-item">
                        <Link to="automobile/vendre" className="nav-link">VENDRE</Link>
                        </li>
                     
                        <li className="nav-item">
                        <Link to="automobile/estimation" className="nav-link">ESTIMATION</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/automobile" className="nav-link pr-2">ACTUALITE</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/automobile" className="nav-link"><span className="border-left border-dark pl-3">FR</span></Link>
                        </li>
                        </ul>
                </div>

    )

    }
export default Navbar
