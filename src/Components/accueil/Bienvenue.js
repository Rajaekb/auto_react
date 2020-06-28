import React from 'react';
import Rectangle from '../../assets/img/Rectangle.png';

const Bienvenue = () => {
    return (
    <section className="autosug-bienvenu py-5" id="bienvenu">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 text-center">
                    <h2 className="autosug_title mb-0"><span>TO</span>MOBILE</h2>
                    <small className="autosug-soustitle">MAROC</small>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-12 col-sm-4 pl-0">
                    <img src={Rectangle} alt="RectangleAuto" id="imgbienv img-fluid"/>
                </div>
                <div className="col-12 col-sm-8 pt-3 pl-0">
                    <h4 className="font-weight-light autosug-sectitle mb-4">Réalisez vos rêves automobiles avec Autosug<br/>
                        <span className="soustitregras">la plus grande plateform en ligne de voiture au maroc </span></h4>
                    <p>Bienvenue sur le site web de votre concessionnaire Autosug par excellence.
                    <br/> Trouvez plus de 20.000 véhicules en vente à travers tout le Maroc.</p>
                    <p class="mb-0"> Sur Autosug, vous avez à votre disposition un immense garage virtuel, Qu'il s'agisse d'une voiture neuve ou d'occasion, d'une citadine respectueuse de l'environnement ou d'une puissante voiture de sport, la voiture de vos rêves est seulement à un clic sur Autosug.
                    <br/>Notre plateforme propose des véhicules tellement diversifiés que nous vous garantissons la trouvaille qui répond exactement à vos attentes. Votre recherche peut être filtrée sur les exigences les plus spécifiques, telles que la fourchette de prix, le marché, le modèle, le type de carburant, le kilométrage, la couleur, l'équipement, les options, etc.
                    <br/>Autosug vous aide non seulement à trouver le véhicule de vos rêves mais vous transmet également son savoir-faire sur les voitures neuves et classiques, limousines de luxe, les voitures de sport et les véhicules utilitaires, les motos et tricycles, les ateliers et les usines, le tuning et autres accessoires.
                    <br/> Suivez-nous sur nos pages de réseaux sociaux pour rester au courant de toute l’actualité en matière automobile.   </p>
                </div>
            </div>
            <div className="row mt-5 py-5" id="estimation">
                <div className="col-12 col-sm-4 pl-5">
                    <form className="m-auto4">
                        <h5 className="font-weight-regular text-center mb-4">Estimation Voiture</h5>
                        <div className="form-group">
                            <div className="selectdiv">
                                <label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Marque</option>
                                        <option>...</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="selectdiv">
                                <label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Modéle</option>
                                        <option>...</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="selectdiv">
                                <label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Carburant</option>
                                        <option>...</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <button type="button" className="btn btn-autosug-jaune btn-search text-uppercase w-100">ESTIMATION</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Bienvenue 
