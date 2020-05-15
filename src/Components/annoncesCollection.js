import React from 'react';

const AnnonceCollection = ({ annonces }) => {

    return (

        <React.Fragment>
            <table className="table table-hover mt-5 pt-5">
                <thead className="thead-dark">
                    <tr> 
                        <th scope="col">neuf</th>
                 
                        <th scope="col">origine</th>
                        <th scope="col">dedouanement</th>
                        <th scope="col">marque</th>
                        <th scope="col">modele</th>
                        <th scope="col">finition</th>
                        <th scope="col">année</th>
                        <th scope="col">mois</th>
                        <th scope="col">kilometrage</th>
                        <th scope="col">matricule</th>
                        <th scope="col">edition_special</th>
                        <th scope="col">type_vehicule</th>
                        <th scope="col">nbr_portes</th>
                        <th scope="col">nbr_sieges</th>
                        <th scope="col">carburant</th>
                        <th scope="col">transmission</th>
                        <th scope="col">cylindree</th>
                        <th scope="col">p_fiscal</th>
                        <th scope="col">p_chevaux</th>
                        <th scope="col">motorisation</th>
                        <th scope="col">consomation</th>
                        <th scope="col">frais_vignette</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        annonces.map(item => (
                            <tr key={item.id}>
                                <td> {item.neuf}</td>                 
                                <td>{item.origine}</td>
                                <td>{item.dedouanement}</td>
                                <td>{item.marque}</td>
                                <td>{item.modele}</td>
                                <td>{item.finition}</td>
                                <td>{item.année}</td>
                                <td>{item.mois}</td>
                                <td>{item.kilometrage}</td>
                                <td>{item.matricule}</td>
                                <td>{item.edition_special}</td>
                                <td>{item.type_vehicule}</td>
                                <td>{item.nbr_portes}</td>
                                <td>{item.nbr_sieges}</td>
                                <td>{item.carburant}</td>
                                <td>{item.transmission}</td>
                                <td>{item.cylindree}</td>
                                <td>{item.p_fiscal}</td>
                                <td>{item.p_chevaux}</td>
                                <td>{item.motorisation}</td>
                                <td>{item.consomation}</td>
                                <td>{item.frais_vignette}</td>
                            </tr>
                        )) }
                </tbody>

            </table>


        </React.Fragment>
    )
}
export default AnnonceCollection;