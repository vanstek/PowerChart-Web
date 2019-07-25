import React, { Component }  from 'react';


class Lab extends Component {
    render() {
      return (
        <div>
            <div id="content-title" className="row justify-content-between">
                    <div> <i class="fas fa-fw fa-chevron-left"></i> <i class="fas fa-fw fa-chevron-right"></i> <i class="fas fa-fw fa-caret-down mr-2 "></i> | <i class="fa fa-fw ml-2 fa-home" aria-hidden="true"></i> Lab</div>
                    <div>
                        <div onclick="fullScreenToggle()" style={{display: 'inline-block', cursor: 'pointer'}}><i class="fas fa-fw fa-compress ml-3"></i> Full Screen</div>
                        <button id="printpage" onclick="window.print();"><i class="fas fa-fw fa-print ml-3"></i> Print</button>
                      <i class="fas fa-fw fa-sync-alt ml-3"></i> 1 minute ago
                    </div>
                </div>
            <div className="row" id="application">
                <div className="col-12 px-4 py-2">
                <div className="row">
                    <i className="fa fa-bar-chart m-2" style={{cursor: 'pointer'}} aria-hidden="true" />
                    <i className="fa fa-search m-2" style={{cursor: 'pointer'}} />
                    <i className="fab fa-digital-ocean m-2" style={{cursor: 'pointer'}} />
                </div>
                <div className="row flowsheet-row">flowsheet dropdowns</div>
                <div className="row flowsheet-datebar">
                    <div className="arrows">
                    <i className="fas fa-caret-left mx-2" style={{cursor: 'pointer'}} />
                    <i className="fas fa-caret-right mx-2" style={{cursor: 'pointer'}} />
                    </div>
                    <div>May 13, 2019</div>
                    <div className="arrows">
                    <i className="fas fa-caret-left mx-2" style={{cursor: 'pointer'}} />
                    <i className="fas fa-caret-right mx-2" style={{cursor: 'pointer'}} />
                    </div>
                </div>
                <div className="row border py-1 justify-content-around">
                    <div className="col-2 flowsheet-navigator">navigator</div>
                    <div className="col-10">
                    <div className="row">
                        <button type="button" className="btn btn-secondary">show more results</button>
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
   
  export default Lab;