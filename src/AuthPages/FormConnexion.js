import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styleAuth.css';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/authActionCreators';
import 'react-responsive-modal/styles.css';
import {Redirect } from "react-router-dom";
import { Modal } from 'react-responsive-modal';
import FormInscription from './FormInscription';
const FormConnexion = ({ dispatchLoginAction ,props}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState({ email: false, password: false });
    //const [openRegister, setOpenRegister] = React.useState(false);
    let history = useHistory();
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (isFormInvalid()) updateErrorFlags();
        else dispatchLoginAction(email, password,
            () => { toast.warn("Connexion effectuée avec succès!");
           // window.location.reload(true);
            history.push("/add");
            window.location.reload(true);
        }
          // return (<Redirect to={'/add'}/>)
           
        ,
            (message) =>toast.error(`Error: ${message}`));
          
             //window.$('#modal').modal('hide');
           
    };

        const isFormInvalid = () => (!email || !password);

        const updateErrorFlags = () => {
            const errObj = { email: false, password: false };
            if (!email.trim()) errObj.email = true;
            if (!password.trim()) errObj.password = true;
            setError(errObj);
        };

        return(
            <div className="container">
            <div className="loginForm">
                <h4 className="p-4 font-weight-bold"><span>CONN</span>EXION</h4>
            <form noValidate onSubmit={handleOnSubmit}>
                 <div className="form-group pb-2">
                     <input type="email" placeholder="Votre Email" 
                     name="email"
                     value={email} onChange={(e)=>setEmail(e.target.value)} 
                      className={`form-control ${error.email ? 'is-invalid' : ''}`}
                     />
                      <p className="invalid-feedback">Champs requis</p>
                     
                 </div>
                 <div className="form-group pb-2">
                     <input type="password" placeholder="Votre mot de passe" 
                     name="password"
                     value={password} onChange={(e)=>setPassword(e.target.value)}
                     className={`form-control ${error.password ? 'is-invalid' : ''}`} 
                     />
                      <p className="invalid-feedback float-left">Champs requis</p>
                 </div>
                 
                 <button type="submit" className="btn btn-warning w-100 pb-2">CONNEXION</button>
              
                 </form>
                 
             </div>
    
         </div>

        );
    }
const mapDispatchToProps = dispatch =>({
    dispatchLoginAction:(email, password, onSuccess, onError)=>
        dispatch(loginUser({ email, password},onSuccess, onError))
});  

export default connect(null,mapDispatchToProps)(FormConnexion)