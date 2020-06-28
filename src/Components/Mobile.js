import React from 'react';
import Tel from '../assets/img/Telimg.png';
import Appstore from '../assets/img/AppStore.png';
import google from '../assets/img/GooglePlay.png';



const Mobile = () => {
    return (
        <section className="autosug-mobile">
            <div className="container" id="mobile">
                <div className="row autosug-mobile-height">
                    <div className="col-12 col-sm-8 d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <h4 className="mb-4">Gardez Autosug dans votre poche<br/>avec <span>Autosug App</span></h4>
                            <ul className="pl-0 mb-0">
                                <li className="mx-2">
                                    <img src={Appstore} alt="Tel" width="150"  />
                                </li>
                                <li className="mx-2">
                                    <img src={google} alt="Tel" width="170" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 text-left">
                        <img src={Tel} alt="Tel" id="tel" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mobile
