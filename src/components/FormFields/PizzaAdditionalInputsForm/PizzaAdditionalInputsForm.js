import { MyOwnField } from "../../MyOwnField/MyOwnField";

export const PizzaAdditionalInputsForm = (props) => (
  <>
    <MyOwnField
      label="Number of slices"
      name="no_of_slices"
      type="number"
      as="input"
      value={props.no_of_slices}
      required
      placeholder="Please enter number of slices"
    />
    <MyOwnField
      label="Diameter"
      name="diameter"
      type="number"
      as="input"
      step="0.01"
      value={props.diameter}
      required
      placeholder="Please enter diameter"
    />
  </>
);
