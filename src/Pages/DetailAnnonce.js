import React ,{ useState , useEffect }from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import "./style_pages.css";
import offre from "./../assets/img/offre.svg";
import { getAnnonceById } from './../redux/actions/annoncesActionCreator';
import { FaCalendarAlt,FaWarehouse,FaTachometerAlt,FaCar,FaBatteryFull,
    FaSwatchbook,FaSitemap,FaTrashAlt, FaGasPump, FaGripLines, FaStar,FaMapMarkerAlt,FaStopCircle, FaParking, FaEdit, FaPrint, FaUsers, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import moment from 'moment';
import Actualite from '../Components/Actualite';


const DetailAnnonce = ({match,dispatchGetAnnonceById,user}) =>{

    const [ann,setAnnonce]=useState(' ');
    const [images,setImages]=useState([]);
    const [sys_assistance,setSystAssistance]=useState([]);
    const [autre_carac,setAutreCarac]=useState([]);
    const [connect_inter,setConnectInter]=useState([]);
    const [manip_controle,setManipControle]=useState([]);
    const [multimedia,setMultimedia]=useState([]);
    const [particularite,setParticularite]=useState([]);
    const [userInfo,setUserInfo]=useState([]);

    
    useEffect(() => {
      const  annonceId =match.params.id; 
   console.log(annonceId)
           if(annonceId){
               dispatchGetAnnonceById(annonceId,({annonce})=>
        {           console.log(annonce);
                    setAnnonce(annonce);
                   setImages([...images,JSON.parse(annonce.images)])
                   setSystAssistance([...sys_assistance,JSON.parse(annonce.systemes_assistance)])
                   setAutreCarac([...autre_carac,JSON.parse(annonce.autre_equipement_confort)])
                   setConnectInter([...connect_inter,JSON.parse(annonce.connectivite_et_interfaces)])
                   setManipControle([...manip_controle,JSON.parse(annonce.manipulation_controle)])
                   setMultimedia([...multimedia,JSON.parse(annonce.multimedia)])
                   setParticularite([...particularite,JSON.parse(annonce.particularite)])
                   setUserInfo([...userInfo,(annonce.user)])
            
       });

    }
    },[dispatchGetAnnonceById,match.params.id]);

 
return(
    <div className="container">
        <div  id="header_im" >
        
        </div>
  
        <div className="row">
            <div className="col-sm-8 col-12">

                <div className="row">
                    <div className="col-8">
                        <h5>{ann.marque} {ann.modele} {ann.finition}</h5>
                    </div>
                    <div className="col-4">
                        <h5>{ann.prix_vehicule} DH TTC</h5>
                    </div>
                </div>
                <div className="row" id="offre">
                    <div className="col-6">
                    <FaCalendarAlt/> {moment(ann.created_at).format('L')}
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
                        <div><img src={`${ann.image_url}/${item[o]}`}/></div>
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
                <font face="Roboto" size="1">{ann.neuf ? "Neuf" : "Occasion"}</font><br/>
                <span><FaTachometerAlt className="mr-1"/></span> 
                <font face="Roboto" size="1">15 CV</font><br/>
                </div>

                <div className="col-5">
                <span><FaBatteryFull className="mr-1"/></span>
                <font face="Roboto" size="1"> Consommation: {ann.consomation} Km</font><br/>
                <span><FaSwatchbook className="mr-1"/></span>
                <font face="Roboto" size="1">Couleur extérieure: {ann.couleurs_exterieure}</font><br/>
                <span><FaSwatchbook className="mr-1"/></span>
                <font face="Roboto" size="1">Boite automatique</font><br/>
               
                <span><FaSwatchbook className="mr-1"/></span>
                <font face="Roboto" size="1">350 CH</font><br/>
               
                </div>

                <div className="col-4">
                <span><FaCar className="mr-1"/></span>
                <font face="Roboto" size="1">Nombre de portes: {ann.nbr_portes}</font><br/>
                <span><FaGasPump className="mr-1"/></span>
                <font face="Roboto" size="1">Carburant : {ann.carburant}</font><br/>
                <span><FaGasPump className="mr-1"/></span>
                <font face="Roboto" size="1">Matricule : {ann.matricule}</font><br/>
                <span><FaGasPump className="mr-1"/></span>
                <font face="Roboto" size="1">Jantes : 12</font><br/>
              
                </div>
                </div>
                <div className="row" id="div-title">
                        <div className=" col-6 col-sm-6">
                            <h5>DONNEES TECHNIQUES</h5>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-12">
                <table className="table table-striped  table-sm">

                    <tbody>
                    <tr><td>Etat</td><td>{ann.neuf}</td></tr>
                    <tr><td>Origine </td><td>{ann.origine}</td></tr>
                    <tr><td>Dédouanement</td><td>{ann.dedouanement}</td></tr>
                    <tr><td>Année</td><td>{ann.année}</td></tr>
                    <tr><td>Kilométrage</td><td>{ann.kilometrage} km</td></tr>
                    <tr><td>Matricule</td><td>{ann.matricule}</td></tr>
                    <tr><td>Edition</td><td>{ann.edition_special ? "Special" : "Non"}</td></tr>
                    <tr><td>Type de vehicule</td>
                        <td>{ann.type_vehicule}</td>
                    </tr>
                    <tr><td>Nombre de portes</td>
                        <td>{ann.nbr_portes}</td>
                    </tr>
                    <tr><td>Nombre de siége</td>
                        <td>{ann.nbr_sieges}</td>
                    </tr>
                    <tr><td>Carburant</td>
                        <td>{ann.carburant}</td>
                    </tr>
                    <tr><td>Transmission</td>
                        <td>{ann.transmission}</td>
                    </tr>
                    <tr><td>Cylindrée</td>
                        <td>{ann.cylindree}</td>
                    </tr>
                    <tr><td>Puissance fiscale</td>
                        <td>{ann.p_fiscal}</td>
                    </tr>
                    <tr><td>Puissance chevaux</td>
                        <td>{ann.p_chevaux}</td>
                    </tr>
                    <tr><td>Motorisation</td>
                        <td>{ann.motorisation}</td>
                    </tr>
                    <tr><td>Consommation</td>
                        <td>{ann.consomation}</td>
                    </tr>
                    <tr><td>Frais de vignette</td>
                        <td>{ann.frais_vignette}</td>
                    </tr>
                    <tr><td>Couleur intérieur</td>
                        <td>{ann.couleurs_interieur}</td>
                    </tr>
                    <tr><td>Couleur extérieure</td>
                        <td>{ann.couleurs_exterieure}</td>
                    </tr>
                    <tr><td>Design interieur</td>
                        <td>{ann.design_interieur}</td>
                    </tr>
            
                    </tbody>
                    </table>
                </div>
        </div>
        <div className="row" id="div-title">
            <div className=" col-6 col-sm-6">
                <h5>EQUIPEMENTS</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
       <dt>Systemes Assistance :</dt> 
         <dd>-{' '+sys_assistance.toString()}</dd>
         <dt>Autre Caractéristiques :</dt> 
         <dd>-{' '+autre_carac.toString()}</dd>
         <dt>Connectivite et Interfaces :</dt> 
         <dd>-{' '+connect_inter.toString()}</dd>
         <dt>Manipulation et Controle :</dt> 
         <dd>-{' '+manip_controle.toString()}</dd>
         <dt>Multimedia :</dt> 
         <dd>-{' '+multimedia.toString()}</dd>
         <dt>Particularite :</dt> 
         <dd>-{' '+particularite.toString()}</dd>
          
    </div>

    </div>

    <div className="row" id="div-title">
            <div className=" col-6 col-sm-6">
                <h5>DESCRIPTION</h5>
            </div>
    </div>
    <div className="row">
        <div className="col-sm-12 col-12">
            <p id="div_range">{ann.description_vehicule}</p>

        </div>

    </div>
 </div>
 </div>
</div>

<div className="col-sm-4 col-12"> 
{userInfo.map(item=>(
    <div className ="row d-flex flex-nowrap" id="div_range">
    
        <div className="col-sm-3 profile_img ">
     
           { (item.nom_société)?
            item.nom_société :
            item.nom +' '+item.prenom}
            
       
        </div>
        <div className="col-sm-9">
        { (item.nom_société)?
            item.nom_société :
            item.nom +' '+item.prenom}  <br/>
       {item.user_type}<br/> 
        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
        </div>
    </div>))}
    <div className="row d-flex flex-nowrap">
        <div className="col-sm-4 asidebtns"><button type="button" className="btn btn-danger text-light w-100">
            <FaPhoneAlt size={20} className="ic"/> APPEL MOI</button></div>
        <div className="col-sm-4 asidebtns"><button type="button" className="btn btn-success text-light w-100">
        <FaWhatsapp size={20} className="ic"/> PAR WHATSAPP</button></div>
        <div className="col-sm-4 asidebtns"><button type="button" className="btn btn-dark text-light w-100">
        <FaEnvelope size={20} className="ic"/> PAR EMAIL</button></div>

    </div>

   <div className="row">
        <div className="col-sm-12 col-12 asidebtns">
            <button className="btn btn-warning w-100"><FaParking size={20}/> SAUVEGARDER L'ANNONCE</button><br/>
            <button className="btn btn-dark text-light w-100"><FaMapMarkerAlt size={20}/> VERIFIER LA DISTANCE</button><br/>
            <button className="btn btn-warning w-100"><FaPrint size={20}/> IMPRIMER L'ANNONCE</button><br/>
            <button className="btn btn-dark w-100">COMPARER</button><br/>
            <button className="btn btn-warning w-100"><FaUsers size={20}/> RECOMMANDER</button><br/>
        </div>
    </div>          

</div>
    
</div>
<Actualite/>
<br/>



</div>

)
}

const mapDispatchToProps = dispatch => ({
    dispatchGetAnnonceById: (annonceId, onSuccess) =>
        dispatch(getAnnonceById (annonceId, onSuccess))
});
const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(DetailAnnonce);
