import React, { useState, useEffect} from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step3 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors,setValue} = useForm({
    defaultValues: {}
  });
  //props.fileInput = React.createRef();
  const { push } = useHistory();

  useEffect(() =>{
    register( { name: 'image', type: 'file' }) // still have validation for required
    },[register]);
    
    
  
  const fileChangedHandler = event => {
    event.persist();
    setValue('image', event.target.files[0]);
    console.log(event.target.files[0].name);
   // console.log(image);
  }

  const onSubmit = data => {
    action(data);
    
    push("/result");
    //console.log(data);
    console.log(data);
   // console.log(data.image);
   
  
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>Step 3</h2>
     < div className="row" >
      <div className=" col-12 col-sm-4 form-group">
      <label>
      image
        <input
          className="form-control"
          name="image"
          type="file"
       //  ref={register}
        onChange={fileChangedHandler}

         
        />
        
      </label>
     

      <input type="submit" />
      </div></ div>
    </form>
  );
};

export default Step3;
