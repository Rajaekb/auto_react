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
                        "Systeme de controle de limite de vitesse","Systeme d'avertissement de distance"]

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
        
          <ErrorMessage errors={errors} name="carburant" as="p" />
        </div>
        </div>
        <div className=" col-12  col-sm-4 form-group">
        <label><h6>Design Intérieur</h6></label>
        <div id="div_range">
            <input type="text" name="transmission" ref={register}
            className="form-control" id="inputfo" placeholder="Transmission"/>
             <ErrorMessage errors={errors} name="transmission" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Couleur de l'interieur</h6></label>
        <div id="div_range">
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
      <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"  ref={register} />
      <label className="form-check-label" for="inlineCheckbox1">Metalisé</label>
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

    <h6>Protection des occupants</h6>
    <label><h6>Airbags</h6></label>
    <div className="row" >
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3" id="div_range">
             <select className="form-control "  name="airbags" ref={register}>
            <option>Airbags Conducteur</option>            
           </select> <ErrorMessage errors={errors} name="cylindree" as="p" />
     </div>
   
    <div className="col-sm-4 mt-3 pt-3 pb-5 ml-2" id="div_check_inline">
        <input type="checkbox" name="p_chevaux" ref={register}
         className="form-check-input"/>
            <ErrorMessage errors={errors} name="p_chevaux" as="p" />
            <label className="form-check-label">Isofix (point d'ancrage pour siége enfant)</label>
            </div>
    <div className="col-sm-3 mt-3 pt-3 pb-5" id="div_check_inline">
            <input type="checkbox" name="p_chevaux" ref={register}
             className="form-check-input"/>
                <ErrorMessage errors={errors} name="p_chevaux" as="p" />
                <label className="form-check-label">Siège passager point isofix</label>
                </div>
        </div>


<h6>Lumiére et vue</h6>
    <label><h6>Type de phare</h6></label>
    <div className="row" >
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3" id="div_range">
        <select className="form-control "  name="airbags" ref={register}>
            <option>Phare laser</option>            
           </select> <ErrorMessage errors={errors} name="cylindree" as="p" />
      </div>
    <div className="col-sm-7 mt-3 pt-3 pb-5 ml-2" id="div_check_inline">
        <input type="checkbox" name="p_chevaux" ref={register}
         className="form-check-input"/>
            <ErrorMessage errors={errors} name="p_chevaux" as="p" />
            <label className="form-check-label">Systéme de lave phare</label>
    </div>
</div>


    <div className="row">
        <div className="col-sm-7"><label><h6>Faisceau complet</h6></label></div>
        <div className="col-sm-5"><label><h6>Lumiére allumées toute la journée</h6></label></div>
    </div>
    <div className="row">
      
    <div className="col-sm-4 form-check-inline mr-0 pl-0" id="div_check_inline">
        <input type="checkbox" name="p_chevaux" ref={register}
         className="form-check-input"/>
            <ErrorMessage errors={errors} name="p_chevaux" as="p" />
            <label className="form-check-label">Phare de route sans éblouissement</label>
            </div>
    <div className="col-sm-3 form-check-inline pl-0" id="div_check_inline">
            <input type="checkbox" name="p_chevaux" ref={register}
             className="form-check-input"/>
                <ErrorMessage errors={errors} name="p_chevaux" as="p" />
                <label className="form-check-label">Assistance aux feux de route</label>
                </div>
         
  
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3 mt-0"  id="div_range">
       <select className="form-control "  name="airbags" ref={register}>
        <option>Lumiére allumées toute la journée</option>            
        </select> <ErrorMessage errors={errors} name="cylindree" as="p" />
  
     </div>
        </div>

        <label><h6>Eclairage adaptatif</h6></label>
    <div className="row" >
    <div className="col-sm-4 form-group pt-1 pb-1 pr-3 pl-3" id="div_range">
        <select className="form-control"  name="airbags" ref={register}>
            <option>Faux de vitrage adaptatif</option>            
           </select> <ErrorMessage errors={errors} name="cylindree" as="p" />
      </div>
    <div className="col-sm-7 mt-3 pt-3 pb-5 ml-2" id="div_check_inline">
        <input type="checkbox" name="p_chevaux" ref={register}
         className="form-check-input"/>
            <ErrorMessage errors={errors} name="p_chevaux" as="p" />
            <label className="form-check-label">Feu de bouillard</label>
    </div>
</div>
<label><h6>Protection anti-vol</h6></label>
   <div className="row h-100" >
    <div className="col-sm-3  my-auto" id="div_check_inline">
    <div className="form-check my-auto">
        <input className="form-check-input"  type="checkbox" name="protection_antivol" ref={register}/>
        <label className="form-check-label">Systéme d'alarme</label>
    </div>
  </div>
  <div className="col-sm-9 my-auto" id="div_check_inline">
    <div className="form-check  my-auto">
        <input className="form-check-input"  type="checkbox" name="protection_antivol" ref={register}/>
        <label className="form-check-label">Immobilisateur de moteur</label>
    </div>
  </div>
</div>
</section>
{/*END SECTION SECURITE */}


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
