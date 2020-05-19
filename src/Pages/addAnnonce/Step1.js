import React, { useState,useEffect } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register,reset } = useForm({
    defaultValues: {}
  });
  const { push } = useHistory();
  const onSubit = data => {
    action(data);
    push("/step2");
  };

  return (
    <div className="container">
    <form novalidate onSubmit={handleSubmit(onSubit)}>
   
     
  <h5>VOITURES NEUVES OU D'OCCASION</h5>
    <div className="row" id="div_box">
          <div className="custom-control custom-radio custom-control-inline col-sm pl-5">
          <input  ref={register({ required: "This is required." })} type="radio" value="Neuf" 
          id="customRadioInline1" name="neuf" className="custom-control-input "/>
          <label className="custom-control-label" for="customRadioInline1">Voiture Neuve</label>
          <ErrorMessage errors={errors} name="neuf" as="p" />
      </div>
      <div className="custom-control custom-radio custom-control-inline col-sm">
        <input   ref={register({ required: "This is required." })} type="radio" value="Occasion" 
        id="customRadioInline2" name="neuf" className="custom-control-input"/>
        <label className="custom-control-label" for="customRadioInline2">Voiture d'occasion</label>
        <ErrorMessage errors={errors} name="neuf" as="p" />
      </div>
     
      <div className="form-group col-sm">
        <select placeholder="Origine" name="origine" className="form-control" ref={register({ required: "This is required." })} id="selector">
          <option>Origine</option>
          <option>Maroc</option>
          <option>France</option>
          <option>Espagne</option>
          <option>Italie</option>
          <option>Belgique</option>
          <option>Suisse</option>
          <option>Allemagne</option>
          <option>Turquie</option>
        </select>
        <ErrorMessage errors={errors} name="origine" as="p" />
    </div>
    <div className="form-group col-sm">

      <select name="dedouanement" ref={register({ required: "This is required." })} className="form-control " id="selector">
        <option>Douanement</option>
        <option>Oui</option>
        <option>Non</option>
     
      </select>
      <ErrorMessage errors={errors} name="dedouanement" as="p" />
      </div>
    </div>

    <h5>SPECIFICATION VOITURE</h5>
  <div className="row" >
    <div className="col-12 col-sm-4 form-group">
    <label><h6>Marque</h6></label>
        <div id="div_range">
          <select className="form-control "
          name="marque"  ref={register({ required: "This is required." })}>
            <option>Peugeot</option>
            <option>Renault</option>
            <option>Volkswagen</option>
            <option>Opel</option>
            <option>Citroën</option>
            <option>Mercedes</option>
            <option>Ford</option>
            <option>BMW</option>
      
           </select>
           <ErrorMessage errors={errors} name="marque" as="p" />
        </div>
        </div>
        <div className=" col-12  col-sm-4 form-group">
        <label><h6>Model</h6></label>
        <div id="div_range">
          <select className="form-control " name="modele"
          ref={register({ required: "This is required." })}>
              <option>Aston Martin	</option>
              <option>Cadillac</option>
              <option>Dacia	</option>
              <option>Fiat	</option>
              <option>Audi	</option>
              <option>Catheram	</option>
              <option>Daihatsu	</option>
              <option>Ford	</option>
              <option>Chrysler	</option>
              <option>Ferrari	</option>
              <option>Hyundai	</option>
         
          </select>
          <ErrorMessage errors={errors} name="modele" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Finition</h6></label>
        <div id="div_range">
            <input type="text" name="finition"
            
             className="form-control" id="inputfo" placeholder="Finition"
             ref={register({ required: "This is required." })}/>
             <ErrorMessage errors={errors} name="finition" as="p" />
        </div>
        </div>
                

</div>
  <div className="row" >
    <div className=" col-12 col-sm-4 form-group">
    <label><h6>Année</h6></label>
        <div id="div_range">
          <select className="form-control "
          name="année"  ref={register({ required: "This is required." })}>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
            <option>1999</option>
            <option>1998</option>
            <option>1997</option>
            <option>1996</option>
           </select>
           <ErrorMessage errors={errors} name="année" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Mois</h6></label>
        <div id="div_range">
          <select className="form-control "
          name="mois"  ref={register({ required: "This is required." })}>
              <option>janv</option>
              <option>fevr</option>
              <option>mars</option>
              <option>avril</option>
              <option>mai</option>
              <option>juin</option>
              <option>juil</option>
              <option>aout</option>
              <option>sept</option>
              <option>oct</option>
              <option>nov</option>
              <option>dec</option>
          </select>
          <ErrorMessage errors={errors} name="mois" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Kilométrage</h6></label>
        <div id="div_range">
            <input type="number"
            name="kilometrage"  ref={register({ required: "This is required." })}
             className="form-control" id="inputfo" placeholder="Kilométrage"/>
             <ErrorMessage errors={errors} name="kilometrage" as="p" />
        </div>
        </div>
</div>

  <div className="row" >
    <div className=" col-12 col-sm-4 form-group">
      <label><h6>Matricule</h6></label>
        <div id="div_range">
          <select className="form-control "
          name="matricule"  ref={register({ required: "This is required." })}>
            <option>Casa</option>
            <option>Tanger</option>
            <option>Rabat</option>
            <option>Kenitra</option>
            <option>Nador</option>
            <option>Agadir</option>
            <option>Sale</option>
            <option>Alhossima</option>
            <option>Fes</option>
            <option>Marrackech</option>
            <option>Ifranc</option>
           </select>
           <ErrorMessage errors={errors} name="matricule" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Lettre Matricule</h6></label>
        <div id="div_range">
          <select className="form-control ">
              <option>Alif  A 1</option>
              <option>Alif  A 3</option>
              <option>Alif  A 4</option>
              <option>Alif  A 6</option>
          </select>
          
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label></label>
        <div>
        <div className="custom-control custom-switch pt-9">
    <input type="checkbox" className="custom-control-input" id="customSwitch1"
    name="edition_special"  ref={register}/>
    <label className="custom-control-label" for="customSwitch1"><h6>Edition Spécial</h6></label>
    <ErrorMessage errors={errors} name="edition_special" as="p" />
    </div>
    </div>
 </div>
</div>
<hr></hr>
<div className="row">
  <div className="col-sm-4"><h6>Type de vehicule</h6></div>
  <div className="col-sm-4"><h6>Nombre de portes</h6></div>
  <div className="col-sm-4"><h6>Nombre de sieges</h6></div>
</div>

<div className="row">
  <div className="col-sm" >
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-light active">
        <input type="radio" name="type_vehicule"  value="Citadine"
        ref={register({ required: "This is required." })}
          checked/> CITADINE
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
      <label class="btn btn-light">
        <input type="radio" name="type_vehicule" value="Berlin"
        ref={register({ required: "This is required." })}
       /> BERLIN
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
    </div>
  </div>
  <div className="col-sm" >
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
     <label className="btn btn-light active">
       <input type="radio" name="nbr_portes" value="3" id="nbr_portes" 
       ref={register({ required: "This is required." })}
       autocomplete="off" checked/> 2
       <ErrorMessage errors={errors} name="nbr_portes" as="p" />
     </label>
     <label className="btn btn-light">
       <input type="radio" name="nbr_portes"  value="4"  id="nbr_portes" 
       ref={register({ required: "This is required." })}
       autocomplete="off"/> 4
       <ErrorMessage errors={errors} name="nbr_portes" as="p" />
      </label>
    </div>
</div>
  <div className="col-sm" >
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
     <label class="btn btn-light active">
      <input type="radio" name="nbr_sieges"  value="5" id="nbr_sieges" ref={register({ required: "This is required." })}
       autocomplete="off" checked/> 5
       <ErrorMessage errors={errors} name="nbr_sieges" as="p" />
    </label>
     <label class="btn btn-light">
     <input type="radio" name="nbr_sieges"  value="4" id="nbr_sieges" ref={register({ required: "This is required." })}
      autocomplete="off"/> 4
      <ErrorMessage errors={errors} name="nbr_sieges" as="p" />
    </label>
  </div>
  
</div>
</div>
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

export default Step1;
