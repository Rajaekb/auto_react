import React, { useState } from 'react';
import './styleAuth.css';
import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/authActionCreators';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FormInscription from './FormInscription';
const FormConnexion = ({ dispatchLoginAction }) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    //const [openRegister, setOpenRegister] = React.useState(false);

    const handleOnSubmit = (event) => {
        event.preventDefault();
      
        dispatchLoginAction(email, password,
            () => console.log('login Successfully!'),
            (message) =>console.log(`Error: ${message}`));
    };


        return(
            <div className="container">
            <div className="loginForm">
                <h4 className="p-4"><span>CONN</span>EXION</h4>
            <form onSubmit={handleOnSubmit}>
                 <div className="form-group">
                     <input type="email" className="form-control" name="email"
                     value={email} onChange={(e)=>setEmail(e.target.value)}/>
                     
                 </div>
                 <div className="form-group">
                     <input type="password" className="form-control" name="password"
                     value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 </div>
                 <div className="form-group form-check">
                     <input type="checkbox" className="form-check-input"/>
                     <label className="form-check-label">
                     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                     </label>
                 </div>
                 <button type="submit" className="btn btn-warning w-100">CONNEXION</button>
              
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