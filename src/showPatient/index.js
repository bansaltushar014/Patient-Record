import React, {useState, useEffect} from 'react';
import M from 'materialize-css';

function ShowPatient() {

  const [patientData, setpatientData] = useState(['']);

  const data = [1,2,3,4];

  useEffect(() => { 
    setpatientData(JSON.parse(localStorage.getItem('PatientData')));
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var options = {};
        var instances = M.FormSelect.init(elems, options);
      });
    }, [])

    // initializeDropdown = () => {
    //     document.addEventListener('DOMContentLoaded', function() {
    //         var elems = document.querySelectorAll('select');
    //         var options = {};
    //         var instances = M.FormSelect.init(elems, options);
    //       });
    // }

    const DeleteThis = (email) => {
        console.log(email);
        let filterData = JSON.parse(localStorage.getItem('PatientData'));
        filterData = filterData.filter(item => item.patient_email!== email);
        localStorage.setItem('PatientData',  JSON.stringify(filterData));
        setpatientData(filterData);        
    }

    const Lowest = (e) => {
    
        sortByAge("Lowest");
    }

    const Highest = (e) => {
        
        sortByAge("Highest");
    }
    const sortByAge = (order) => {
        
        let sortedData = JSON.parse(localStorage.getItem('PatientData'));
        if (order == "Lowest") {
          sortedData = sortedData.sort(function (a, b) {
            return a.patient_Age - b.patient_Age
          });
          setpatientData(sortedData); 
          console.log(sortedData);
    
        } else {
          sortedData = sortedData.sort(function (a, b) {
            return b.patient_Age - a.patient_Age
          });
          console.log(sortedData);
          setpatientData(sortedData); 
        }
      }

    
  return (
    <>
    <div>
   
    <form>
    <p>
      <label>
        <input name="group1" onChange={Lowest} type="radio" />
        <span>Sort By Lowest Age </span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" onChange={Highest} type="radio" />
  <span>Sort By Highest Age</span>
      </label>
    </p>
  </form>
        

      <br/><br/><br/><br/>
        {patientData &&
            patientData.map((item, index) => {
                return <div class="row" key={index}>
                <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">{item.patient_first_name} {item.patient_last_name}</span>
                    <p>{item.patient_email}</p> <br/>
                    <p>{item.patient_disease}</p> <br/>
                    <p>{item.patient_Age}</p> <br/>
                    </div>
                    <div class="card-action">
                    <a class="waves-effect waves-light btn" onClick={() => DeleteThis(item.patient_email)}>Delete</a>
                      
                    </div>
                  </div>
                </div>
              </div>
            })
      
        }
        </div>
    </>
  );
}

export default ShowPatient;
