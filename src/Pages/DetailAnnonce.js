import React ,{ useState , useEffect }from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import "./style_pages.css";
import offre from "./../assets/img/offre.svg";
import { getAnnonceById } from './../redux/actions/annoncesActionCreator';
import { FaCalendarAlt,FaWarehouse,FaTachometerAlt,FaCar,FaBatteryFull,
    FaSwatchbook,FaSitemap,FaTrashAlt, FaGasPump, FaGripLines, FaStar,FaMapMarkerAlt,FaStopCircle, FaParking, FaEdit } from 'react-icons/fa';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const DetailAnnonce = ({match,dispatchGetAnnonceById}) =>{

    const [ann,setAnnonce]=useState(' ');
    const [images,setImages]=useState([]);
    const [modele,setModele]=useState(' ');
    const [finition,setFinition]=useState(' ');
    
    useEffect(() => {
      const  annonceId =match.params.id; 
   
           if(annonceId){
               dispatchGetAnnonceById(annonceId,({annonce})=>
        {           console.log(annonce);
                    setAnnonce(annonce);
                   setImages([...images,JSON.parse(annonce.images)])
            
       });

    }
    },[dispatchGetAnnonceById,match.params.id]);

 
return(
    <div className="container">
        <div  id="header_im" >
        
        </div>
  
        <div className="row">
            <div className="col-8">

                <div className="row">
                    <div className="col-8">
                        <h5>{ann.marque} {ann.modele} {ann.finition}</h5>
                    </div>
                    <div className="col-4">
                        <h5>{ann.prix_vehicule} DH</h5>
                    </div>
                </div>
                <div className="row" id="offre">
                    <div className="col-6">
                    <FaCalendarAlt/> {ann.created_at} 
                    </div>
                    <div className="col-6">
                    <img src={offre} className="float-right" />
                    </div>
                </div>
                <div className="row justify-content-center pt-3">
                    <div className="col-10">
                    <Carousel>
                    {images.map((item,i)=>(                             
                        item.map((e,o)=>(
                        <div><img src={`https://autobackend.devcom-media.com/storage/annonces_images/${item[o]}`}/></div>
                                ))
                                )

                        )}
                    </Carousel>
                    <div id="div-title">
                  
                        </div>
                    <div className="row">
                <div className="col-3">
                <span><FaWarehouse className="mr-1"/></span> 
                <font face="Roboto" size="1">{ann.date_de_vente}</font><br/>
                <span><FaTachometerAlt className="mr-1"/></span> 
                <font face="Roboto" size="1">{ann.kilometrage} Km</font><br/>
                <span><FaCar className="mr-1"/></span> 
                <font face="Roboto" size="1">{ann.neuf} Km</font><br/>
                <span><FaTachometerAlt className="mr-1"/></span> 
                <font face="Roboto" size="1">{ann.kilometrage} Km</font><br/>
                </div>

                <div className="col-5">
                <span><FaBatteryFull className="mr-1"/></span>
                <font face="Roboto" size="1"> Consommation: {ann.consomation} Km</font><br/>
                <span><FaSwatchbook className="mr-1"/></span>
                <font face="Roboto" size="1">Couleur extérieure: {ann.couleurs_exterieure}</font><br/>
                <span><FaSwatchbook className="mr-1"/></span>
                <font face="Roboto" size="1">Couleur extérieure: {ann.couleurs_exterieure}</font><br/>
               
                <span><FaSwatchbook className="mr-1"/></span>
                <font face="Roboto" size="1">Couleur extérieure: {ann.couleurs_exterieure}</font><br/>
               
                </div>

                <div className="col-4">
                <span><FaCar className="mr-1"/></span>
                <font face="Roboto" size="1">Nombre de portes: {ann.nbr_portes}</font><br/>
                <span><FaGasPump className="mr-1"/></span>
                <font face="Roboto" size="1">Carburant : {ann.carburant}</font><br/>
                <span><FaGasPump className="mr-1"/></span>
                <font face="Roboto" size="1">Carburant : {ann.carburant}</font><br/>
                <span><FaGasPump className="mr-1"/></span>
                <font face="Roboto" size="1">Carburant : {ann.carburant}</font><br/>
              
                </div>
                </div>
                <div className="row" id="div-title">
                        <div className="col-6">
                            <h5>DONNEES TECHNIQUES</h5>
                        </div>
                </div>
    
                            <div className="col-12">
                            <table class="table table-striped table-sm">

                                <tbody>
                                <tr>
                                    <td>Etat</td>
                                    <td>{ann.neuf}</td>
                                </tr>
                                <tr>
                                  <td>Origine </td>
                                    <td>{ann.origine}</td>
                                </tr>
                                <tr>
                                    <td>Dédouanement</td>
                                    <td>{ann.dedouanement}</td>
                                </tr>
                                <tr>
                                    <td>Année</td>
                                    <td>{ann.année}</td>
                                </tr>
                                <tr>
                                  <td>Kilométrage</td>
                                    <td>{ann.kilometrage} km</td>
                                </tr>
                                <tr>
                                    <td>Matricule</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                    <td>Edition</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                  <td>Type de vehicule</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                    <td>Nombre de portes</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                    <td>Nombre de siége</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                  <td>Carburant</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                    <td>Transmission</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                    <td>Cylindre</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                  <td>Puissance fiscale</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                    <td>Puissance chevaux</td>
                                    <td>{ann.matricule}</td>
                                </tr>
                                <tr>
                                    <td>Motorisation</td>
                                    <td>Maintenant</td>
                                </tr>
                                <tr>
                                  <td>Consommation</td>
                                    <td>Tout cuir , Brun</td>
                                </tr>
                                <tr>
                                    <td>Frais de vignette</td>
                                    <td>Avant,Arrière,Caméra</td>
                                </tr>
                                <tr>
                                    <td>Couleur intérieur</td>
                                    <td>20072-MA</td>
                                </tr>
                                <tr>
                                  <td>Couleur extérieure</td>
                                    <td>Break</td>
                                </tr>
                                <tr>
                                    <td>Design interieur</td>
                                    <td>ca. 4,5/100km (combinèe)</td>
                                </tr>
                        
                                </tbody>
                                </table>
                            </div>

                        </div>
                 
                    
                    </div>
                </div>
    
    </div>
</div>

)
}

const mapDispatchToProps = dispatch => ({
    dispatchGetAnnonceById: (annonceId, onSuccess) =>
        dispatch(getAnnonceById (annonceId, onSuccess))
});
export default connect(null, mapDispatchToProps)(DetailAnnonce);
