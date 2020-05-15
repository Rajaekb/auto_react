import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails
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
          <input  ref={register({ required: "This is required." })} type="radio" value="true" 
          id="customRadioInline1" name="neufoccasion" className="custom-control-input "/>
          <label className="custom-control-label" for="customRadioInline1">Voiture Neuve</label>
          <ErrorMessage errors={errors} name="neufoccasion" as="p" />
      </div>
      <div className="custom-control custom-radio custom-control-inline col-sm">
        <input   ref={register({ required: "This is required." })} type="radio" value="false" 
        id="customRadioInline2" name="neufoccasion" className="custom-control-input"/>
        <label className="custom-control-label" for="customRadioInline2">Voiture d'occasion</label>
        <ErrorMessage errors={errors} name="neufoccasion" as="p" />
      </div>
     
      <div className="form-group col-sm">
        <select name="origine" className="form-control" ref={register({ required: "This is required." })} id="selector">
          <option>Origine</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <ErrorMessage errors={errors} name="origine" as="p" />
    </div>
    <div className="form-group col-sm">

      <select name="dedouanement" ref={register({ required: "This is required." })} className="form-control " id="selector">
        <option>Dedouanement</option>
        <option>2</option>
        <option>3</option>
     
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
            <option>Marque</option>
            <option>2</option>
            <option>3</option>
           </select>
           <ErrorMessage errors={errors} name="marque" as="p" />
        </div>
        </div>
        <div className=" col-12  col-sm-4 form-group">
        <label><h6>Model</h6></label>
        <div id="div_range">
          <select className="form-control " name="model"
          ref={register({ required: "This is required." })}>
              <option>Model</option>
              <option>2</option>
              <option>3</option>
          </select>
          <ErrorMessage errors={errors} name="model" as="p" />
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
            <option>Année</option>
            <option>2</option>
            <option>3</option>
           </select>
           <ErrorMessage errors={errors} name="année" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Mois</h6></label>
        <div id="div_range">
          <select className="form-control "
          name="mois"  ref={register({ required: "This is required." })}>
              <option>Mois</option>
              <option>2</option>
              <option>3</option>
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
            <option>Matricule</option>
            <option>2</option>
            <option>3</option>
           </select>
           <ErrorMessage errors={errors} name="matricule" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Lettre Matricule</h6></label>
        <div id="div_range">
          <select className="form-control ">
              <option>Lettre Matricule</option>
              <option>2</option>
              <option>3</option>
          </select>
          
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label></label>
        <div>
        <div className="custom-control custom-switch pt-9">
    <input type="checkbox" className="custom-control-input" id="customSwitch1"
    name="edition_special"  ref={register({ required: "This is required." })}/>
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
        <input type="radio" name="type_vehicule"
        ref={register({ required: "This is required." })}
         id="option1" autocomplete="off" checked/> CITADINE
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
      <label class="btn btn-light">
        <input type="radio" name="type_vehicule"
        ref={register({ required: "This is required." })}
         id="option2" autocomplete="off"/> CITADINE
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


      <input type="submit" />
    </form>
  
  </div>
  );
};

export default Step1;
