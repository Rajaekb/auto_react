import React from 'react';

import logo_bm from '../../assets/img/logo_bm.svg';
import nouv_bmw from '../../assets/img/nouv_bmw.svg';
import HeaderRech from './HeaderRech'
function HeaderAccueil() {
    return (
        <div>
            <div className ="container" id="headerAccueil" >
                <div className="row pt-2">
                    <div className="col-12 col-sm-4">
                    <HeaderRech/>
                    </div>
                    <div className="col-12 col-sm-4 text-center d-flex align-items-center justify-content-center">
                        <div>
                            <div className="pb-3"><img src={logo_bm} class="img-fluid"/></div> 
                            <div className="pb-5"><img src={nouv_bmw} class="img-fluid"/></div>
                            <div><button className="btn btn-autosug-jaune text-uppercase">découvrir</button></div>
                        </div>
                       
                    </div>
                 
                </div>
             
           
            </div>
        </div>
    )
}

export default HeaderAccueil