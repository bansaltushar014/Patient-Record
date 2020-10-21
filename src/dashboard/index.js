import React, { useEffect, useState}  from 'react';
import AddPatient from '../addPatient';
import ShowPatient from '../showPatient';

function Dashboard() {

    const [AddorShow, setAddorShow] = useState(false);

    const Add = (e) => {
        console.log("getting called" + e.currentTarget.value);
        setAddorShow(true);
    }

    const Show = (e) => {
        console.log("gettin" + e.currentTarget.value);
        setAddorShow(false);
    }

  return (
    <>
     
     <form>
    <p>
      <label>
        <input name="group1" onChange={Add} type="radio" />
        <span>Add </span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" onChange={Show} type="radio" />
  <span>Show {AddorShow}</span>
      </label>
    </p>
  </form>
        
        {AddorShow &&
            <AddPatient />
        }
        {!AddorShow &&
            <ShowPatient />
        }
    </>
  );
}

export default Dashboard;
