import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import Info from '../PatientDataModal'
import {CSVLink, CSVDownload} from 'react-csv';
import Pagination from "react-js-pagination";

function ShowPatient() {

  const [patientData, setpatientData] = useState([{}]);
  const [activePage, setactivePage] = ('');

  useEffect(() => {
    setpatientData(JSON.parse(localStorage.getItem('PatientData')));
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      var options = {};
      var instances = M.FormSelect.init(elems, options);
    });
    handlePageChange(1);
  }, [])


  const DeleteThis = (email) => {
    console.log(email);
    let filterData = JSON.parse(localStorage.getItem('PatientData'));
    filterData = filterData.filter(item => item.patient_email !== email);
    localStorage.setItem('PatientData', JSON.stringify(filterData));
    setpatientData(filterData);
  }

  const sortByAge = (e) => {
    let order = e.target.value;
    let sortedData = JSON.parse(localStorage.getItem('PatientData'));
    if (order == "Lowest") {
      sortedData = sortedData.sort(function (a, b) {
        return a.patient_Age - b.patient_Age
      });
      setpatientData(sortedData);

    } else {
      sortedData = sortedData.sort(function (a, b) {
        return b.patient_Age - a.patient_Age
      });
      setpatientData(sortedData);
    }
  }

  const searchByemail = (e) => {
    const value = e.target.value.toLowerCase();

    if (value.length === 0) {
      setpatientData(JSON.parse(localStorage.getItem('PatientData')));
    }

    if (value.length > 1) {
      const g = patientData.filter(
        (f) => JSON.stringify(f).toLowerCase().indexOf(value) !== -1
      );

      setpatientData(g);
    }
  }

   const handlePageChange = (pageNumber) =>{
    console.log(`active page is ${pageNumber}`);

    let data = JSON.parse(localStorage.getItem('PatientData'));
    let first = 4*(pageNumber-1);
    let last = 4*pageNumber;
    console.log("first " + first + "last " +last);
    setpatientData(data.slice(first,last));
    
    // this.setState({activePage: pageNumber});
  }


  return (
    <>
      <div>

        <div className="row">

          <div className="col s4 m4" style={{ paddingTop: '1rem' }}>
            <select onChange={sortByAge} class="browser-default">
              <option value="" disabled selected>Sort By Age</option>
              <option value="Lowest">Lowest</option>
              <option value="Highest">Highest</option>
            </select>
          </div>

          <div className="col s4 m4">
            <form>
              <div class="input-field">
                <input id="search" type="text" onChange={searchByemail} class="validate" />
                <label for="search">Search</label>
              </div>
            </form>
          </div>
          <div className="col s4 m4" style={{ paddingTop: '1rem' }}>
          <a class="waves-light btn"><CSVLink data={patientData}  style={{color: 'white'}}>Download CSV</CSVLink></a>            
          </div>
            
          
        </div>

        <br />
        <div className="row">
          {patientData &&
            patientData.map((item, index) => {
              return <div class="col s12 m6" key={index}>
                <div>
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">{item.patient_first_name} {item.patient_last_name}</span>
                      <p>Email : {item.patient_email}</p> <br />
                      <p>Disease : {item.patient_disease}</p> <br />
                      <p>Age : {item.patient_Age}</p>
                    </div>
                    <div class="card-action">
                      <a class="waves-effect waves-light btn" onClick={() => DeleteThis(item.patient_email)}>Delete</a>
                    &nbsp;<Info data={item} />
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={handlePageChange.bind(this)}
        />
      </div>
    </>
  );
}

export default ShowPatient;
