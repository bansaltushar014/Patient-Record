import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {

  constructor(props){
      super(props);
      console.log(props);
  }

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log(this.props.data);
      },
      onOpenEnd: () => {
        // console.log("Open End");
      },
      onCloseStart: () => {
        // console.log("Close Start");
      },
      onCloseEnd: () => {
        // console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    const item = this.props.data;
    return (
      <>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Info
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >

          <div className="modal-content">
         
        <p>First Name : {item.patient_first_name}</p>
        <p>Last Name : {item.patient_lasst_name}</p>
        <p>Email : {item.patient_email}</p>
        <p>Age : {item.patient_Age}</p>
        <p>Disease : {item.patient_disease}</p>
          </div>
          <div class="modal-footer">
           <a href="#" class="modal-close waves-effect waves-green btn-flat">
              Okay
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;