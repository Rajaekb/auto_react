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
          <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input "/>
          <label className="custom-control-label" for="customRadioInline1">Voiture Neuve</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline col-sm">
        <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
        <label className="custom-control-label" for="customRadioInline2">Voiture d'occasion</label>
      </div>
     
      <div className="form-group col-sm">
        <select className="form-control" id="selector">
          <option>Origine</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
    </div>
    <div className="form-group col-sm">

      <select className="form-control " id="selector">
        <option>Dedouanement</option>
        <option>2</option>
        <option>3</option>
     
      </select>
      </div>
    </div>

    <h5>SPECIFICATION VOITURE</h5>
    <div className="row" >
    <div className="col-12 col-sm-4 form-group">
    <label><h6>Marque</h6></label>
        <div id="div_range">
          <select className="form-control ">
            <option>Marque</option>
            <option>2</option>
            <option>3</option>
           </select>
        </div>
        </div>
        <div className=" col-12  col-sm-4 form-group">
        <label><h6>Model</h6></label>
        <div id="div_range">
          <select className="form-control ">
              <option>Model</option>
              <option>2</option>
              <option>3</option>
          </select>
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Finition</h6></label>
        <div id="div_range">
            <input type="text" className="form-control" id="inputfo" placeholder="Finition"/>
        </div>
        </div>
                

</div>
    <div className="row" >
    <div className=" col-12 col-sm-4 form-group">
    <label><h6>Année</h6></label>
        <div id="div_range">
          <select className="form-control ">
            <option>Année</option>
            <option>2</option>
            <option>3</option>
           </select>
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Mois</h6></label>
        <div id="div_range">
          <select className="form-control ">
              <option>Mois</option>
              <option>2</option>
              <option>3</option>
          </select>
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Kilométrage</h6></label>
        <div id="div_range">
            <input type="number" className="form-control" id="inputfo" placeholder="Kilométrage"/>
        </div>
        </div>
</div>

  <div className="row" >
    <div className=" col-12 col-sm-4 form-group">
      <label><h6>Matricule</h6></label>
        <div id="div_range">
          <select className="form-control ">
            <option>Matricule</option>
            <option>2</option>
            <option>3</option>
           </select>
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
    <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
    <label className="custom-control-label" for="customSwitch1"><h6>Edition Spécial</h6></label>
    </div>
    </div>
 </div>
</div>


     


        
      <label>
      title:
        <input name="title" ref={register({ required: "This is required." })} />
        <ErrorMessage errors={errors} name="title" as="p" />
      </label>
      <label>
      description
        <input name="description" ref={register({ required: "This is required." })} />
        <ErrorMessage errors={errors} name="description" as="p" />
      </label>
      <label>
      type
        <input name="type" ref={register({ required: "This is required"})}/>
        <ErrorMessage errors={errors} name="type" as="p" />
      </label>
      <input type="submit" />
    </form>
  
  </div>
  );
};

export default Step1;
