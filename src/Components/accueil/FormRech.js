import React, { Component } from 'react'
import { FaSearch, FaAngleDown } from 'react-icons/fa';
export default class FormRech extends Component {
    render() {
        return (
            <div className="container-fluid">
                <form>
                <div className="row">
                    <div className="col-12 pt-3 pb-2 autosug-form-checkbox">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="etat" type="checkbox" id="inlineCheckbox1" value="Neuf" />
                            <label className="form-check-label text-light ml-1" htmlFor="inlineCheckbox1">Neuf</label>
                        </div>
                        <div className="form-check form-check-inline ml-3">
                            <input className="form-check-input" name="etat" type="checkbox" id="inlineCheckbox2" value="Occasion" />
                            <label className="form-check-label text-light ml-1" htmlFor="inlineCheckbox2">Occasion</label>
                        </div>
                    </div>
                </div>               
                
                <div className="form-group mb-2">
                    <div className="selectdiv">
                        <label>
                            <select id="inputState" className="form-control">
                                <option selected>Marque</option>
                                <option>...</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <div className="selectdiv">
                        <label>
                            <select id="inputState" className="form-control">
                                <option selected>Modéle</option>
                                <option>...</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <div className="selectdiv">
                        <label>
                            <select id="inputState" className="form-control">
                                <option selected>Année</option>
                                <option>...</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <div className="selectdiv">
                        <label>
                            <select id="inputState" className="form-control">
                                <option selected>Carburant</option>
                                <option>...</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <div className="selectdiv">
                        <label>
                            <select id="inputState" className="form-control">
                                <option selected>Ville</option>
                                <option>...</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="form-group pt-0 mb-2">
                    <label className="text-light autosug_label_range" htmlFor="customRange3">Prix min</label>
                    <input type="range" multiple className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
                </div>
                <div className="form-group mb-2">
                    <button type="button" className="btn btn-autosug-jaune btn-search text-uppercase">RECHERCHE</button>
                </div>
                <div className="form-group text-center py-2">
                    <a href="#" className="text-light rechdetail"><FaSearch className="mr-2"/>Recherche détaillée</a>
                </div>
                </form>
            </div>
        )
    }
}
