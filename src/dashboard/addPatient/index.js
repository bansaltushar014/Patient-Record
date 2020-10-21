import React from 'react';


function AddPatient() {


    const submitForm = (e) => {
        e.preventDefault();


        let data = {
            patient_first_name: e.target.first_name.value,
            patient_last_name: e.target.last_name.value,
            patient_email: e.target.email.value,
            patient_disease: e.target.disease.value,
            patient_Age: e.target.age.value,
        }
        console.log(data)
        if(!localStorage.getItem('PatientData')){
            let PatientData = [];
            localStorage.setItem('PatientData', JSON.stringify(PatientData.push(data)));
        } else {
            let PatientData = localStorage.getItem('PatientData');            
            localStorage.setItem('PatientData',  JSON.stringify(JSON.parse(PatientData).concat(data)));
        }
        alert("Added Successfully!");

        e.target.first_name.value = '';
        e.target.last_name.value = '';
        e.target.email.value = '';
        e.target.disease.value = '';
        e.target.age.value = '';

    }


    return (
        <>
            <div className="container">
            <form className="col s12" onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" class="validate" />
                        <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" />
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="disease" type="text" className="validate" />
                        <label for="disease">Disease Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="number" id="age" min="0" max="100" />

                        <label for="JoinedDate">Age</label>
                    </div>
                </div>
                <input type="submit" className="waves-effect waves-light btn" />

            </form>
            </div>
        </>
    );
}

export default AddPatient;
