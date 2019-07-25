import React, {Component} from 'react';

class Reports extends Component{
    render(){
        return(
            <div>
            <div id="content-title" className="row justify-content-between">
                    <div> <i class="fas fa-fw fa-chevron-left"></i> <i class="fas fa-fw fa-chevron-right"></i> <i class="fas fa-fw fa-caret-down mr-2 "></i> | <i class="fa fa-fw ml-2 fa-home" aria-hidden="true"></i> Reports</div>
                    <div>
                        <div onclick="fullScreenToggle()" style={{display: 'inline-block', cursor: 'pointer'}}><i class="fas fa-fw fa-compress ml-3"></i> Full Screen</div>
                        <button id="printpage" onclick="window.print();"><i class="fas fa-fw fa-print ml-3"></i> Print</button>
                <i class="fas fa-fw fa-sync-alt ml-3"></i> 1 minute ago
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