import React, { useState,useEffect } from "react";
import { connect } from 'react-redux';
import { useForm, ErrorMessage,Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import axios from 'axios';




const Step1 = props => {
  const [marques,setMarques]=useState([]);
  const [modeles,setModeles]=useState([]);

  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register,reset,control } = useForm({
    defaultValues: {}
  });


  const { push } = useHistory();
  const onSubit = data => {

    action(data);
    push("/step2");
  };

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const loadData = () => {
      try {
        axios.get('https://autobackend.devcom-media.com/api/marques', { cancelToken: source.token }).then(data => {
          //console.log(data.data);
          setMarques([...marques,data.data])

         
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    };
  }, []);
  useEffect(() => {
    const l=[];
    setModeles([...modeles,l])
  
  
   },[])
 const selectMarque = (e) => {
//e.preventDefault();

  
  const marqueId=e.target.value;
 axios.get(`https://autobackend.devcom-media.com/api/modeles/show/${marqueId}`)
  .then(function (response) {
    setModeles([response.data])
    
  })
 }




  return (
    <div className="container">
    <form noValidate onSubmit={handleSubmit(onSubit)} encType="multipart/form-data">
   
     
  <h5>VOITURES NEUVES OU D'OCCASION</h5>
    <div className="row" id="div_box">
          <div className="custom-control custom-radio custom-control-inline col-sm pl-5 pt-3">
          <input  ref={register} type="radio" value="Neuf"  id="customRadioInline1" name="neuf" className="custom-control-input "/>
          <label className="custom-control-label pt-3" htmlFor="customRadioInline1">Voiture Neuve</label>
          <ErrorMessage errors={errors} name="neuf" as="p" />
      </div>
      <div className="custom-control custom-radio custom-control-inline col-sm pt-3">      
        <input   ref={register} type="radio" value="Occasion" id="customRadioInline2" name="neuf" className="custom-control-input"/>
        <label className="custom-control-label pt-3" htmlFor="customRadioInline2">Voiture d'occasion</label>
        <ErrorMessage errors={errors} name="neuf" as="p" />
      </div>
     
      <div className="form-group col-sm pt-0">
        <select placeholder="Origine" name="origine"  ref={register} id="selector">
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

      <select name="dedouanement" ref={register} id="selector">
        <option>Dedouanement</option>
        <option>Oui</option>
        <option>Non</option>
     
      </select>
      <ErrorMessage errors={errors} name="dedouanement" as="p" />
      </div>
    </div>

    <h5>SPECIFICATION VOITURE</h5>
  <div className="row" >
    <div className="col-12 col-sm-4 form-group ">
    <label><h6>Marque</h6></label>
        <div id="div_range">
        <select className="form-control " name="marque_id"  ref={register} onChange={selectMarque}>
          {marques.map((option,i)=>(
              option.map((e,o)=>(
              <option key={option[o].id} value={option[o].id}>{option[o].libellé}</option>
              ))
            
  ))} </select>
           <ErrorMessage errors={errors} name="marque_id" as="p" />
          
        </div>
        </div>
        <div className=" col-12  col-sm-4 form-group">
        <label><h6>Model</h6></label>
        <div id="div_range">
          <select className="form-control" name="modele_id"  ref={register}>
               {modeles.map((option,i)=>(
              option.map((e,o)=>(
              <option key={option[o].id} value={option[o].id}>{option[o].libellé}</option>
              ))
            
  ))} 
         
          </select>
          <ErrorMessage errors={errors} name="modele_id" as="p" />
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Finition</h6></label>
        <div id="div_range">
            <input type="text" name="finition" className="form-control" id="inputfo" placeholder="Finition" ref={register}/>
             <ErrorMessage errors={errors} name="finition" as="p" />
        </div>
        </div>
                

</div>
  <div className="row" >
    <div className=" col-12 col-sm-4 form-group">
    <label><h6>Année</h6></label>
        <div id="div_range">
          <select className="form-control" name="année"  ref={register}>
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
          <select className="form-control " name="mois"  ref={register}>
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
            name="kilometrage"  ref={register}
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
          name="matricule"  ref={register}>
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
    <label className="custom-control-label" htmlFor="customSwitch1"><h6>Edition Spécial</h6></label>
    <ErrorMessage errors={errors} name="edition_special" as="p" />
    </div>
    </div>
 </div>
</div>
<hr></hr>

  {/*Type de vehicule*/} 

<div className="row">
  <div className="col-sm-4"><h6>Type de vehicule</h6></div>
</div>
<div className="row">
  <div className="col-sm" >
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-light active">
        <input type="radio" name="type_vehicule"  value="Cabrio/Roadster" ref={register} defaultChecked/> Cabrio/Roadster
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
      <label className="btn btn-light">
        <input type="radio" name="type_vehicule" value="Petite Voiture" ref={register}/> Petite Voiture
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
      
      <label className="btn btn-light">
        <input type="radio" name="type_vehicule" value="Break" ref={register}/> Break
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
      
      <label className="btn btn-light">
        <input type="radio" name="type_vehicule" value="Voiture de Sport" ref={register}/> Voiture de Sport
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
      
      <label className="btn btn-light">
        <input type="radio" name="type_vehicule" value="SUV/Pick-up"
        ref={register}
       /> SUV/Pick-up
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
      
      <label className="btn btn-light">
        <input type="radio" name="type_vehicule" value="Van/Minibus"
        ref={register}
       /> Van/Minibus
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
      
      <label className="btn btn-light">
        <input type="radio" name="type_vehicule" value="Autre"
        ref={register}
       /> Autre
         <ErrorMessage errors={errors} name="type_vehicule" as="p" />
      </label>
    </div>
  </div>
</div>
<hr></hr>

  {/*Nombre portes et sieges*/} 
  <div className="row">
   <div className="col-sm"><h6>Nombre de portes</h6></div>
  <div className="col-sm"><h6>Nombre de sieges</h6></div>
</div>
<div className="row">
   <div className="col-sm" >
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
     <label className="btn btn-light active">
       <input type="radio" name="nbr_portes" value="3" id="nbr_portes" ref={register} autoComplete="off" defaultChecked/> 2/3
       <ErrorMessage errors={errors} name="nbr_portes" as="p" />
     </label>
     <label className="btn btn-light">
       <input type="radio" name="nbr_portes"  value="4"  id="nbr_portes"  ref={register}
       autoComplete="off"/> 4/5
       <ErrorMessage errors={errors} name="nbr_portes" as="p" />
      </label>
      <label className="btn btn-light">
       <input type="radio" name="nbr_portes"  value="4"  id="nbr_portes" 
       ref={register}
       autoComplete="off"/> 6/7
       <ErrorMessage errors={errors} name="nbr_portes" as="p" />
      </label>
    
    </div>
</div>
  <div className="col-sm" >
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
     <label className="btn btn-light active">
      <input type="radio" name="nbr_sieges"  value="5" id="nbr_sieges" ref={register}
       autoComplete="off" defaultChecked /> 2/3
       <ErrorMessage errors={errors} name="nbr_sieges" as="p" />
    </label>
     <label className="btn btn-light">
     <input type="radio" name="nbr_sieges"  value="4" id="nbr_sieges" ref={register}
      autoComplete="off"/> 4/5
      <ErrorMessage errors={errors} name="nbr_sieges" as="p" />
    </label>
    <label className="btn btn-light">
     <input type="radio" name="nbr_sieges"  value="4" id="nbr_sieges" ref={register}
      autoComplete="off"/> 6/7
      <ErrorMessage errors={errors} name="nbr_sieges" as="p" />
    </label>
  </div>
  
</div>
</div>
<hr/>

<div className="row" >
    <div className="col-12 col-sm-4 form-group">
    <label><h6>Carburant</h6></label>
    
        <div id="div_range">
          <input type="text" name="carburant" ref={register} className="form-control" id="inputfo" placeholder="Diesel"/>
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
        </div>
        <hr/>
    <div className="row" >
      <div className=" col-12 col-sm-4 form-group">
        <label><h6>En etat de marche</h6></label>
        <div id="div_range">
          <select className="form-control " name="en_etat_de_marche" ref={register}>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
            
           </select>
        </div>
        </div> 
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Quand prévoyer-vous vendre ?</h6></label>
        <div id="div_range">
       <input type="date" className="form-control" name="date_de_vente" ref={register} placeholder="Selectioner la Date"/>
        </div>
        </div>
        <div className="col-12 col-sm-4 form-group">
        <label><h6>Ou aimer-vous vendre votre voiture</h6></label>
        <div id="div_range">
            <input type="text" className="form-control" name="ville_de_vente" ref={register} placeholder="Tanger"/>
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

