import React from "react";
import PlanDetails from "./PlanDetails";

function PlanList(props) {
  return (
    <div className="plan__list row">
      {props.availablePlans.map((plan) => (
        <div className="col-md-3">
          <PlanDetails planDetails={plan} changePlan={props.changePlan}/>
        </div>
      ))}
      <div className="col-md-3">
        <PlanDetails
          customDetails={{
            customHeader: "Enterprise",
            customContent: "Want more than 80 qualified leads each month?",
            customButtonText: "Get in Touch",
          }}
          changePlan={props.changePlan}
        />
      </div>
    </div>
  );
}

export default PlanList;
