import React, {Component} from 'react';

class Reports extends Component{
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
                <div className="row">buttons?</div>
                <div className="row">flowsheet dropdowns</div>
                <div className="row">date range? with back forward buttons</div>
                <div className="row">
                  <div className="col-2">navigator</div>
                  <div className="col-10">
                    <div className="row">
                      <button>show more results</button>
                    </div>
                    results
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Reports;