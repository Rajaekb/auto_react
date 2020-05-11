import React, { useState } from 'react';


import logo from '../assets/img/logo.svg';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FormConnexion from '../AuthPages/FormConnexion';
import FormInscription from '../AuthPages/FormInscription';
import PageInscription from '../AuthPages/PageInscription';
import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/authActionCreators';


const Header = ({dispatchLoginAction}) => {

    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    //const [openRegister, setOpenRegister] = React.useState(false);

    const handleOnSubmit = (event) => {
        event.preventDefault();
      
        dispatchLoginAction(email, password,
            () => console.log('login Successfully!'),
            (message) =>console.log(`Error: ${message}`));
            setOpenLogin(false);

    };

  
    return (
        <div>
 
        <div className="fixed-top pb-2" id="navbar">

           <div>
            <div className="row container-fluid">
            <div className="col-md-4 text-center logo">
            <img src={logo} alt="Logo" />
            </div>
            <div className="col-md-8">
			<div className="row justify-content-end">
                <div className="col-md-2"></div>
				<div className="col-2 col-md-2 col-sm-2 ">
        
                <button type="button" onClick={(e)=>setOpenLogin(true)}
                className="btn btn-dark  btn-sm">CONNEXION</button></div>

				<div className="col-md-1 col-sm-2"><button type="button" className="btn btn-dark  btn-sm fr">FR</button></div>
			</div>
           
	        <Navbar/>
		</div>
	</div>
</div>
        
      </div>
    
    <Modal open={openLogin} onClose={() => setOpenLogin(false)} center>
    <div className="loginForm">
                <h4 className="p-4"><span>CONN</span>EXION</h4>
            <form onSubmit={handleOnSubmit}>
                 <div className="form-group">
                     <input type="email" className="form-control" name="email"
                     value={email} onChange={(e)=>setEmail(e.target.value)} />
                     
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
       
        <button type="button"
        onClick={() => {
            setOpenLogin(false);
            setOpenRegister(true)
                        }
                } 
        className="btn btn-dark w-100 mt-2">INSCRIPTION</button>
     

    </Modal>
 
    <Modal open={openRegister} onClose={() => setOpenRegister(false)} center>
    <h4 className="p-4"><span>INSCR</span>IVEZ-VOUS</h4>
        <FormInscription/>
       
    </Modal>
         
      </div>
  
     
    )
}
const mapDispatchToProps = dispatch =>({
    dispatchLoginAction:(email, password, onSuccess, onError)=>
        dispatch(loginUser({ email, password},onSuccess, onError))
}); 
//const mapStateToProps = (state) => ({ user: state.user });

export default connect(null,mapDispatchToProps)(Header);
