import { MyOwnField } from "../../MyOwnField/MyOwnField";
export const SandwichAdditionalInputsForm = (props) => (
  <>
    <MyOwnField
      label="Slices of bread"
      name="slices_of_bread"
      type="number"
      as="input"
      value={props.slices_of_bread}
      required
      placeholder="Please enter number of slices of bread"
    />
  </>
);
