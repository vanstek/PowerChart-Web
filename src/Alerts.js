import React, { Component }  from 'react';

class Alerts extends Component{
    render(){
        return(
            <div>
                <div id="content-title" className="row justify-content-between">
                    <div> ← → v | 🏠 Alerts</div>
                    <div>
                    <div onclick="fullScreenToggle()" style={{display: 'inline-block', cursor: 'pointer'}}>🖥️Full Screen</div>
                    <button id="printpage" onclick="window.print();">🖨️Print</button>
                    🔄1 minute ago
                    </div>
                </div>
                <div className="row justify-content-center" id="application">
                    <div className="container-fluid thin-in-shadow m-2" id="alerts">
                    <h3>Alerts</h3>
                    <div className="row mt-3 ml-1">
                        <div className="container-fluid">
                        <h5>CPOE (Pop-up) Alerts</h5>
                        No CPOE (Pop-up) alerts present
                        <br />
                        <br />
                        </div>
                    </div>
                    <div className="row mt-3 ml-1">
                        <div className="container-fluid">
                        <h5>Drug-Allergy Alerts</h5>
                        No Drug-Allergy alerts present
                        <br />
                        <br />
                        </div>
                    </div>
                    <div className="row mt-3 ml-1">
                        <div className="container-fluid">
                        <h5>Drug-Drug Alerts</h5>
                        No Drug-Drug alerts present
                        <br />
                        <br />
                        </div>
                    </div>
                    <div className="row mt-3 ml-1">
                        <div className="container-fluid">
                        <h5>Drug-Duplicate Alerts</h5>
                        No Drug-Duplicate alerts present
                        <br />
                        <br />
                        </div>
                    </div>
                    </div>    
                </div>
                </div>

        );
    }
}

export default Alerts;