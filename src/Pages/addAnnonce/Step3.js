import React, { useState, useEffect,useCallback,useMemo} from "react";
import {useDropzone} from 'react-dropzone';
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import "./styles.css";

const Step3 = props => {

  const [files, setFiles] = useState([]);
  const [image1, setImage1] = useState(null);

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
      setImage1(URL.createObjectURL(event.target.files[0]))
      setFiles(arrfi.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    setValue('images',event.target.files);
  }

  useEffect(() => () => {
  // Make sure to revoke the data uris to avoid memory leaks
  files.forEach(file => URL.revokeObjectURL(file.preview));
}, [files]);

useEffect(() => () => {
  // Make sure to revoke the data uris to avoid memory leaks
URL.revokeObjectURL(image1);
}, [image1]);
 
  const onSubmit = data => {
    action(data);    
    push("/Step4");
   
  };

  
  
  return (
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>Step 3</h2>
      <div className="row ">
        <div className="col-12 col-sm-6 "> 
          
        <div className="custom-file-upload">
        <label  for="file">
        <img src={image1} className="img_upload"/>
        <input
              className="form-control"
              multiple
              accept="image/*"
              name="images[]"
              id="file"
              type="file"
              onChange={fileChangedHandler}

               />
<button type="button"  className="btn">AJOUTER DES PHOTOS</button>
        <div className="row d-flex flex-row ">    
         { 
            files.map(file => (
              <div className="col-sm-3 ">
             <div key={file.name}>
               <img src={file.preview} className="w-100"/>
            </div></div>
             ))
          }
     
        </div>
        
</label> 
        
</div>
     </div>
     <div className="col-12 col-sm-6">
          <div id="div_range">
            <input type="text" name="lien_youtube"
            className="form-control" id="inputfo" placeholder="Lien video youtube"
             ref={register}/>
             <ErrorMessage errors={errors} name="lien_youtube" as="p" />
          </div><br/>
          <div id="div_range" className="d-flex">
           <div>Titre de vehicule</div>
            <div><input type="text" name="titre_vehicule"
            className="form-control" id="inputfo" placeholder="Lien video youtube"
             ref={register}/>
             <ErrorMessage errors={errors} name="titre_vehicule" as="p" />
             </div>
          </div>
          <br/>
          <div id="div_range">
            <textarea  name="description_vehicule" rows="10"
            className="form-control"  placeholder="Description de vehicules"
             ref={register}/>
             <ErrorMessage errors={errors} name="description_vehicule" as="p" />
          </div><br/>
          <div id="div_range">
            <input type="text" name="prix_vehicule"
            className="form-control" id="inputfo" placeholder="Prix de vehicule"
             ref={register}/>
             <ErrorMessage errors={errors} name="prix_vehicule" as="p" />
          </div><br/>
          <div id="div_range">
          <select className="form-control "  name="prix_fixe" ref={register}>
        <option>Prix Fixe</option> 
        <option>Oui</option>               
        <option>Non</option>               
        </select> <ErrorMessage errors={errors} name="prix_fixe" as="p" />
  
          </div><br/>
  
     </div>
     
     </div>
      <input type="submit" />
      

      

       </form>

     </div>
  );
};

export default Step3;
