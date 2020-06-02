import React, { useState, useEffect,useCallback,useMemo} from "react";
import {useDropzone} from 'react-dropzone';
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";


const MultipleUpload = props => {
 /* const [imagePreview0, setImagePreview0] = useState(null);
  const [imagePreview1, setImagePreview1] = useState(null);
  const [imagePreview2, setImagePreview2] = useState(null);
  const [imagePreview3, setImagePreview3] = useState(null);
  const [imagePreview4, setImagePreview4] = useState(null);*/
  const [files, setFiles] = useState([]);
  const [imagesPreviewurls, setImagesPreviewUrls] = useState([]);
  const {setValue} = useForm({});
  //props.fileInput = React.createRef();
  const { push } = useHistory();


        
  
  const fileChangedHandler = event => {
    event.persist();
      const arrfi=Array.from(event.target.files);
      setFiles(arrfi.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
   /*setImagePreview0(URL.createObjectURL(event.target.files[0]));
    setImagePreview1(URL.createObjectURL(event.target.files[1]));
    setImagePreview2(URL.createObjectURL(event.target.files[2]));
    setImagePreview3(URL.createObjectURL(event.target.files[3]));
    setImagePreview4(URL.createObjectURL(event.target.files[4]));*/
    //const selectedfile=Array.from(event.target.files)
  //  setValue('images',event.target.files);
    //console.log(selectedfile);
    //console.log(event.target.files);
   // console.log(image);
  }
  
  const thumbs = files.map(file => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
        
        />
      </div>
    </div>));

useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

 const handleImageChange = e => {
  e.preventDefault();
  // FileList to Array
  setFiles(Array.from(e.target.files));
   
    // File Reader for Each file and update state arrays
    files.forEach((file, i) => {
      let reader = new FileReader();

      reader.onloadend = () => {
   
              setImagesPreviewUrls([reader.result])
    }

      reader.readAsDataURL(file);
  });
  
  }


  
  
  return (
    <div>
    <form encType="multipart/form-data">
      <h2>Step 3</h2>
      <div className="row">
        <div className="col-12 col-sm-6"> 
        <label>        
        <div className="row">
          <div className="col-12 col-sm-12 form-group">
         <input
              className="form-control"
              multiple
              accept="image/*"
              name="images[]"
              type="file"
              onChange={fileChangedHandler}
               />
   
           <img id="target"  className="w-100"/>

          </div>
        </div>
        <div>
        {thumbs}

        </div>
       

       

        
   
      </label>
      
     

      <input type="submit" />
      </div>

      </div>

  </form>

     </div>
  );
};

export default MultipleUpload;
