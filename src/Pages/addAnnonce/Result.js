import React from "react";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createAnnonce } from '../../redux/actions/annoncesActionCreator';
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Result = ({ props,history, dispatchCreateAnnonceAction })  => {
  const { state } = useStateMachine(updateAction);

  const handleOnSubmit = event => {
    event.preventDefault();
      //  const data = { title, description, type, active ,user_id ,nombre_de_vue};
      //  const data = { state };
     

      const data = (state.yourDetails) ;
            dispatchCreateAnnonceAction(data, () => {
                toast.warn('Annonce crée avec succée!');
                history.replace('/annonces');
            }, (message) => toast.error(`Error: ${message}`));
        }
        const res=JSON.stringify(state.yourDetails);
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
<div classNameName="col-sm-6">
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

