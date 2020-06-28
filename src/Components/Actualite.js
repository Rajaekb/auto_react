import React from 'react';
import blackauto from '../assets/img/blackauto.svg';
import { FaRegCalendarAlt } from 'react-icons/fa';
const Actualite = () =>{

    return(
        <section className="autosug-actualites py-5">
            <div className="container" id="bienvenu">
                <div className="row">
                    <div className="col-12 col-sm-12 text-center pb-5">
                        <h2 className="autosug_title mb-0"><span>ACT</span>UALITES</h2>
                        <small className="autosug-soustitle">TOMOBILE</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-8 pl-0">
                        <div className="actua p-3">
                            <button className="btn btn-autosug-jaune text-uppercase btn-autosug-height">ACTUALITéS</button>
                            <div className="autosug-actualites-bottom px-3 pb-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit</p>
                                <div className="autosug-actualite-date"><FaRegCalendarAlt/> <span>26 MAI 2020</span></div>
                            </div>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="row">
                            <div className="col-12 col-sm-12 actu mb-3 py-3">
                                <button className="btn btn-autosug-jaune text-uppercase btn-autosug-height-small">ACTUALITéS</button>
                                <div className="autosug-actualites-bottom px-3 small-text pb-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit elit</p>
                                    <div className="autosug-actualite-date"><FaRegCalendarAlt/> <span>26 MAI 2020</span></div>
                                </div>
                            </div>
                        </div>
                        <div  className="row">
                            <div className="col-12 col-sm-12 actu py-3">
                                <button className="btn btn-autosug-jaune text-uppercase btn-autosug-height-small">ACTUALITéS</button>
                                <div className="autosug-actualites-bottom px-3 small-text pb-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit elit</p>
                                    <div className="autosug-actualite-date"><FaRegCalendarAlt/> <span>26 MAI 2020</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Actualite