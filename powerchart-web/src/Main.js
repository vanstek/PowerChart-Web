import React, { Component } from "react";

import {
  NavLink,
  HashRouter
} from "react-router-dom";


 
class Main extends Component {
  render() {
    return (
      
      <div id="main" className="container-fluid h-100">
        <div id="tabs" className="row">
          <ul className="nav nav-tabs">
            <li>
              <a className="nav-link active" href="#">CRAYON, RED</a>
            </li>
            <li>
              <a className="nav-link" href="#">PENCIL, BLACK</a>
            </li>
            <li>
              <a className="nav-link" href="#">PEN, BLACK</a>
            </li>
          </ul>
        </div>
        <div id="tab-content" className="row">
          CRAYON, RED<br />
          **Allergies not recorded**<br />
          4Y (5/1/2019) F
  </div>
        <div id="content-panel" className="row">
          <div id="sidebar" className="col-lg-1 col-md-2 col-3 h-100 flex-vertical">
            <div className="title">
              Menu
      </div>
            <ul id="menubar" className="nav">
              <li className="nav-item">
                <a className="nav-link" href="./phqo.html">Provider Home/Quick Orders</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./orders.html">Orders</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./powernote.html">PowerNote</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./clinical-notes.html">Clinical Notes</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./documents.html">All Documents</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./outside-records.html">Outside Records</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./impression-plan.html">Impression and Plan</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./lab.html">Lab</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./micro.html">Micro</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./microviewer.html">MicroViewer</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./reports.html">Reports</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./radiology.html">Radiology</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./vital-signs">Vital Signs</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./data.html">All Data</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./med-review.html">Med Review</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./mar-sum.html">Mar Sum</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./patient-info.html">Patient Information</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <br />
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./36-hour.html">36 Hour View</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./allergies.html">Allergies</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./caredex.html">Caredex</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./communication-view.html">Communication View</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./free-text-doc.html">Free Text Documentation</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./forms.html">Forms</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./hemodialysis.html">Hemodialysis View</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./immunizations.html">Immunizations</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pcm-labor-delivery.html">PCM Labor &amp; Delivery View</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./emar.html">eMAR</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./med-list.html">Medication List</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./med-grid.html">Med Grid</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./newborn.html">Newborn View</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./nicu.html">NICU View</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./nurse-docs.html">Nursing Documentation</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pregnancy-report.html">Pregnancy Report</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./prengancy-summary.html">Pregnancy Summary</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./problems-diagnoses">Problems and Diagnoses</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <br />
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./growth-charts.html">Growth Charts</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./delivery-record.html">Delivery Record</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./health-maintenance.html">Health Maintenance</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./hitsories.html">Histories</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./assess.html">Assess</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./rehab-view.html">Rehab View</a>
                <div className="underline" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./alerts.html">Alerts</a>
                <div className="underline" />
              </li>
            </ul>
          </div>
          <div id="display" className="col-lg-11 col-md-10 col-9 h-100">
            <div id="content-title" className="row justify-content-between">
              <div> ← → v | 🏠 content title</div>
              <div>
                <div onclick="fullScreenToggle()" style={{ display: 'inline-block', cursor: 'pointer' }}>🖥️Full Screen</div>
                <button id="printpage" onclick="window.print();">🖨️Print</button>
                🔄1 minute ago
        </div>
            </div>
            <div className="row">
              <div className="col-md-4">col1</div>
              <div className="col-md-4">col2</div>
              <div className="col-md-4">col3</div>
            </div>
          </div>
        </div>
      </div>




    );
  }
}
 
export default Main;