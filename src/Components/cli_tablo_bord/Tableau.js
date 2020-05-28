import React from 'react';
import note from "../../assets/img/Tableau_Bord/Note.svg";
import fav from "../../assets/img/Tableau_Bord/Favorie.svg";
import loop from "../../assets/img/Tableau_Bord/Loop.svg";

const Tableau = () => {
    return (
        <div id="apercu">
            <div className="row">
                <div className="col-12">
                    <h5 className="text-center pt-0 pl-8">Bienvenue dans votre espace personnel</h5>
                </div>


            </div>
            <div className="row text-center pt-5 pl-8">
                <div className="col-sm">
                <img src={fav} width="50"/><br/><br/>MES ANNONCES PREFEREES
                </div>
                <div className="col-sm">
                <img src={loop} width="50"/><br/><br/>MES RECHERCHES SAUVEES
                </div>
                <div className="col-sm">
                <img src={note} width="50"/><br/><br/>MES ANNONCES
                </div>


            </div>
            
            
        </div>
    )
}

export default Tableau
