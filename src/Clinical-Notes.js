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
                    <div> 
                        <i className="fas fa-fw fa-chevron-left"></i> 
                        <i className="fas fa-fw fa-chevron-right"></i> 
                        <i className="fas fa-fw fa-caret-down mr-2 "></i> 
                        | 
                        <i className="fa fa-fw ml-2 fa-home" aria-hidden="true"></i> Clinical Notes
                        
                    </div>
                    <div>
                        <div id="fullscreen_button" style={{display: 'inline-block', cursor: 'pointer'}}><i class="fas fa-fw fa-compress ml-3"></i> Full Screen</div>
                        <button id="printpage" onClick={() => window.print()}><i class="fas fa-fw fa-print ml-3"></i> Print</button>
                        <i className="fas fa-fw fa-sync-alt ml-3"></i> 1 minute ago
                    </div>
            </div>
            <div className="row" id="application">
                <div className="col-12 px-4 py-2">
                  <div className="row">
                      <i className="fas fa-save m-1" style={{cursor: 'pointer'}}/>
                      <i className="far fa-copy m-1" style={{cursor: 'pointer'}} />
                  </div>
                
                  <div className="row flowsheet-datebar">
                      <div className="arrows">
                      <i className="fas fa-caret-left mx-2" style={{cursor: 'pointer'}} />
                      <i className="fas fa-caret-right mx-2" style={{cursor: 'pointer'}} />
                      </div>
                      <div className="datebar-date">Friday, May 20th, 2016 - Monday, May 20, 2019, 0 out of 0 documents are accessible.</div>
                      <div className="arrows">
                      <i className="fas fa-caret-left mx-2" style={{cursor: 'pointer'}} />
                      <i className="fas fa-caret-right mx-2" style={{cursor: 'pointer'}} />
                      </div>
                  </div>
                  <div className="row border py-1 justify-content-around">
                        <div className="col-lg-2 col-md-3 d-flex flex-column">
                          <div className="clin-notes-nav">
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <div className="d-flex flex-column clin-notes-results">
                            <div className="clin-notes-results-body"></div>
                            <div className="clin-notes-results-actions"></div>
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