import React, { useState,useEffect } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const system_assistance=["4x4","ABS","Alert de franchisement","Antidémarrage",
                        "Capteur de lumière","Eclairage adaptatif","ESP",
                        "Feux de jour","Phare antibrouillard","Régulateur de vitesse",
                        "Assistance au freinage","Verrouillage centralisé sans clé",
                        "Systeme antipatinage","Régulateur de vitesse adaptatif",
                        "Systémes d'avertissement de fatigue","Aide a la vision nocturne",
                        "Controle de traction (ASR)","Systeme d'assistance au angles",
                        "Assistance au changement de voie","Autom rétroviseur intérieur occultant",
                        "Rennaissances des panneaux de signalisation","Assistance au démarrage en cote",
                        "Systeme de controle de limite de vitesse","Systeme d'avertissement de distance"];
const autre_caractérique=["Siéges sport","Accoudoir","Support lambaire","Siéges de massage","Ventillation de siége","Siége passager rabattable à plat"]
const autre_equipement=["Fenétre electrique","Hayon electrique","Verrouillage central sans clé","Capteur de pluie",
                        "Eclairage ambiant","Rétroviseur latéral electrique","Verrouillage centralisé","Capteur de lumiére",
                        "Direction assistée","Volant en cuir"];
const multimedia=["Turner / Radio","Radio DAB","Lecteur CD","Télé","Systémes audio","Systéme de navigation"];
const manipul_control=["Ecran tactile","Commande vocale","Volant multifonction","Kits mains libre"];
const connectivité_interfaces=["Port USB","Bluetooth","Appple Car Play","Android audio","Point d’accés WLAN/WIFI",
                              "Streaming de musique intégré","Charge par induction pour smartphones"];
const pneus=["Pneus en alliage","Pneus d’été","Pneus d’hiver","Pneus toutes saisons","Surveillange de la pression des pneus"]
const particularité=["Pack d’hiver","Pack fumeur","Pack sport","Suspension sport","Suspention pneumatique","Barre toit",
                      "Taxi","Toit ouvrant","Gallerie de toit","Accessible aux handicapés","Toit panoramique"]

const Step2 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors,reset } = useForm({
    defaultValues: {}
  });
  const { push } = useHistory();
  const onSubmit = (data, e) => {
    console.log(data);
    action(data);
    push("/step3");
  };

  /*const userInfo=localStorage.getItem('USER_INFO');
  const user=JSON.parse(userInfo);
  const userId=JSON.stringify(user.userId);*/

