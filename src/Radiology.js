import React, { Component } from 'react';
import PatientData from './data/data.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';



class Radiology extends Component {
    state = {
        products: [
            {
                id: 1,
                name: 'TV',
                'price': 1000
            },
            {
                id: 2,
                name: 'Mobile',
                'price': 500
            },
            {
                id: 3,
                name: 'Book',
                'price': 20
            },
        ],
        columns: [{
            dataField: 'id',
            text: 'Product ID'
        },
        {
            dataField: 'name',
            text: 'Product Name'
        }, {
            dataField: 'price',
            text: 'Product Price',
            sort: true
        }]
    } 



    render() {
        return (
            <div>
                <div id="content-title" className="row justify-content-between">
                    <div> <i class="fas fa-fw fa-chevron-left"></i> <i class="fas fa-fw fa-chevron-right"></i> <i class="fas fa-fw fa-caret-down mr-2 "></i> | <i class="fa fa-fw ml-2 fa-home" aria-hidden="true"></i> Radiology</div>
                    <div>
                        <div style={{ display: 'inline-block', cursor: 'pointer' }}><i class="fas fa-fw fa-compress ml-3"></i> Full Screen</div>
                        <button id="printpage" onclick="window.print();"><i class="fas fa-fw fa-print ml-3"></i> Print</button>
                        <i class="fas fa-fw fa-sync-alt ml-3"></i> 1 minute ago
                    </div>
                </div>
                <div className="row" id="application">
                    <div className="col-12 px-4 py-3">
                        <div className="row">Mark All as Reviewed</div>
                        <div className="row ">
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

z
                        
                        <div className="row justify-content-md-center">
                            <div className="col-12 mt-3 thin-in-shadow table-container p-0">
                              
                                        {/* TABLE LAYOUT FOR REACT BOOTSTRAP TABLE NEXT

                                            LABEL |  DEMOGRAPHIC | LABEL | DEMOGRAPHIC VALUE | Temoral Tier | Group | Prior History | Case ID | Node Auto ID | Node ID | Category ID | DefaultBnState | Node Type | Content Item ID | Undefined 

                                        */}


                                <BootstrapTable
                                    bootstrap4
                                    striped
                                    hover
                                    bordered={false}
                                    keyField='id'
                                    data={
                                        if (PatientData.)
                                        }
                                    columns={PatientData} />

                                {/*

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
                                */}
                            </div>
                             
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Radiology;