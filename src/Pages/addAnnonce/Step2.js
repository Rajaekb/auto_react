import React, { useState,useEffect } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { resetWarningCache } from "prop-types";

const Step2 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors,reset } = useForm({
    defaultValues: {}
  });
  const { push } = useHistory();
  const onSubmit = (data, e) => {
    action(data);
    push("/step3");
  };

  const userInfo=localStorage.getItem('USER_INFO');
  const user=JSON.parse(userInfo);
  const userId=JSON.stringify(user.userId)
  return (
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>Step 2</h2>
      <h5>SPECIFICATION VOITURE</h5>
    <div className="row" >
    <div className="col-12 col-sm-4 form-group">
    <label><h6>Carburant</h6></label>
    
        <div id="div_range">
          <input type="text" name="carburant" ref={register}
          className="form-control" id="inputfo" placeholder="Diesel"/>
           <ErrorMessage errors={errors} name="carburant" as="p" />
        </div>
        </div>
        <div className=" col-12  col-sm-4 form-group">
        <label><h6>Transmission</h6></label>
        <div id="div_range">
            <input type="text" name="transmission" ref={register}
            className="form-control" id="inputfo" placeholder="Transmission"/>
             <ErrorMessage errors={errors} name="transmission" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Cylindrée</h6></label>
        <div id="div_range">
            <input type="number" name="cylindree" ref={register}
            className="form-control" id="inputfo" placeholder="20"/>
             <ErrorMessage errors={errors} name="cylindree" as="p" />
        </div>
        </div>
                

</div>
    <div className="row" >
    <div className=" col-12 col-sm-4 form-group">
    <label><h6>Puissance Fiscale</h6></label>
        <div id="div_range">
          <input type="number" name="p_fiscal" ref={register}
          className="form-control" id="inputfo" placeholder="20"/>
           <ErrorMessage errors={errors} name="p_fiscal" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Puissance chevaux</h6></label>
        <div id="div_range">
          <input type="number" name="p_chevaux" ref={register}
           className="form-control" id="inputfo" placeholder="20"/>
            <ErrorMessage errors={errors} name="p_chevaux" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Motorisation</h6></label>
        <div id="div_range">
            <input type="number" name="motorisation" ref={register}
            className="form-control" id="inputfo" placeholder="20"/>
             <ErrorMessage errors={errors} name="motorisation" as="p" />
        </div>
        </div>
</div>

  <div className="row" >
    <div className=" col-12 col-sm-4 form-group">
      <label><h6>Consommation</h6></label>
        <div id="div_range">
          <input type="number" name="consomation" ref={register}
          className="form-control" id="inputfo" placeholder="20"/>
           <ErrorMessage errors={errors} name="consomation" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Frais de vignette</h6></label>
        <div id="div_range">
          <input type="number" name="frais_vignette" ref={register}
          className="form-control" id="inputfo" placeholder="20"/>
           <ErrorMessage errors={errors} name="frais_vignette" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Votre id</h6></label>
        <div id="div_range">
             <input type="text" className="border-0 bg-light" name="user_id" value={userId}  ref={register}/>
        </div>
</div></div>
        <hr/>
    <div className="row" >
      <div className=" col-12 col-sm-4 form-group">
        <label><h6>En etat de marche</h6></label>
        <div id="div_range">
          <select className="form-control ">
            <option>Oui</option>
            <option>Non</option>
            
           </select>
        </div>
        </div> 
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Quand prévoyer-vous vendre ?</h6></label>
        <div id="div_range">
        <input type="text" className="form-control" id="inputfo" placeholder="Oui"/>
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Ou aimer-vous vendre votre voiture</h6></label>
        <div id="div_range">
            <input type="text" className="form-control" id="inputfo" placeholder="Tanger"/>
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

export default Step2;
