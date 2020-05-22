import React from 'react';
import blackauto from '../assets/img/blackauto.svg';

const Actualite = () =>{

    return(
        <div className="container"  id="bienvenu">
            <div className="row">
                <div className="col-12 col-sm-12 text-center pb-5 ">
                    <h2 className="pt-4 mt-5 font-weight-bold"><span>ACT</span>UALITES</h2>
                    <small>TOMOBILE</small>
                </div>
            </div>
            <div className="row">
                <div className=" col-12 col-sm-8 actua "> <button className="btn btn-warning mt-4">ACTUALITE</button></div>
                <div className="col-12 col-sm-4">
                    <div className="row">
                        <div className="col-12 col-sm-12 actu ml-1 mb-1"><button className="btn btn-warning mt-4">ACTUALITE</button></div>
                    </div>
                    <div  className="row">
                        <div className="col-12 col-sm-12 actu ml-1"><button className="btn btn-warning mt-4">ACTUALITE</button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Actualite