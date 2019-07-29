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
                    <div> <i className="fas fa-fw fa-chevron-left"></i> <i className="fas fa-fw fa-chevron-right"></i> <i className="fas fa-fw fa-caret-down mr-2 "></i> | <i className="fa fa-fw ml-2 fa-home" aria-hidden="true"></i> Clinical Notes</div>
                    <div>
                        <div  id="fullscreen_button" style={{display: 'inline-block', cursor: 'pointer'}}><i className="fas fa-fw fa-compress ml-3"></i> Full Screen</div>
                        <button id="printpage" onClick={() => window.print()}><i className="fas fa-fw fa-print ml-3"></i> Print</button>
                        <i className="fas fa-fw fa-sync-alt ml-3"></i> 1 minute ago
                    </div>
                </div>
            <div className="row" id="application">
                <div className="col-12 px-4 py-2">
                  <div className="row">
                      <i className="fa fa-bar-chart m-2" style={{cursor: 'pointer'}} aria-hidden="true" />
                      <i className="fa fa-search m-2" style={{cursor: 'pointer'}} />
                      <i className="fab fa-digital-ocean m-2" style={{cursor: 'pointer'}} />
                  </div>
                
                  <div className="row flowsheet-datebar">
                      <div className="arrows">
                      <i className="fas fa-caret-left mx-2" style={{cursor: 'pointer'}} />
                      <i className="fas fa-caret-right mx-2" style={{cursor: 'pointer'}} />
                      </div>
                      <div className="datebar-date">Last 100 results in the past 3 years</div>
                      <div className="arrows">
                      <i className="fas fa-caret-left mx-2" style={{cursor: 'pointer'}} />
                      <i className="fas fa-caret-right mx-2" style={{cursor: 'pointer'}} />
                      </div>
                  </div>
                  <div className="row border py-1 justify-content-around">
                      <div className="col-lg-2 col-md-3 d-flex flex-column">
                       nav
                      </div>
                      <div className="col-lg-10 col-md-9">
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