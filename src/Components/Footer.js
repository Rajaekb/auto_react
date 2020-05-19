import React from 'react';
import logo from '../assets/img/logo.svg';
import FB from '../assets/img/F.svg';
import twit from '../assets/img/T.svg';
import insta from '../assets/img/I.svg';

const Footer = () => {
    return (
        <div id="footer" className="container">
            <div className="row">
                <div className="col-12 col-sm-12  text-center">
                    <img src={logo} alt="Logo" className="pt-5" width="300"/>
                </div>
            </div>
            <div className="row justify-content-center">

                <div className="col-6 col-sm-2 text-justify" >
                    <h5><span>To</span>mobile<span>.ma</span></h5>
                    <ul>
                        <li>A propos de tomobile</li>
                        <li>Presse</li>
                        <li>Condition d'utilisation</li>
                        <li>Information légales</li>
                        <li>Protection des données</li>
                    </ul>
                </div>

                <div className="col-6 col-sm-2  text-justify">
                    <h5><span>Ser</span>vices</h5>
                    <ul>
                        <li>Contact</li>
                        <li>Aide</li>
                        <li>Occasion par marque</li>
                        <li>Occasion par règion</li>
                   </ul>
                </div>

                <div className="col-6 col-sm-2 text-justify">
                    <h5><span>Esp</span>ace Pro</h5>
                    <ul>
                        <li>Connexion</li>
                        <li>Inscription</li>
                        <li>Aide et Informations</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="col-6 col-sm-3 text-center">
                    <h5><span>Con</span>tact</h5>
                    <p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                         in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
                         <div id="social-icons">  <img src={FB} alt="Logo" width="10" />
                         <img src={twit} alt="Logo" width="20" />
                         <img src={insta} alt="Logo" width="18" /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
