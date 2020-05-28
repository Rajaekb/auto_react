
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from './../redux/actions/authActionCreators';
import { useHistory } from "react-router-dom";

const FormInscription = ({ dispatchRegisterAction }) =>{

    const [user_type,setUserType] = useState("Client");

   
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [nom_société,setSociete] = useState('');
    const [tel,setTel] = useState('');
    const [tel_whatsapp,setwhatsapp] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [comf_password,setComfPassword] = useState('');
    const [showClientForm, setShowClientForm] = useState(true);
    const [error, setError] = useState({ email: false, password: false });
    let history = useHistory();
  
    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (isFormInvalid()) updateErrorFlags();
        if (isComfirm())  toast.warn('le mot de pass est incorrect!');
        
        else 
            dispatchRegisterAction(nom, prenom,user_type, email, password,nom_société,tel,tel_whatsapp,
            () => {toast.warn('Inscription effectuée avec succès!');
            history.replace("/client");
            window.location.reload(true);
        
        },
                        (message) =>toast.error(`Error: ${message}`))
                    
    };
    const isFormInvalid = () => ( !email || !password);
    const isComfirm = () => ( comf_password !== password);
    const updateErrorFlags = () => {
        const errObj = {email: false, password: false };
   
        if (!email) errObj.email = true;
        if (!password) errObj.password = true;
        setError(errObj);
    }; 
       return(
            <div className="container">
            <div className="loginForm">
            <form  noValidate onSubmit={handleOnSubmit}>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn type_user active">
                    <input 
                    type="radio" 
                    name="user_type"
                    value="Client" 
                    onChange={(e)=>setUserType(e.target.value)}
                    onClick={() => setShowClientForm(true)} 
                    checked/> Client
                </label>
                <label className="btn type_user">
                    <input 
                        type="radio" 
                        name="user_type"
                      value="Revendeur Pro" 
                      onChange={(e)=>setUserType(e.target.value)}
                      className="form-check-input"                    
                        onClick={() =>setShowClientForm(false)}/> 
                    Revendeur Pro
                </label>


</div>
           
           
                {showClientForm && <div>
            <div className="form-group">
                     <input type="text" className="form-control" name="Nom" 
                     placeholder="Nom" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                </div>
                <div className="form-group">
                     <input type="text" className="form-control" name="prenom" 
                     placeholder="Prénom" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
                </div>
                </div>} 
                {!showClientForm &&
            <div className="form-group">
                     <input type="text" className="form-control" name="Nom de sociéte" 
                     placeholder="Nom de votre société" value={nom_société} onChange={(e)=>setSociete(e.target.value)}/>
                </div>}
                <div className="form-group">
                     <input type="text" className="form-control" name="Tel" 
                     placeholder="Numero de Tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
                </div>
                <div className="form-group">
                     <input type="text" className="form-control" name="Tel-whatapp" 
                     placeholder="Numero Whatsapp" value={tel_whatsapp} onChange={(e)=>setwhatsapp(e.target.value)}/>
                </div>
                 <div className="form-group">
                     <input type="email" 
                     className={`form-control ${error.email ? 'is-invalid' : ''}`}
                     name="email" 
                     placeholder="Adresse-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <p className="invalid-feedback">Champs requis</p>
                </div>
                 <div className="form-group">
                     <input type="password"
                      className={`form-control ${error.password ? 'is-invalid' : ''}`}
                       name="password" 
                     placeholder="Mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <p className="invalid-feedback">Champs requis</p>
                 </div>
                 <div className="form-group">
                     <input type="password"
                      className="form-control"
                       name="comf_password" 
                     placeholder="Comfirmer mot de pass" value={comf_password} onChange={(e)=>setComfPassword(e.target.value)}/>
                  
                 </div>
                
                 <button type="submit" className="btn btn-warning w-100" >INSCRIPTION</button>
     
                 </form>
             </div>
         </div>

        );
    }

 

    const mapDispatchToProps = dispatch => ({
        dispatchRegisterAction: (nom, prenom,user_type, email, password,nom_société,tel,tel_whatsapp, onSuccess, onError) =>
            dispatch(registerUser({ nom, prenom, user_type, email, password ,nom_société,tel,tel_whatsapp}, onSuccess, onError))
    });
    export default connect(null, mapDispatchToProps)(FormInscription);
