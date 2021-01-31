import React, { useEffect, useState}  from 'react';
import AddPatient from './addPatient';
import ShowPatient from './showPatient';

function Dashboard() {

    const [AddorShow, setAddorShow] = useState(false);
    
    const Add = () => {
        setAddorShow(true);
    }

    const Show = () => {
        setAddorShow(false);
    }

  return (
    <>
    <div className="container">
     <div className="card-content valign center row container">
      <div onClick={Add}><a class=" col s6 waves-effect waves-light btn-large">Add</a></div>
      <div onClick={Show}><a class=" col s6 waves-effect waves-light btn-large">Show</a></div>
    </div>
            
        {AddorShow &&
            <AddPatient />
        }
        {!AddorShow &&
            <ShowPatient />
        }
      </div>
    </>
  );
}

export default Dashboard;
