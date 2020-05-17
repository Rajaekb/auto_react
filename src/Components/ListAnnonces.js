import React from 'react';
import {Link} from "react-router-dom";
import d_img from '../assets/img/d_img.png';
import { FaWarehouse,FaTachometerAlt,FaCar,FaBatteryFull,
    FaSwatchbook,FaSitemap,FaTrashAlt, FaGasPump, FaGripLines, FaStar, FaEye,FaMapMarkerAlt,FaStopCircle, FaParking} from 'react-icons/fa';

    const ListAnnonces = ({ annonces }) => { 
        return (

            <React.Fragment>
                {          
                   annonces.map(item => (
                    <div key={item.id} className="row" id="result">
                    <div className="col-3">
                    <img src={d_img} alt="image" id="tel" width="250" className="rounded" />
                    </div>
                
                    <div className="col-9">
                    <div className="row">
                        <div className="col-8">
                        <h5>{item.marque} {item.modele} {item.finition}</h5>         
                        </div>
                        <div className="col-4">
                        <h5><span>{item.neuf}</span></h5>
                        </div>
                    </div>
                 <div className="row">
                    <div className="col-3">
                    <span><FaWarehouse className="mr-1"/></span> 
                    <font face="Roboto" size="1">{item.année}</font><br/>
                    <span><FaTachometerAlt className="mr-1"/></span> 
                    <font face="Roboto" size="1">{item.kilometrage}</font><br/>
                    <span><FaCar className="mr-1"/></span>
                    <font face="Roboto" size="1">{item.type_vehicule}</font><br/>
                   
                    </div>
                    <div className="col-5">
                    <span><FaBatteryFull className="mr-1"/></span>
                    <font face="Roboto" size="1"> Consommation: {item.consomation} Km</font><br/>
                    <span><FaSwatchbook className="mr-1"/></span>
                    <font face="Roboto" size="1">Nombre de siéges: {item.nbr_sieges}</font><br/>
                    <span><FaSitemap className="mr-1"/></span>
                    <font face="Roboto" size="1">Boîte automatique</font><br/>
                    </div>
                    <div className="col-4">
                    <span><FaCar className="mr-1"/></span>
                    <font face="Roboto" size="1">Nombre de portes: {item.nbr_portes}</font><br/>
                    <span><FaGasPump className="mr-1"/></span>
                    <font face="Roboto" size="1">Carburant : {item.carburant}</font><br/>
                    <span><FaGripLines className="mr-1"/></span>
                    <font face="Roboto" size="1">Matricule:{item.matricule}</font><br/>
                    </div>

                </div>
                <br/>
                <div className="row">
                    <div className="col-4">
                    <span><FaStar className="mr-1" />
                        <FaStar className="mr-1"/>
                        <FaStar className="mr-1"/>
                        <FaStar className="mr-1"/>
                        <FaStar className="mr-1"/>
                    </span><br/>
                    <font face="Roboto" size="1"> 04249 Leipzig, Professionnel</font>
                    </div>
                    <div className="col-2">
           

                    </div>
                    <div className="col-6 divbtn">
                    <Link to="/Details-pro/:id">
                    <button type="button" className="btn btn-warning" >
                    <FaEye className="mr-1" align="center"/>
                    </button>
                    </Link>
                    <button type="button" className="btn btn-dark">
                    <FaMapMarkerAlt className="mr-1" align="center"/>
                    </button>
                    <button type="button" className="btn btn-dark">
                    <FaTrashAlt className="mr-1" align="center"/>
                    </button>
                    <button type="button" className="btn btn-dark">
                    <FaParking className="mr-1" align="center"/>
                    </button>
                    <button type="button" className="btn btn-dark">a</button>

                    </div>


                </div>
                <hr/>
            </div> 
            
                      
        </div>
        
     )) }
            </React.Fragment>     

        )}
     
     export default ListAnnonces;