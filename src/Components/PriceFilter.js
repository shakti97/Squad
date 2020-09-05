import React from "react";

function PriceFilter(props) {
  return (
    <div>
      <div className="price__filter">
        {props.availablePriceRange.map((priceRange) => (
          <div
            className={props.currentPriceRange === priceRange ? "active" : ""}
            onClick={() => props.changePriceRange(priceRange)}
          >
            {priceRange}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceFilter;
