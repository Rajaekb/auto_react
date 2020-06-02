import React, { useState,useEffect } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import "./styles.css";

const Step4 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors,reset } = useForm({
    defaultValues: {}
  });
  const { push } = useHistory();
  const onSubmit = (data, e) => {
    action(data);
    push("/result");
  };

  const userInfo=localStorage.getItem('USER_INFO');
  const user=JSON.parse(userInfo);
  

  return (
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>Step 4</h2>
      <h5>
          INFORMATION DU CONTACT
      </h5>
    <div className="row" >
    <div className="col-12 col-sm-4 form-group">
    <label><h6>titre_civilité</h6></label>
  
      <div id="div_range">
        <input type="text" name="titre_civilité" value={user.titre_civilité} ref={register}
        className="form-control" id="inputfo" placeholder="titre_civilité"/>
      
      </div>
    </div>
        <div className=" col-12  col-sm-3 form-group">
        <label><h6>Nom</h6></label>
        <div id="div_range">
            <input type="text" name="nom" value={user.nom} ref={register}
            className="form-control" id="inputfo" placeholder="nom"/>
         </div>
      </div>
      <div className=" col-12  col-sm-3 form-group">
        <label><h6>Prenom</h6></label>
        <div id="div_range">
            <input type="text" name="prenom" value={user.prenom} ref={register}
            className="form-control" id="inputfo" placeholder="prenom"/>
         </div>
      </div>
 

    </div>
        <div className="row" >
    <div className="col-12 col-sm-3 form-group">
    <label><h6>Adresse</h6></label>
  
      <div id="div_range">
        <input type="text" name="adresse" value={user.adresse} ref={register}
        className="form-control" id="inputfo" placeholder="adresse"/>
      
      </div>
    </div>
    <div className="col-12 col-sm-3 form-group">
    <label><h6>Ville</h6></label>
  
      <div id="div_range">
        <input type="text" name="ville" value={user.ville} ref={register}
        className="form-control" id="inputfo" placeholder="ville"/>
      
      </div>
    </div>
        <div className=" col-12  col-sm-3 form-group">
        <label><h6>Tel</h6></label>
        <div id="div_range">
            <input type="text" name="tel" value={user.tel} ref={register}
            className="form-control" id="inputfo" placeholder="tel"/>
     
        </div>
        </div>
 

</div>
   

        <hr/>


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

export default Step4;
