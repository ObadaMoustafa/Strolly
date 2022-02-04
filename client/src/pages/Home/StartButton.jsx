import React from "react";
import "../../styles/StartButton.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const StartButton = () => {
  return (
    <div data-cy="start-button" className="start-button-container">
      <PrimaryButton href="/find_strollers" text="Start" width="200px" />
    </div>
  );
};

export default StartButton;
