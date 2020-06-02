import React from "react";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createAnnonce } from '../../redux/actions/annoncesActionCreator';
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Result = ({ props,history, dispatchCreateAnnonceAction })  => {
  const { state } = useStateMachine(updateAction);

  const testsubmit = e =>{
    console.log(state.yourDetails.images[0].name);
    console.log(state.yourDetails.images[1].name);
    console.log(state.yourDetails.images[2].name);
  }
  const handleOnSubmit = event => {
    event.preventDefault();
      //  const data = { title, description, type, active ,user_id ,nombre_de_vue};
      //  const data = { state };
     

      //const data = (state.yourDetails) ;
      const fd = new FormData();
      fd.append('neuf',state.yourDetails.neuf)
      fd.append('origine',state.yourDetails.origine)
      fd.append('dedouanement',state.yourDetails.dedouanement)
      fd.append('marque',state.yourDetails.marque)
      fd.append('modele',state.yourDetails.modele)
      fd.append('finition',state.yourDetails.finition)
      fd.append('année',state.yourDetails.année)
      fd.append('mois',state.yourDetails.mois)
      fd.append('kilometrage',state.yourDetails.kilometrage)
      fd.append('matricule',state.yourDetails.matricule)
      fd.append('edition_special',state.yourDetails.edition_special)
      fd.append('type_vehicule',state.yourDetails.type_vehicule)
      /*let files=state.yourDetails.images;
      for (let i=0 ;i<files.length; i++){
        fd.append(`images[${i}]`,files[i])

      }*/
     // fd.append('image',state.yourDetails.images[0].name)
      //let files=state.yourDetails.images;
      fd.append('images[]',state.yourDetails.images[0],state.yourDetails.images[0].name)
      fd.append('images[]',state.yourDetails.images[1],state.yourDetails.images[1].name)
    fd.append('images[]',state.yourDetails.images[2],state.yourDetails.images[2].name)
    fd.append('images[]',state.yourDetails.images[3],state.yourDetails.images[3].name)
    fd.append('images[]',state.yourDetails.images[4],state.yourDetails.images[4].name)
   
   
      fd.append('nbr_portes',state.yourDetails.nbr_portes)
      fd.append('nbr_sieges',state.yourDetails.nbr_sieges)
      fd.append('carburant',state.yourDetails.carburant)
      fd.append('transmission',state.yourDetails.transmission)
      fd.append('cylindree',state.yourDetails.cylindree)
      fd.append('p_fiscal',state.yourDetails.p_fiscal)
      fd.append('p_chevaux',state.yourDetails.p_chevaux)
      fd.append('motorisation',state.yourDetails.motorisation)
      fd.append('consomation',state.yourDetails.consomation)
      fd.append('frais_vignette',state.yourDetails.frais_vignette)
     
      fd.append('user_id',state.yourDetails.user_id)
      fd.append('nom',state.yourDetails.nom)
      fd.append('prenom',state.yourDetails.prenom)
      fd.append('titre_civilité',state.yourDetails.titre_civilité)
      fd.append('tel',state.yourDetails.tel)
      fd.append('adresse',state.yourDetails.adresse)
      fd.append('ville',state.yourDetails.ville)
    
      const data = {fd} ;
      


            dispatchCreateAnnonceAction(fd, () => {
                toast.warn('Annonce crée avec succée!');
                history.replace('/annonces');
            }, (message) => toast.error(`Error: ${message}`));
        }
        //const res=JSON.stringify(state.yourDetails);
  return (
    <div className="container">
      <h2>Veuillez confirmer votre formulaire</h2>
  
   <div className="container">
     <div className="row">
     <div className="col-sm-6">
      <ul class="list-group list-group-flush">
  <li className="list-group-item">Etat:{JSON.stringify(state.yourDetails.neuf)}</li>
  <li className="list-group-item">Origine:{JSON.stringify(state.yourDetails.origine)}</li>
    <li className="list-group-item">Douanement:{JSON.stringify(state.yourDetails.dedouanement)} </li>
    <li className="list-group-item">marque:{JSON.stringify(state.yourDetails.marque)} </li>
    <li className="list-group-item">modele: {JSON.stringify(state.yourDetails.modele)}</li>
    <li className="list-group-item">finition:{JSON.stringify(state.yourDetails.finition)} </li>
    <li className="list-group-item">année:{JSON.stringify(state.yourDetails.année)} </li>
    <li className="list-group-item">mois: {JSON.stringify(state.yourDetails.mois)}</li>
    <li className="list-group-item">kilometrage: {JSON.stringify(state.yourDetails.kilometrage)} </li>
    <li className="list-group-item">matricule:{JSON.stringify(state.yourDetails.matricule)} </li>
    <li className="list-group-item">edition special:{JSON.stringify(state.yourDetails.edition_special)} </li>
    

</ul></div>
<div className="col-sm-6">
<ul className="list-group list-group-flush">
<li className="list-group-item">type de vehicule: {JSON.stringify(state.yourDetails.type_vehicule)}</li>
    <li className="list-group-item">nombre de portes:{JSON.stringify(state.yourDetails.nbr_portes)} </li>
    <li className="list-group-item">nombre de sieges: {JSON.stringify(state.yourDetails.nbr_sieges)}</li>
    <li className="list-group-item">carburant: {JSON.stringify(state.yourDetails.carburant)}</li>
    <li className="list-group-item">transmission:{JSON.stringify(state.yourDetails.transmission)} </li>
    <li className="list-group-item">cylindree:{JSON.stringify(state.yourDetails.cylindree)} </li>
    <li className="list-group-item">puissance fiscal: {JSON.stringify(state.yourDetails.p_fiscal)}</li>
    <li className="list-group-item">puissance chevaux:{JSON.stringify(state.yourDetails.p_chevaux)} </li>
    <li className="list-group-item">motorisation:{JSON.stringify(state.yourDetails.motorisation)} </li>
    <li className="list-group-item">consomation:{JSON.stringify(state.yourDetails.consomation)} </li>
    <li className="list-group-item">frais vignette:{JSON.stringify(state.yourDetails.frais_vignette)} </li>
    <li className="list-group-item">adresse:{JSON.stringify(state.yourDetails.adresse)} </li>
    <li className="list-group-item">ville:{JSON.stringify(state.yourDetails.ville)} </li>

</ul>
     </div> 
</div>
      
      <button  type="button" onClick={handleOnSubmit} className="btn btn-warning mb-5 float-right btn-lg">Valider</button>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  dispatchCreateAnnonceAction: (data, onSuccess, onError) =>
      dispatch(createAnnonce(data, onSuccess, onError)),

});
export default connect(null, mapDispatchToProps)(Result);

