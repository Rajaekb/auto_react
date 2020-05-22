import React from 'react';

import logo_bm from '../../assets/img/logo_bm.svg';
import nouv_bmw from '../../assets/img/nouv_bmw.svg';
import HeaderRech from './HeaderRech'
function HeaderAccueil() {
    return (
        <div>
            <div className ="container" id="headerAccueil" >
                <div className='row pt-2' >
                    <div className=" col-12 col-sm-4">
                    <HeaderRech/>
                    </div>
                    <div className="col-12 col-sm-4 text-center mt-5 pt-5 ">
                       <div className="pb-3"><img src={logo_bm}/></div> 
                       <div className="pb-5"><img src={nouv_bmw}/></div>
                       <div><button className="btn btn-warning mb-5">DECOUVRIR</button></div>
                    </div>
                 
                </div>
             
           
            </div>
        </div>
    )
}

export default HeaderAccueil