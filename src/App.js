import React, { useState } from "react";
import PriceFilter from "./Components/PriceFilter";
import "./App.css";
import PlanList from "./Components/PlanList";
import plans from "./assets/plans.json";
import Modal from "react-modal";
import Form from "./Components/Form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [selectedPriceRange, setPriceRange] = useState("$200K-$300K");
  const [showModal, setShowModal] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);
  const filteredPlans = plans[selectedPriceRange];

  const updateShowModal = (plan) => {
    setCurrentPlan(plan);
    setShowModal(true);
  };
  return (
    <div className="App">
      <PriceFilter
        availablePriceRange={[
          "$100K-$200K",
          "$200K-$300K",
          "$300K-$400K",
          "$400K-$500K",
          "$500K+",
        ]}
        changePriceRange={setPriceRange}
        currentPriceRange={selectedPriceRange}
      />
      <PlanList availablePlans={filteredPlans} changePlan={updateShowModal} />
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form
          currentPlan={currentPlan}
          closeModal={() => setShowModal(false)}
        />
      </Modal>
    </div>
  );
}

export default App;
