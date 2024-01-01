import React from "react";
import FormWithoutState from "./FormWithoutState";
import FormComponentWithState from "./FormWithState";

function FormDataOutput() {
  return (
    <div>
      <FormWithoutState />
      <FormComponentWithState />
    </div>
  );
}

export default FormDataOutput;
