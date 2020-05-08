
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from './../redux/actions/authActionCreators';


const FormInscription = ({ dispatchRegisterAction }) =>{

    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [nom_société,setSociete] = useState('');
    const [tel,setTel] = useState('');
    const [tel_whatsapp,setwhatsapp] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    

  
    const handleOnSubmit = (event) => {
        event.preventDefault();
      
         dispatchRegisterAction(nom, prenom, email, password,nom_société,tel,tel_whatsapp,
            () => console.log('Account Created Successfully!'),
            (message) =>console.log(`Error: ${message}`));
    };
       return(
            <div className="container">
            <div className="loginForm">
                <h4 className="p-4"><span>INSCR</span>IVEZ-VOUS</h4>
            <form   onSubmit={handleOnSubmit}>
            <div className="form-group">
                     <input type="text" className="form-control" name="Nom" 
                     placeholder="Nom" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                </div>
                <div className="form-group">
                     <input type="text" className="form-control" name="prenom" 
                     placeholder="prenom" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
                </div>
            <div className="form-group">
                     <input type="text" className="form-control" name="Nom de sociéte" 
                     placeholder="Nom de société" value={nom_société} onChange={(e)=>setSociete(e.target.value)}/>
                </div>
                <div className="form-group">
                     <input type="text" className="form-control" name="Tel" 
                     placeholder="Tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
                </div>
                <div className="form-group">
                     <input type="text" className="form-control" name="Tel-whatapp" 
                     placeholder="Num Whatsapp" value={tel_whatsapp} onChange={(e)=>setwhatsapp(e.target.value)}/>
                </div>
                 <div className="form-group">
                     <input type="email" className="form-control" name="email" 
                     placeholder="Adresse-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                 <div className="form-group">
                     <input type="password" className="form-control" name="password" 
                     placeholder="Mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 </div>
              
                 <div className="form-group form-check">
                     <input type="checkbox" className="form-check-input"/>
                     <label className="form-check-label">
                     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                     </label>
                 </div>
                 <button type="submit" className="btn btn-warning w-100" >INSCRIPTION</button>
     
                 </form>
             </div>
         </div>

        );
    }

 

    const mapDispatchToProps = dispatch => ({
        dispatchRegisterAction: (nom, prenom, email, password,nom_société,tel,tel_whatsapp, onSuccess, onError) =>
            dispatch(registerUser({ nom, prenom, email, password ,nom_société,tel,tel_whatsapp}, onSuccess, onError))
    });
    export default connect(null, mapDispatchToProps)(FormInscription);