return (
<div className="container">
<form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
{/* SECTION PERSONALISATION */}
 <section className="personalisation">
    <div className="row" id="div-title">
      <div className="col-12 col-sm-6"><h5>PERSONALISATION</h5></div>
    </div>
    <div className="row" >
    <div className="col-12 col-sm-4 form-group">
    <label><h6>Couleur extérieure</h6></label>
    
        <div id="div_range">
        <select className="form-control "  name="couleur_interieur" ref={register}>
            <option className="noir">Noir</option>
            <option className="bege">Bège</option>
            <option className="rouge">Rouge</option>
            <option className="bleu">Bleu</option>
            <option className="blanc">Blanc</option>
            <option className="jaune">Jaune</option>
            <option className="vert">Vert</option>
            <option className="grix_fonce">Grix foncé</option>
            <option className="grix_claire">Grix Claire</option>
            <option className="blanc_casse">Blanc Cassé</option>
            <option className="marron">Marron</option>
            
           </select>
        
          <ErrorMessage errors={errors} name="couleur_interieur" as="p" />
        </div>
        </div>
        <div className=" col-12  col-sm-4 form-group">
        <label><h6>Design Intérieur</h6></label>
        <div id="div_range">
            <input type="text" name="design_interieur" ref={register}
            className="form-control" id="inputfo"/>
             <ErrorMessage errors={errors} name="design_interieur" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Couleur de l'interieur</h6></label>
        <div id="div_range" className="mb-0">
        <select className="form-control "  name="couleur_interieur" ref={register}>
            <option>Noir</option>
            <option>Bège</option>
            <option>Rouge</option>
            <option>Blanc Cassé</option>
            <option>Grix</option>
            <option>Marron</option>
            
           </select> <ErrorMessage errors={errors} name="cylindree" as="p" />
        </div>
        </div>
                

</div>
<div className="form-check ">
      <input className="form-check-input" type="checkbox" name="metalisee" value="option1"  ref={register} />
      <label className="form-check-label">Metalisé</label>
  </div>
  </section>
{/*END SECTION PERSONALISATION */}


{/*SECTION SECURITE */}
<section className="securité">
<div className="row" id="div-title">
      <div className="col-12 col-sm-6"><h5>SECURITE</h5></div>
    </div> 
    <label><h6>Systeme d'assistance</h6></label>
        
        <div className="row" id="div_range">
            {system_assistance.map((option,i) => (
                    <div className="col-sm-3">
                    <div className="form-check ">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name={`options[${i}]`}
                        value={option}
                        ref={register}
                         />
                        <label className="form-check-label">{option}</label>
                    </div>
  
                </div>
            ))}
    </div>
    <br/>
    <h6>Protection des occupants</h6>
    <br/>
    <label><h6>Airbags</h6></label>
    <div className="row flex-nowrap" >
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3" id="div_range">
             <select className="form-control "  name="airbags" ref={register}>
            <option>Airbags Conducteur</option>            
           </select> <ErrorMessage errors={errors} name="airbags" as="p" />
     </div>
   
    <div className="col-sm-4 mt-3 pt-3 pb-5 ml-2" id="div_check_inline">
        <input type="checkbox" name="airbags" ref={register}
         className="form-check-input"/>
            <ErrorMessage errors={errors} name="airbags" as="p" />
            <label className="form-check-label">Isofix (point d'ancrage pour siége enfant)</label>
            </div>
    <div className="col-sm-4 mt-3 pt-3 pb-5" id="div_check_inline">
            <input type="checkbox" name="airbags" ref={register}
             className="form-check-input"/>
                <ErrorMessage errors={errors} name="airbags" as="p" />
                <label className="form-check-label">Siège passager point isofix</label>
                </div>
        </div>

        <br/>
<h6>Lumiére et vue</h6><br/>
    <label><h6>Type de phare</h6></label>
    <div className="row flex-nowrap" >
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3" id="div_range">
        <select className="form-control "  name="type_de_phare" ref={register}>
            <option>Phare laser</option>            
           </select> <ErrorMessage errors={errors} name="type_de_phare" as="p" />
      </div>
    <div className="col-sm-8 mt-3 pt-3 pb-5 ml-2" id="div_check_inline">
        <input type="checkbox" name="type_de_phare" ref={register}
         className="form-check-input"/>
            <ErrorMessage errors={errors} name="type_de_phare" as="p" />
            <label className="form-check-label">Systéme de lave phare</label>
    </div>
</div>
<br/>

    <div className="row flex-nowrap">
        <div className="col-sm-8"><label><h6>Faisceau complet</h6></label></div>
        <div className="col-sm-4"><label><h6>Lumiére allumées toute la journée</h6></label></div>
    </div>
    <div className="row flex-nowrap">
      
    <div className="col-sm-4 form-check-inline mr-0 pl-0" id="div_check_inline">
        <input type="checkbox" name="faisceau_complet" ref={register}
         className="form-check-input"/>
            <ErrorMessage errors={errors} name="faisceau_complet" as="p" />
            <label className="form-check-label">Phare de route sans éblouissement</label>
            </div>
    <div className="col-sm-4 form-check-inline pl-0" id="div_check_inline">
            <input type="checkbox" name="faisceau_complet" ref={register}
             className="form-check-input"/>
                <ErrorMessage errors={errors} name="faisceau_complet" as="p" />
                <label className="form-check-label">Assistance aux feux de route</label>
                </div>
         
  
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3 mt-0"  id="div_range">
       <select className="form-control "  name="lumiere_allumees" ref={register}>
        <option>Lumiére allumées toute la journée</option>            
        </select> <ErrorMessage errors={errors} name="lumiere_allumees" as="p" />
  
     </div>
        </div>
        <br/>
        <label><h6>Eclairage adaptatif</h6></label>
    <div className="row flex-nowrap" >
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3" id="div_range">
        <select className="form-control"  name="eclairage_adaptatif" ref={register}>
            <option>Faux de vitrage adaptatif</option>            
           </select> <ErrorMessage errors={errors} name="eclairage_adaptatif" as="p" />
      </div>
    <div className="col-sm-8 mt-3 pt-3 pb-5 ml-2" id="div_check_inline">
        <input type="checkbox" name="eclairage_adaptatif" ref={register}
         className="form-check-input"/>
            <ErrorMessage errors={errors} name="eclairage_adaptatif" as="p" />
            <label className="form-check-label">Feu de bouillard</label>
    </div>
</div><br/>
<label><h6>Protection anti-vol</h6></label>
   <div className="row h-100" >
    <div className="col-sm-3  my-auto" id="div_check_inline">
    <div className="form-check my-auto">
        <input className="form-check-input"  type="checkbox" name="protection_antivol" ref={register}/>
        <label className="form-check-label">Systéme d'alarme</label>
    </div>
  </div>
  <div className="col-sm-9 my-auto" id="div_check_inline">
    <div className="form-check my-auto">
        <input className="form-check-input"  type="checkbox" name="protection_antivol" ref={register}/>
        <label className="form-check-label">Immobilisateur de moteur</label>
    </div>
  </div>
</div>
</section>
{/*END SECTION SECURITE */}


{/*SECTION CONFORT */}
<section className="confort">
    <div className="row" id="div-title">
      <div className="col-12 col-sm-6"><h5>CONFORT</h5></div>
    </div>
    <label><h6>Controle de climat</h6></label>
    <div className="row flex-nowrap" >
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3" id="div_range">
             <select className="form-control "  name="control_climat" ref={register}>
            <option>Climatisation automatique</option>            
           </select> <ErrorMessage errors={errors} name="control_climat" as="p" />
     </div>
   
    <div className="col-sm-2 mt-3 pt-3 pb-5 ml-2" id="div_check_inline">
        <input type="checkbox" name="control_climat" ref={register} className="form-check-input"/>
            <ErrorMessage errors={errors} name="control_climat" as="p" />
            <label className="form-check-label">Chaufage auxiliaire </label>
            </div>
    <div className="col-sm-2 mt-3 pt-3 pb-5 " id="div_check_inline">
            <input type="checkbox" name="control_climat" ref={register} className="form-check-input"/>
                <ErrorMessage errors={errors} name="control_climat" as="p" />
                <label className="form-check-label">Phare brise chauffant</label>
    </div>
    <div className="col-sm-4 mt-3 pt-3 pb-5" id="div_check_inline">
            <input type="checkbox" name="control_climat" ref={register} className="form-check-input"/>
                <ErrorMessage errors={errors} name="control_climat" as="p" />
                <label className="form-check-label">Volant chauffant</label>
    </div>
</div>{/*end div row controle de climat */}
<br/>
<div className="row">
        <div className="col-sm-4"><label><h6>Capteur de stationnement</h6></label></div>
        <div className="col-sm-4"><label><h6>Assistance de stationnement acoustique</h6></label></div>
        <div className="col-sm-4"><label><h6>Assistance de stationnement visuel</h6></label></div>
</div>
<div className="row flex-nowrap">
        <div className="col-sm-4  mt-3 pt-3 pb-5 mr-2" id="div_check_inline">
          <input type="checkbox" name="capteur_stationnement" ref={register} className="form-check-input"/>
                <ErrorMessage errors={errors} name="capteur_stationnement" as="p" />
                <label className="form-check-label">Systéme de pilotage automatique</label>
        </div>
        <div className="col-sm-2  mt-3 pt-3 pb-5" id="div_check_inline">
          <input type="checkbox" name="assistance_stationnement_acoustique" ref={register} className="form-check-input"/>
                <ErrorMessage errors={errors} name="assistance_stationnement_acoustique" as="p" />
                <label className="form-check-label">De face</label>
        </div>
        <div className="col-sm-2  mt-3 pt-3 pb-5 mr-2" id="div_check_inline">
          <input type="checkbox" name="assistance_stationnement_acoustique" ref={register} className="form-check-input"/>
                <ErrorMessage errors={errors} name="assistance_stationnement_acoustique" as="p" />
                <label className="form-check-label">Arriére</label>
        </div>
        <div className="col-sm-2  mt-3 pt-3 pb-5" id="div_check_inline">
          <input type="checkbox" name="assistance_stationnement_visuel" ref={register} className="form-check-input"/>
                <ErrorMessage errors={errors} name="assistance_stationnement_visuel" as="p" />
                <label className="form-check-label">Caméras</label>
        </div>
        <div className="col-sm-2  mt-3 pt-3 pb-5" id="div_check_inline">
          <input type="checkbox" name="assistance_stationnement_visuel" ref={register} className="form-check-input"/>
                <ErrorMessage errors={errors} name="assistance_stationnement_visuel" as="p" />
                <label className="form-check-label">Caméras 360°</label>
        </div>
</div>{/*end row capteur de stationemnent */}
<br/>
<label><h6>Les places</h6></label><br/><br/>
<div className="row">
        <div className="col-sm-4"><label><h6>Siége chauffant éléctriques</h6></label></div>
        <div className="col-sm-4"><label><h6>Siége reglables éléctriques</h6></label></div>
       
</div>
<div className="row flex-nowrap">
    <div className="col-sm-2  mt-3 pt-3 pb-5" id="div_check_inline">
        <input type="checkbox" name="siege_chauffants_electriques" ref={register} className="form-check-input"/>
          <ErrorMessage errors={errors} name="siege_chauffants_electriques" as="p" />
          <label className="form-check-label">De face</label>
    </div>
    <div className="col-sm-2  mt-3 pt-3 pb-5 mr-2" id="div_check_inline">
      <input type="checkbox" name="siege_chauffants_electriques" ref={register} className="form-check-input"/>
            <ErrorMessage errors={errors} name="siege_chauffants_electriques" as="p" />
            <label className="form-check-label">Arriére</label>
    </div>
    <div className="col-sm-2  mt-3 pt-3 pb-5" id="div_check_inline">
      <input type="checkbox" name="siege_reglables_electriques" ref={register} className="form-check-input"/>
            <ErrorMessage errors={errors} name="siege_reglables_electriques" as="p" />
            <label className="form-check-label">De face</label>
    </div>
    <div className="col-sm-2  mt-3 pt-3 pb-5" id="div_check_inline">
      <input type="checkbox" name="siege_reglables_electriques" ref={register} className="form-check-input"/>
            <ErrorMessage errors={errors} name="siege_reglables_electriques" as="p" />
            <label className="form-check-label">Arriére</label>
    </div>
</div>{/*end row les places */}
<br/>
<label><h6>Autre caractérique</h6></label>
        
        <div className="row" id="div_range">
            {autre_caractérique.map((option,i) => (
                    <div className="col-sm-2">
                    <div className="form-check ">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name={`options[${i}]`}
                        value={option}
                        ref={register}
                         />
                        <label className="form-check-label">{option}</label>
                    </div>
  
                </div>
            ))}
    </div>
    <br/>
    <label><h6>Autre Equipement de confort</h6></label>
        
        <div className="row" id="div_range">
            {autre_equipement.map((option,i) => (
                    <div className="col-sm-3">
                    <div className="form-check ">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name={`options[${i}]`}
                        value={option}
                        ref={register}
                         />
                        <label className="form-check-label">{option}</label>
                    </div>
  
                </div>
            ))}
    </div>
</section>
{/*END SECTION CONFORT */}

{/*SECTION INFOS DIVERS */}
<section className="infodivers">
    <div className="row" id="div-title">
      <div className="col-12 col-sm-6"><h5>INFOS DIVERS</h5></div>
    </div>
    <label><h6>Multimedia</h6></label>
        
        <div className="row" id="div_range">
            {multimedia.map((option,i) => (
                    <div className="col-sm-3">
                    <div className="form-check ">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name={`options[${i}]`}
                        value={option}
                        ref={register}
                         />
                        <label className="form-check-label">{option}</label>
                    </div>
  
                </div>
            ))}
    </div>
    <br/>
    <label><h6>Manipulation et Controle</h6></label>
        
        <div className="row" id="div_range">
            {manipul_control.map((option,i) => (
                    <div className="col-sm-3">
                    <div className="form-check ">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name={`options[${i}]`}
                        value={option}
                        ref={register}
                         />
                        <label className="form-check-label">{option}</label>
                    </div>
  
                </div>
            ))}
    </div>
    <br/>
    <label><h6>Connectivité et Interfaces</h6></label>
        
        <div className="row" id="div_range">
            {connectivité_interfaces.map((option,i) => (
                    <div className="col-sm-3">
                    <div className="form-check ">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name={`options[${i}]`}
                        value={option}
                        ref={register}
                         />
                        <label className="form-check-label">{option}</label>
                    </div>
  
                </div>
            ))}
    </div>
    <br/>

<label><h6>Affichage du cockpit</h6></label>
   <div className="row h-100" >
    <div className="col-sm-3  my-auto" id="div_check_inline">
    <div className="form-check my-auto">
        <input className="form-check-input"  type="checkbox" name="affichage_du_cockpit" ref={register}/>
        <label className="form-check-label">Ordinateur de bord</label>
    </div>
  </div>
  <div className="col-sm-3 my-auto" id="div_check_inline">
    <div className="form-check my-auto">
        <input className="form-check-input"  type="checkbox" name="affichage_du_cockpit" ref={register}/>
        <label className="form-check-label">Cockpit numerique</label>
    </div>
  </div>
  <div className="col-sm-6 my-auto" id="div_check_inline">
    <div className="form-check my-auto">
        <input className="form-check-input"  type="checkbox" name="affichage_du_cockpit" ref={register}/>
        <label className="form-check-label">Affichage tète haute</label>
    </div>
  </div>
</div>
</section>
{/*END SECTION INFOS DIVERS */}

{/*SECTION SUPLEMENTS */}
<section className="infodivers">
    <div className="row" id="div-title">
      <div className="col-12 col-sm-6"><h5>SUPLEMENTS</h5></div>
    </div>
    <label><h6>Pneus</h6></label>
    <div className="row d-flex justify-content-around flex-nowrap" id="div_range">
            {pneus.map((option,i) => (
                    <div >
                    <div className="form-check ">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name={`options[${i}]`}
                        value={option}
                        ref={register}
                         />
                        <label className="form-check-label">{option}</label>
                    </div>
  
                </div>
            ))}
    </div>
    <br/>
  

    <div className="row flex-nowrap">
        <div className="col-sm-8"><label><h6>Service de dépannage</h6></label></div>
        <div className="col-sm-4"><label><h6>Jantes</h6></label></div>
    </div>
    <div className="row flex-nowrap">
      <div className ="d-flex justify-content-around mr-2" id="div_check_inline">
    <div className="form-check-inline ">
      <input type="checkbox" name="service_de_depannage" ref={register}
        className="form-check-input"/>
          <ErrorMessage errors={errors} name="service_de_depannage" as="p" />
          <label className="form-check-label">Pneu de rechange</label>
    </div>
    <div className="form-check-inline">
      <input type="checkbox" name="service_de_depannage" ref={register}
        className="form-check-input"/>
          <ErrorMessage errors={errors} name="service_de_depannage" as="p" />
          <label className="form-check-label">Pneu d'urgence</label>
    </div>
    <div className="form-check-inline ">
      <input type="checkbox" name="service_de_depannage" ref={register}
        className="form-check-input"/>
          <ErrorMessage errors={errors} name="service_de_depannage" as="p" />
          <label className="form-check-label">Kit de réparation de pneus d'urgence </label>
    </div>
    </div>
  
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3 mt-0"  id="div_range">
       <select className="form-control "  name="airbags" ref={register}>
        <option>Veuillez sélectionner</option>            
        </select> <ErrorMessage errors={errors} name="cylindree" as="p" />
  
     </div>
        </div>{/*End services de depannage */}
        <br/>
<label><h6>Particularité </h6></label>
    <div className="row" id="div_range">
            {particularité.map((option,i) => (
                         <div className="col-sm-3">
                    <div className="form-check ">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name={`options[${i}]`}
                        value={option}
                        ref={register}
                         />
                        <label className="form-check-label">{option}</label>
                    </div>
  
                </div>
            ))}
    </div>{/*END particularité */}
    <br/>
<label><h6>Attelage de remorque  </h6></label>
<div className="row">
<div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3 mt-0"  id="div_range">
       <select className="form-control "  name="attelage_remorque" ref={register}>
        <option>Veuillez sélectionner</option>            
        </select> <ErrorMessage errors={errors} name="cylindree" as="p" />
  
     </div>
        </div>{/*End Attelage de remorque  */}
        <br/>
        <div className="row flex-nowrap">
        <div className="col-sm-8"><label><h6>Historique de vehicule</h6></label></div>
 
    </div>
    <div className="row flex-nowrap">
      <div className ="d-flex justify-content-around mr-2" id="div_check_inline">
    <div className="form-check-inline ">
      <input type="checkbox" name="historique_vehicule" ref={register}
        className="form-check-input"/>
          <ErrorMessage errors={errors} name="historique_vehicule" as="p" />
          <label className="form-check-label">Carnet d'entretien</label>
    </div>
    <div className="form-check-inline">
      <input type="checkbox" name="historique_vehicule" ref={register}
        className="form-check-input"/>
          <ErrorMessage errors={errors} name="historique_vehicule" as="p" />
          <label className="form-check-label">Garantie</label>
    </div>
    <div className="form-check-inline ">
      <input type="checkbox" name="historique_vehicule" ref={register}
        className="form-check-input"/>
          <ErrorMessage errors={errors} name="historique_vehicule" as="p" />
          <label className="form-check-label">Véhicule non-fumeur </label>
    </div>
    </div>
  
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3 mt-0"  id="div_range">
       <select className="form-control "  name="historique_vehicule" ref={register}>
        <option>Nombre d'anciens propriétaire</option>            
        </select> <ErrorMessage errors={errors} name="cylindree" as="p" />
  
     </div>
        </div>{/*End historique de vehicule */}
        <br/>
<label><h6>TVA </h6></label>
<div className="row">
<div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3 mt-0"  id="div_range">
       <select className="form-control "  name="tva" ref={register}>
        <option>Recuperable</option>            
        <option>Non</option>            
        </select> <ErrorMessage errors={errors} name="tva" as="p" />
  
     </div>
        </div>{/*End  TVA */}

</section>{/*END SECTION SUPLEMENTS */}

<hr/>
      <div className="row">
        <div className="col-sm-4">
           <input type="reset" /> 
        </div>
        <div className="col-sm-4 offset-sm-4">
           <input type="submit" className="float-right"/>
        </div>
        
      </div>
     
      
    </form>
    </div>
  );
};

export default Step2;
