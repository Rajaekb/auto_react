import React, { useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step4 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 4</h2>
     
      <label>
      active
        <input
          name="active"
    
          ref={register({
            required: "This is required",
           
          })}
        />
        <ErrorMessage errors={errors} name="active" as="p" />
      </label>
      <label>
      user_id
        <input
          name="active"
          type="number"
          ref={register({
            required: "This is required",
           
          })}
        />
        <ErrorMessage errors={errors} name="user_id" as="p" />
      </label>
      <label>
      nombre_de_vue
        <input
          name="nombre_de_vue"
          type="number"
          ref={register({
            required: "This is required",
           
          })}
        />
        <ErrorMessage errors={errors} name="nombre_de_vue" as="p" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step4;
