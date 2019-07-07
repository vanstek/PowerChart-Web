import React, { Component }  from 'react';

class Allergies extends Component{
    render(){
        return(
            <div>
                <div id="content-title" className="row justify-content-between">
                    <div> ← → v | 🏠 content title</div>
                    <div>
                    <div onclick="fullScreenToggle()" style={{display: 'inline-block', cursor: 'pointer'}}>🖥️Full Screen</div>
                    <button id="printpage" onclick="window.print();">🖨️Print</button>
                    🔄1 minute ago
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 px-4 py-3">
                    <div className="row">Mark All as Reviewed</div>
                    <div className="row">
                        <div className="btn-toolbar" role="toolbar" aria-label="button toolbar allergies">
                        <button type="button" className="btn btn-light mr-1 mb-1"><i className="fa fa-plus fa-fw mr-1" aria-hidden="true" />Add</button>
                        <button type="button" className="btn btn-light mr-1 mb-1"><i className="fa fa-pencil-square-o fa-fw mr-1" aria-hidden="true" />Modify</button>
                        <button type="button" className="btn btn-light mr-1 mb-1"><i className="far fa-circle fa-fw mr-1" aria-hidden="true" />No Known Allergies</button>
                        <button type="button" className="btn btn-light mr-1 mb-1"><i className="fa fa-circle-o-notch fa-fw mr-1" aria-hidden="true" />No Known Medication Allergies</button>
                        <button type="button" className="btn btn-light mr-1 mb-1"><i className="fa fa-undo fa-fw mr-1" aria-hidden="true" />Reverse Allergy Check</button>
                        <label htmlFor="allegeries-display">Display:</label>
                        <div className="btn-group">
                            <button id="allergies-display" type="button" className="btn btn-light mr-1 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Active
                            </button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Dropdown link</a>
                            <a className="dropdown-item" href="#">Dropdown link</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-12 mt-3 thin-in-shadow table-container">
                        <table className="table table-hover table-borderless">
                            <thead>
                            <tr>
                                <th scope="col">D/A</th>
                                <th scope="col">Substance</th>
                                <th scope="col">Category</th>
                                <th scope="col">Reactions</th>
                                <th scope="col">Severe</th>
                                <th scope="col">Type</th>
                                <th scope="col">C.</th>
                                <th scope="col">Est. Onset</th>
                                <th scope="col">Reaction Speed</th>
                                <th scope="col">Updated By</th>
                                <th scope="col">Source</th>
                                <th scope="col">Reviewed</th>
                                <th scope="col">I...</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>1</td>
                                <td>2</td>
                                <td>5</td>
                                <td>3</td>
                                <td>65</td>
                                <td>3</td>
                                <td>5</td>
                                <td>3</td>
                                <td>78</td>
                                <td>3</td>
                                <td>3</td>
                                <td>54</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Allergies;