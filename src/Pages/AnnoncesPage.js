import React ,{ useEffect }from 'react';
import { connect } from 'react-redux';
import AnnonceCollection from '../Components/annoncesCollection';
import { fetchAllAnnonces } from './../redux/actions/annoncesActionCreator'; 
import { Link } from 'react-router-dom';
  const AnnoncesPage = ({ loading, annonces, dispatchFetchAllAnnoncesAction }) =>{
    
    useEffect(() => dispatchFetchAllAnnoncesAction(),[dispatchFetchAllAnnoncesAction]);
    
    return (
           <React.Fragment>
             <div className="row my-5 pt-5">
             <div className="col-10">
                    <h2>Personal Annonces</h2>
                </div>
                <div className="col-2">
                    <Link to="/edit-annonce" className="btn btn-primary">
                        Creer une annonce 
                    </Link>
              </div>
           
              </div>
              <div className="row mt-5">
                <div className="col-12">
                    {
                        annonces.length > 0 ? <AnnonceCollection annonces={annonces} /> :
                            <div className="text-center mt-5">
                                <h2><i className="far fa-folder-open fa-3x"></i></h2>
                                <h1 className="text-center">You don't have any notes</h1>
                            </div>
                    }
                </div>
            </div>
             
           </React.Fragment>
        );
  };

const mapStateToProps = state => ({
  loading: state.loading,
  annonces: state.annonces

});

const mapDispatchToProps = dispatch =>({
  dispatchFetchAllAnnoncesAction : () => dispatch(fetchAllAnnonces())
});

  export default connect(mapStateToProps,mapDispatchToProps)(AnnoncesPage);