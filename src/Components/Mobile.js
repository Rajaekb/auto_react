import React from 'react';
import Tel from '../assets/img/Tel-img.svg';
import Appstore from '../assets/img/AppStore.png';
import google from '../assets/img/GooglePlay.png';



const Mobile = () => {
    return (
        <div id="mobile" className="container">
            <div className="row container-fluid">
                
                <div className="col-12 col-sm-8">
                    <div className="row">
                        <div className="col-12 col-sm-12" >
                <h4>Gardez Tomobile dans votre poche ! <br/><span>avec Tomobile App</span></h4>

                </div></div>
  
                <div className="row ">
                    <div className="col-6 col-sm-6 text-center app"> <img src={Appstore} alt="Tel" width="150"  /></div>
                    <div className="col-6 col-sm-6 text-center app"> <img src={google} alt="Tel" width="170" /></div>
                </div>
                </div>
                <div className="col-sm-4">
                  <img src={Tel} alt="Tel" className="float-right" id="tel" width="450" />
                </div>

            </div>


            
        </div>
    )
}

export default Mobile
