import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [leadsGenerated, setLeadsGenerated] = useState(null);
  const [totalLeadsCRM, setTotalLeadsCRM] = useState(null);
  const [CRMUse, setCRMUse] = useState(null);
  const [noOfAgents, setNoOfAgents] = useState(null);
  const [leadSources, setLeadSources] = useState([]);
  const [hearAboutUs, setHearAboutUs] = useState([]);

  const updateCheckBoxInput = (array, element) => {
    let updatedArray;
    if (array.includes(element)) {
      updatedArray = array.filter((src) => src !== element);
    } else {
      array.push(element);
      updatedArray = array;
    }
    return updatedArray;
  };
  const updateLeadSources = (label) => {
    let updateLeadSourcesArray = updateCheckBoxInput(leadSources, label);
    setLeadSources(updateLeadSourcesArray);
  };
  const updateHearAboutUs = (label) => {
    let updateHearAboutUsArray = updateCheckBoxInput(hearAboutUs, label);
    setHearAboutUs(updateHearAboutUsArray);
  };
  const alertUser = () => {
    alert(
      `Name ${name} Email ${email} Number ${number} Leads Generated ${leadsGenerated} totalLeads CRM ${totalLeadsCRM} CRM Use ${CRMUse} NoOFAgents ${noOfAgents} LeadSources ${leadSources} Hear About Us ${hearAboutUs}`
    );
    props.closeModal();
  };
  return (
    <div>
      <div className="row">
        <div className="modal__title col-sm-11">
          Get Started with SquadVoice
        </div>
        <div className="col-sm-1 close_modal" onClick={props.closeModal}>
          &times;
        </div>
      </div>
      <div className="row mt-1 mb-1">
        <div className="col-md-12">
          <span className="font-weight-bold">Plan Selected</span> :{" "}
          {props.currentPlan}
        </div>
      </div>
      <div className="row  mt-1 mb-1">
        <div className="col-md-12 font-weight-bold">Name</div>
        <div className="col-md-12">
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="row  mt-1 mb-1">
        <div className="col-md-6">
          <div className="font-weight-bold">E-mail Address</div>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <div className="font-weight-bold">Phone No.</div>
          <input
            type="number"
            name="number"
            onChange={(e) => setNumber(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="row  mt-1 mb-1">
        <div className="col-md-6">
          <div className="font-weight-bold">
            Number of leads you generate in a month
          </div>
          <select
            class="custom-select mr-sm-2"
            id="LeadsGenerate"
            onChange={(e) => setLeadsGenerated(e.target.value)}
          >
            <option selected>-</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-md-6  mt-1 mb-1">
          <div className="font-weight-bold">Total leads in your CRM</div>
          <select
            class="custom-select mr-sm-2"
            id="totalLeadsCRM"
            onChange={(e) => setTotalLeadsCRM(e.target.value)}
          >
            <option selected>-</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row  mt-1 mb-1">
        <div className="col-md-6">
          <div className="font-weight-bold">Which CRM do you use?</div>
          <select
            class="custom-select mr-sm-2"
            id="CRMUse"
            onChange={(e) => setCRMUse(e.target.value)}
          >
            <option selected>-</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-md-6  mt-1 mb-1">
          <div className="font-weight-bold">No. of Agents</div>
          <select
            class="custom-select mr-sm-2"
            id="noOfAgents"
            onChange={(e) => setNoOfAgents(e.target.value)}
          >
            <option selected>-</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row  mt-1 mb-1">
        <div className="col-md-12 font-weight-bold">
          What are your biggest lead sources?
        </div>
        <div
          className="col-md-12"
          onClick={(e) => updateLeadSources(e.target.value)}
        >
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              name="leadSources"
              value="zillow"
            />
            <label class="form-check-label" for="leadSources">
              Zillow
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              name="leadSources"
              value="realtor"
            />
            <label class="form-check-label" for="leadSources">
              Realtor
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              name="leadSources"
              value="Ylopo"
            />
            <label class="form-check-label" for="leadSources">
              Ylopo
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              name="leadSources"
              value="Others"
            />
            <label class="form-check-label" for="leadSources">
              Others
            </label>
          </div>
        </div>
      </div>
      <div className="row  mt-1 mb-1">
        <div className="col-md-12 font-weight-bold">
          How did you hear you about us?
        </div>
        <div
          className="col-md-12"
          name="hearAboutUs"
          onClick={(e) => updateHearAboutUs(e.target.value)}
        >
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="hearAboutUs"
                value="google"
              />
              <label class="form-check-label" for="hearAboutUs">
                Google
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="hearAboutUs"
                value="facebook"
              />
              <label class="form-check-label" for="hearAboutUs">
                Facebook
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="hearAboutUs"
                value="email"
              />
              <label class="form-check-label" for="hearAboutUs">
                Email
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="hearAboutUs"
                value="friends"
              />
              <label class="form-check-label" for="hearAboutUs">
                Friends
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="hearAboutUs"
                value="realClosers"
              />
              <label class="form-check-label" for="hearAboutUs">
                Real Closers
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <button
            type="btn"
            className="btn btn-warning submit-button"
            onClick={alertUser}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
