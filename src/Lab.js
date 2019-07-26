import React, { Component }  from 'react';


class Lab extends Component {


    fullScreenToggle() { 
    
        var browser = document.documentElement;
        if (1 >= window.outerHeight - window.innerHeight){
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
        else{
          if (browser.requestFullscreen) {
            browser.requestFullscreen();
          } else if (browser.mozRequestFullScreen) { /* Firefox */
            browser.mozRequestFullScreen();
          } else if (browser.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            browser.webkitRequestFullscreen();
          } else if (browser.msRequestFullscreen) { /* IE/Edge */
            browser.msRequestFullscreen();
          }
        }
      }
    
      componentDidMount(){
        document.getElementById('fullscreen_button').addEventListener('click', this.fullScreenToggle);
      }

    render() {
      return (
        <div>
            <div id="content-title" className="row justify-content-between">
                    <div> <i class="fas fa-fw fa-chevron-left"></i> <i class="fas fa-fw fa-chevron-right"></i> <i class="fas fa-fw fa-caret-down mr-2 "></i> | <i class="fa fa-fw ml-2 fa-home" aria-hidden="true"></i> Lab</div>
                    <div>
                        <div  id="fullscreen_button" style={{display: 'inline-block', cursor: 'pointer'}}><i class="fas fa-fw fa-compress ml-3"></i> Full Screen</div>
                        <button id="printpage" onClick={() => window.print()}><i class="fas fa-fw fa-print ml-3"></i> Print</button>
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
                  <div className="row flowsheet-row">
                                      
                          <form class="mx-2 my-1">
                          <div class="nowrap ">Flowsheet: &nbsp;</div>
                            <select name="flowsheet-selection">
                                <option value="laboratory">Laboratory</option>
                                <option value="reports">Reports</option>
                                <option value="change">Option 3</option>
                            </select>  
                          </form>
                   
                                   
                          <form class="mx-2 my-1">
                          <div>Level: &nbsp;</div>
                            <select name="flowsheet-level">
                                <option value="change_me">Option 1</option>
                                <option value="another_placeholder">Option 2</option>
                                <option value="placeholder">Option 3</option>
                            </select>  
                          </form>
                   
                                
                      <form class="d-flex flex-row align-items-center mx-2 my-1">
                        
                          <div class="mx-1">
                            <input type="radio" name="display" value="table" checked></input>Table
                          </div>
                        

                        
                          <div class="mx-1">
                            <input type="radio" name="display" value="group" checked></input>Group
                          </div>
                      

                       
                          <div class="mx-1">
                            <input type="radio" name="display" value="list" checked></input>List
                          </div>
                        
                      </form>
                    
                   
                  </div>
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
                      <div className="col-lg-2 col-md-3 d-flex flex-column">
                        <div class="flowsheet-navigator">

                          <div class="flowsheet-navigator-header d-flex align-items-center justify-content-between px-1">Navigator<i class="fa fa-window-close" aria-hidden="true"></i>
                          </div> 
                            
                          <div class="px-1 flowsheet-navigator-body">
                            
                          </div>

                        </div>
                        
                        
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <div class="d-flex flex-column">
                          <div class="flowsheet-results-header px-2 py-1">
                            <button type="button" class="flowsheet-button">Show more results</button>
                          </div>
                          <div class="flowsheet-results ">
                            No results found.
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>

      );
    }
  }
   
  export default Lab;