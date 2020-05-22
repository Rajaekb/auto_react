import React from 'react';
import Rectangle from '../../assets/img/Rectangle.png';

const Bienvenue = () => {
    return (
        <div className="container" id="bienvenu">
            <div className="row">
                <div className="col-12 col-sm-12 text-center  ">
                    <h2 className="pt-4 font-weight-bold"><span>TO</span>MOBILE</h2>
                    <small>MAROC</small>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-12 col-sm-4">
                <img src={Rectangle} alt="RectangleAuto" id="imgbienv" />
                </div>
                <div className="col-12 col-sm-8">
                    <h4 className="font-weight-light">Réalisez vos rêves automobiles avec Autosug<br/>
                        <span className="soustitregras">la plus grande plateform en ligne de voiture au maroc </span></h4>
                    <p>Bienvenue sur le site web de votre concessionnaire Autosug par excellence.
                    <br/> Trouvez plus de 20.000 véhicules en vente à travers tout le Maroc.</p>
                    <p> Sur Autosug, vous avez à votre disposition un immense garage virtuel, Qu'il s'agisse d'une voiture neuve ou d'occasion, d'une citadine respectueuse de l'environnement ou d'une puissante voiture de sport, la voiture de vos rêves est seulement à un clic sur Autosug.
                    <br/>Notre plateforme propose des véhicules tellement diversifiés que nous vous garantissons la trouvaille qui répond exactement à vos attentes. Votre recherche peut être filtrée sur les exigences les plus spécifiques, telles que la fourchette de prix, le marché, le modèle, le type de carburant, le kilométrage, la couleur, l'équipement, les options, etc.
                    <br/>Autosug vous aide non seulement à trouver le véhicule de vos rêves mais vous transmet également son savoir-faire sur les voitures neuves et classiques, limousines de luxe, les voitures de sport et les véhicules utilitaires, les motos et tricycles, les ateliers et les usines, le tuning et autres accessoires.
                    <br/> Suivez-nous sur nos pages de réseaux sociaux pour rester au courant de toute l’actualité en matière automobile.   </p>
                    
                </div>

            </div>

            <div className="row mt-5" id="estimation">
                <div className="col-12 col-sm-4">
                    <form className="p-5 m-auto4 w-100">
                    <h5 className="font-weight-light text-center">Estimation Voiture</h5>
                <div className="form-group">
                    <select id="inputState" className="form-control">
                        <option selected>Marque</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group">
                    <select id="inputState" className="form-control">
                        <option selected>Modéle</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group">
                    <select id="inputState" className="form-control">
                        <option selected>Carburant</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-warning w-100">ESTIMATION</button>
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Bienvenue 
