import React from "react";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createAnnonce } from '../../redux/actions/annoncesActionCreator';
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Result = ({ props,history, dispatchCreateAnnonceAction })  => {
  const { state } = useStateMachine(updateAction);

  const handleOnSubmit = event => {
    event.preventDefault();
      //  const data = { title, description, type, active ,user_id ,nombre_de_vue};
      //  const data = { state };
     

      const data = (state.yourDetails) ;
            dispatchCreateAnnonceAction(data, () => {
                toast.success('Annonce crée avec succée!');
                history.replace('/annonces');
            }, (message) => toast.error(`Error: ${message}`));
        }

  return (
    <div className="container">
      <h2>Result</h2>
      <pre>{JSON.stringify(state.yourDetails)}</pre>
     
      <button onClick={handleOnSubmit}>send</button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  dispatchCreateAnnonceAction: (data, onSuccess, onError) =>
      dispatch(createAnnonce(data, onSuccess, onError)),

});
export default connect(null, mapDispatchToProps)(Result);

