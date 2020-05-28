import React, { useState } from 'react';
import {Link} from "react-router-dom";
import d_img from '../assets/img/d_img.png';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

//import { deleteAnnonceById } from './redux/actions/annoncesActionCreators';
import { FaWarehouse,FaTachometerAlt,FaCar,FaBatteryFull,
    FaSwatchbook,FaSitemap,FaTrashAlt, FaGasPump, FaGripLines, FaStar, FaEye,FaMapMarkerAlt,FaStopCircle, FaParking} from 'react-icons/fa';
import { deleteAnnonceById } from '../redux/actions/annoncesActionCreator';

    const ListAnnonces = ({ annonces,dispatchDeleteAction }) => { 

        const [selectedAnnonce, setSelectedAnnonce] = useState('');

        const showConfirmationModal = (event, annonceId) => {
            event.preventDefault();
            setSelectedAnnonce(annonceId);
            window.$('#confirmationModal').modal('show');
        };
    
        const handleOnDelete = () => {
            dispatchDeleteAction(selectedAnnonce, () => {
                window.$('#confirmationModal').modal('hide');
                toast.success('Annonce deleted Successfully!');
            }, (message) => {
                window.$('#confirmationModal').modal('hide');
                toast.error(`Error: ${message}`);
            });
        };
    
        return (

            <React.Fragment>
                {          
                   annonces.map(item => (
                    <div key={item.id} className="row" id="result">
                    <div className="col-3">
                    <img src={'public/annonces_images/item.image'} alt="image" id="tel" width="250" className="rounded" />
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
                    <font face="Roboto" size="1"> {item.année} Leipzig, Professionnel</font>
                    </div>
                    <div className="col-2">
           

                    </div>
                    <div className="col-6 divbtn">
                   
             
             
                    <button type="button" className="btn btn-dark">
                    <FaMapMarkerAlt className="mr-1" align="center"/>
                    </button>

                    <button type="button"
                     onClick={(e) => showConfirmationModal(e, item.id)}
                     className="btn btn-dark">
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
       <Modal handleOnDelete={handleOnDelete} />
            </React.Fragment>     

        )}
        const mapDispatchToProps = dispatch => ({
            dispatchDeleteAction: (annonceId, onSuccess, onError) =>
                dispatch(deleteAnnonceById(annonceId, onSuccess, onError))
        });
        export default connect(null, mapDispatchToProps)(ListAnnonces);

     const Modal = ({ handleOnDelete }) => (
        <div className="modal" id="confirmationModal" tabIndex="-1" role="dialog">
            <div role="document" className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmation</h5>
                    </div>
                    <div className="modal-body">
                        <p>Vous étes sure , Vous voulez supprimer cette annonce ?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-secondary">
                            Non
                        </button>
                        <button type="button" data-dismiss="modal" onClick={handleOnDelete} className="btn btn-primary">
                            Oui
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );