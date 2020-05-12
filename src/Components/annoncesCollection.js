import React from 'react';

const AnnonceCollection = ({ annonces }) => {

    return (

        <React.Fragment>
            <table className="table table-hover mt-5 pt-5">
                <thead className="thead-dark">
                    <tr> 
                        <th scope="col">Title</th>
                 
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        annonces.map(item => (
                            <tr key={item.id}>
                                <td> {item.title}</td>                 
                                <td>{item.description}</td>
                                <td>{item.Type}</td>
                                <td>{item.active}</td>
                            </tr>
                        )) }
                </tbody>

            </table>


        </React.Fragment>
    )
}
export default AnnonceCollection;