import React from "react";

function PlanDetails(props) {
  return (
    <>
      {props.planDetails ? (
        <>
          <div className="plan__details">
            <div className="plan__name">{props.planDetails.plan_name}</div>
            <div className="pl-4 pr-4 content__plan">
              <div className="price__qualified__lead">
                <p className="price">{props.planDetails.price_per_lt}</p>
                <p className="description">Per Qualified lead</p>
              </div>
              <div className="month__qualified__lead">
                <p className="description">Qualified Leads Per Month</p>
                <p className="qualified__lead">
                  {props.planDetails.qualified_lead_pm}
                </p>
              </div>
              <div className="month__platform__fee">
                <p className="description">Platform Fee Per Month</p>
                <p className="platform__fee">
                  {props.planDetails.total_platform_price}
                </p>
              </div>
            </div>
            <div className="total__plan__amount">
              {props.planDetails.final_package_price}/mo
            </div>
          </div>
          <div
            className="select__plan"
            onClick={() => props.changePlan(props.planDetails.plan_name)}
          >
            Start Your Trial
          </div>
        </>
      ) : (
        <div>
          <div className="plan__details">
            <div className="plan__name">{props.customDetails.customHeader}</div>
            <div className="pl-4 pr-4 custom__content__plan">
              {props.customDetails.customContent}
            </div>
          </div>
          <div
            className="select__plan"
            onClick={() => props.changePlan(props.customDetails.customHeader)}
          >
            Get In Touch
          </div>
        </div>
      )}
    </>
  );
}

export default PlanDetails;
