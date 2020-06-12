import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { searchAnnonce } from '../redux/actions/annoncesActionCreator';
import ResultatAnnonce from './ResultatAnnonce';

const RechFilter = ({ history, annonces,dispatchSearchAnnonceAction }) => {
    const [annonce, setAnnonce] = useState([]);
    const [marque, setMarque] = useState('');
    const [modele, setModele] = useState('');
    const [neuf, setNeuf] = useState('');
    const [origine, setOrigine] = useState('');
    const [finition, setFinition] = useState('');



    const handleOnSubmit = event => {
        event.preventDefault();
        const data = { marque:marque, modele:modele};
        dispatchSearchAnnonceAction(data, ({ annonces }) => {
            toast.success('get Annonce succée!');
            setNeuf(annonces[0].neuf);
            setOrigine(annonces[0].origine);
            setFinition(annonces[0].finition);
            setAnnonce(annonces);
            console.log(annonces)
            //history.replace('/annonces');
        }, (message) => toast.error(`Error: ${message}`));

       /* axios.post("http://127.0.0.1:8000/api/annonces/search",{
            marque:marque,
            modele:modele
        })
        .then(res=>{
            console.log(res.data)
            setAnnonce(res.data)      
            

        });*/
    }

    return (
       
        <div className="container">
        <div className=" row align-items-center mt-4">
            <div className="col-9">
            <form noValidate onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label htmlFor="marque">marque</label>
                        <input noValidate id="marque"
                            type="text"
                            placeholder="marque"
                            name="marque"
                            value={marque}
                            onChange={(e) => setMarque(e.target.value)}
                            className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="modele">modele</label>
                <input noValidate id="modele"
                    type="text"
                    placeholder="modele"
                    name="modele"
                    value={modele}
                    onChange={(e) => setModele(e.target.value)}
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="neuf">neuf</label>
                        <input  id="neuf"
                            type="text"
                            placeholder="neuf"
                            name="neuf"
                            value={neuf}
                            onChange={(e) => setNeuf(e.target.value)}
                            className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="origine">origine</label>
                        <input  id="origine"
                            type="text"
                            placeholder="origine"
                            name="origine"
                            value={origine}
                           onChange={(e) => setOrigine(e.target.value)}
                            className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="finition">finition</label>
                        <input  id="finition"
                            type="text"
                            placeholder="finition"
                            name="finition"
                            value={finition}
                            onChange={(e) => setFinition(e.target.value)}
                            className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary mr-2 btn-lg">
                                Recherche
                            </button></form>
            </div>
        </div>
        <div className="row mt-5">
                <div className="col-12">
                
           
                </div>
            </div>

        </div>
)
}

const mapDispatchToProps = dispatch => ({
    dispatchSearchAnnonceAction: (data, onSuccess) =>
        dispatch(searchAnnonce(data, onSuccess)),
 
});
export default connect(null,mapDispatchToProps)(RechFilter);
//export default RechFilter