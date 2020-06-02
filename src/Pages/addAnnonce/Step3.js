import React, { useState, useEffect,useCallback,useMemo} from "react";
import {useDropzone} from 'react-dropzone';
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import "./styles.css";

const Step3 = props => {

  const [files, setFiles] = useState([]);
  const [imagesPreviewurls, setImagesPreviewUrls] = useState([]);
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors,setValue} = useForm({
    defaultValues: {}
  });

  const { push } = useHistory();

  useEffect(() =>{
    register( { name: 'images'}) // still have validation for required
    },[]);
        
  
  const fileChangedHandler = event => {
    event.persist();
      const arrfi=Array.from(event.target.files);
      setFiles(arrfi.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));

    setValue('images',event.target.files);

  }

  useEffect(() => () => {
  // Make sure to revoke the data uris to avoid memory leaks
  files.forEach(file => URL.revokeObjectURL(file.preview));
}, [files]);
 
  const onSubmit = data => {
    action(data);    
    push("/Step4");
   
  };

  
  
  return (
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>Step 3</h2>
      <div className="row">
        <div className="col-12 col-sm-6 "> 
        <label>        
        <div className="row upload_container">
          <div className="col-12 col-sm-12 form-group">
         <input
              className="form-control"
              multiple
              accept="image/*"
              name="images[]"
              type="file"
              onChange={fileChangedHandler}
               />

          </div>
        </div>
        <div className="row d-flex flex-row ">
        <div className="col-sm-12 ">
        <div className="row d-flex flex-row ">
        
         {files ? 
            (files.map(file => (
              <div className="col-sm-3 ">
             <div key={file.name}>
               <img src={file.preview} className="w-100"/>
            </div></div>
             )))

             :(
            
          <div className="col-sm-3 preview ">cvxcbxcbx</div>
       )
          }</div>
          </div>
        </div>
       

        
   
      </label>
      
     

      <input type="submit" />
      </div>

      </div>

  </form>

     </div>
  );
};

export default Step3;
