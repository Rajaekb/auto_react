import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createAnnonce } from '../redux/actions/annoncesActionCreator';



const EditAnnoncePage = ({ history, dispatchCreateAnnonceAction }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [active, setActive] = useState('');
    const [user_id, setUser] = useState('');
    const [nombre_de_vue, setNbrVue] = useState('');
   



    const handleOnSubmit = event => {
        event.preventDefault();
            const data = { title, description, type, active ,user_id ,nombre_de_vue};
 
      
                dispatchCreateAnnonceAction(data, () => {
                    toast.success('Annonce crée avec succée!');
                    history.replace('/annonces');
                }, (message) => toast.error(`Error: ${message}`));
            }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <h2>Edit Note</h2>
                </div>
            </div>
            <div className="row align-items-center mt-4">
                <div className="col-9">
                    <form noValidate onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input noValidate id="title"
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control" />
                         </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input noValidate id="description"
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select noValidate id="type"
                                name="type"
                                className="form-control"
                                value={type}
                                onChange={(e) => setType(e.target.value)}>
                                <option value="">-- Select --</option>
                                <option value="GENERAL">Voiture</option>
                                <option value="IDPROOF">Moto</option>
                                <option value="PROFESSIONAL">Remorque</option>
                            </select>
                         
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="active">Active</label>
                            <input noValidate id="active"
                                type="text"
                                placeholder="active"
                                name="active"
                                value={active}
                                onChange={(e) => setActive(e.target.value)}
                                className="form-control"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_id">user_id</label>
                            <input noValidate id="user_id"
                                type="text"
                                placeholder="user_id"
                                name="user_id"
                                value={user_id}
                                onChange={(e) => setUser(e.target.value)}
                                className="form-control"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlfor="nombre_de_vue">nombre_de_vue</label>
                            <input noValidate id="nombre_de_vue"
                                type="text"
                                placeholder="nombre_de_vue"
                                name="nombre_de_vue"
                                value={nombre_de_vue}
                                onChange={(e) => setNbrVue(e.target.value)}
                                className="form-control"/>
                            
                        </div>

                        <div className="mt-5">
                            <button type="submit" className="btn btn-primary mr-2 btn-lg">
                                Save | <i className="fas fa-save"></i>
                            </button>
                            <button type="button"
                                onClick={() => history.replace("/annonces")}
                                className="btn btn-secondary btn-lg">
                                Cancel | <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
    dispatchCreateAnnonceAction: (data, onSuccess, onError) =>
        dispatch(createAnnonce(data, onSuccess, onError)),
 
});
export default connect(null, mapDispatchToProps)(EditAnnoncePage);