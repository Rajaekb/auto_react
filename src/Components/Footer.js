import React from 'react';
import logofooter from '../assets/img/logofooter.svg';
import FB from '../assets/img/F.svg';
import twit from '../assets/img/T.svg';
import insta from '../assets/img/I.svg';
import send from '../assets/img/send.png';
import stars from '../assets/img/stars.svg';


const Footer = () => {
    return (
        <div id="footer" >
           
            <div className="row ">
                <div className="col-12 col-sm-12  text-center">
                    <img src={logofooter} alt="Logo" className="pt-5" width="300"/>
                </div>
            </div>
            <div className="row pt-5 justify-content-sm-center">
                <div className="col-12 col-sm-5  ">
                <h6><span>NE</span>WSLETTER</h6>
                <div className="input-group mb-3 pt-2">
                <input type="text" className="form-control" placeholder="Adresse Mail" />
                <div className="input-group-append">
                    <button className="btn bg-warning w-100" type="button" id="button-addon2">
                    <img src={send}/></button>
                </div>
            </div>
                </div>
                <div className="col-6 col-sm-3">
                <h6><span>RES</span>EAUX SOCIAUX</h6>
                <div id="social-icons" className="pt-2">  <img src={FB} alt="Logo" width="10" />
                         <img src={twit} alt="Logo" width="20" />
                         <img src={insta} alt="Logo" width="18" /></div>
                </div>
                <div className="col-6 col-sm-2 ">
                <h6><span>LISTE</span> DES AVIS</h6>
                <img src={stars} alt="stars"  className="pt-2"/>
                </div>
            </div>
            <div className="row  pt-5 justify-content-center footmenu">

                <div className="col-6 col-sm-3 text-justify" >
                    <h6><span>AUTO</span>SUG<span>.MA</span></h6>
                    <ul>
                        <li>A propos de tomobile</li>
                        <li>Presse</li>
                        <li>Condition d'utilisation</li>
                        <li>Information légales</li>
                        <li>Protection des données</li>
                    </ul>
                </div>

                <div className="col-6 col-sm-2  text-justify">
                    <h6><span>SER</span>VICES</h6>
                    <ul>
                        <li>Contact</li>
                        <li>Aide</li>
                        <li>Occasion par marque</li>
                        <li>Occasion par règion</li>
                   </ul>
                </div>

                <div className="col-6 col-sm-2 text-justify">
                    <h6><span>ESP</span>ACE PRO</h6>
                    <ul>
                        <li>Connexion</li>
                        <li>Inscription</li>
                        <li>Aide et Informations</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="col-6 col-sm-3 text-justify">
                    <h6><span>CON</span>TACT</h6>
                    <p>Notre équipe est à votre entière disposition en cas de questions. Veuillez introduire toutes vos demandes via notre formulaire de contact, l’un de nos collaborateurs reviendra vous dans les plus brefs délais.</p>
                         
                </div>
            </div>
        </div>
   
    )
}

export default Footer
