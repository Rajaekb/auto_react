import React from 'react';
import Tel from '../assets/img/Telimg.png';
import Appstore from '../assets/img/AppStore.png';
import google from '../assets/img/GooglePlay.png';



const Mobile = () => {
    return (
        <div id="mobile" >
            <div >
            <div className="row container-fluid">
                <div className="col-sm-1"></div>
                <div className="col-12 col-sm-6">
                    <div className="row">
                        <div className="col-12 col-sm-12 text-center pl-0" >
                            <h4>Gardez Autosug dans votre poche<br/>avec <span>Autosug App</span></h4>

                </div></div>
  
                <div className="row pt-2 justify-content-center">
                    <div className="col-5 col-sm-4"> <img src={Appstore} alt="Tel" width="150"  /></div>
                    <div className="col-5 col-sm-4"> <img src={google} alt="Tel" width="170" /></div>
                </div>
                </div>
                <div className="col-sm-5 text-left">
                  <img src={Tel} alt="Tel"  id="tel" />
                </div>

            </div>

            </div>
            
        </div>
    )
}

export default Mobile
