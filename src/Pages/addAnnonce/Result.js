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

      fd.append('en_etat_de_marche',state.yourDetails.en_etat_de_marche)
        fd.append('date_de_vente',state.yourDetails.date_de_vente)
        fd.append('ville_de_vente',state.yourDetails.ville_de_vente)
        fd.append('couleurs_exterieure',state.yourDetails.couleurs_exterieure)
        fd.append('design_interieur',state.yourDetails.design_interieur)
        fd.append('couleurs_interieur',state.yourDetails.couleurs_interieur)
        fd.append('metalisee',state.yourDetails.metalisee)
        fd.append('systemes_assistance',state.yourDetails.systemes_assistance)
        fd.append('metalisee',state.yourDetails.metalisee)
        fd.append('airbag',state.yourDetails.airbag)
        fd.append('type_de_phare',state.yourDetails.type_de_phare)
        fd.append('faisceau_complet',state.yourDetails.faisceau_complet)
        fd.append('lumiere_allumees',state.yourDetails.lumiere_allumees)
        fd.append('eclairage_adaptatif',state.yourDetails.eclairage_adaptatif)
        fd.append('protection_anti_vol',state.yourDetails.protection_anti_vol)
        fd.append('control_climat',state.yourDetails.control_climat)
        fd.append('capteur_stationnement',state.yourDetails.capteur_stationnement)
        fd.append('assistance_stationnement_acoustique',state.yourDetails.assistance_stationnement_acoustique)
        fd.append('assistance_stationnement_visuel',state.yourDetails.assistance_stationnement_visuel)
        fd.append('siege_chauffants_electriques',state.yourDetails.siege_chauffants_electriques)
        fd.append('siege_reglables_electriques',state.yourDetails.siege_reglables_electriques)
        fd.append('autres_caracteristiques',state.yourDetails.autres_caracteristiques)
        fd.append('autre_equipement_confort',state.yourDetails.autre_equipement_confort)
        fd.append('multimedia',state.yourDetails.multimedia)
        fd.append('manipulation_controle',state.yourDetails.manipulation_controle)
        fd.append('connectivite_et_interfaces',state.yourDetails.connectivite_et_interfaces)
        fd.append('affichage_du_cockpit',state.yourDetails.affichage_du_cockpit)
        fd.append('pneus',state.yourDetails.pneus)
        fd.append('service_de_depannage',state.yourDetails.service_de_depannage)
        fd.append('particularite',state.yourDetails.particularite)
        fd.append('attelage_remorque',state.yourDetails.attelage_remorque)
        fd.append('historique_vehicule',state.yourDetails.historique_vehicule)
        fd.append('tva',state.yourDetails.tva)
        fd.append('lien_youtube',state.yourDetails.lien_youtube)
        fd.append('titre_vehicule',state.yourDetails.titre_vehicule)
        fd.append('description_vehicule',state.yourDetails.description_vehicule)
        fd.append('prix_vehicule',state.yourDetails.prix_vehicule)
        fd.append('prix_fixe',state.yourDetails.prix_fixe)
     
      fd.append('user_id',state.yourDetails.user_id)
      fd.append('nom',state.yourDetails.nom)
      fd.append('prenom',state.yourDetails.prenom)
      fd.append('titre_civilité',state.yourDetails.titre_civilité)
      fd.append('tel',state.yourDetails.tel)
      fd.append('adresse',state.yourDetails.adresse)
      fd.append('ville',state.yourDetails.code_postal)
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

