import { v4 as uuidv4 } from "uuid";
import { MyOwnField } from "../../MyOwnField/MyOwnField";
import { maxSpicinessScale } from "../../../utils/maxSpicinessScale";

export const SoupAdditionalInputsForm = () => (
  <>
    <MyOwnField
      name="spiciness_scale"
      as="select"
      type="number"
      label="Spiciness scale"
      required>
      <option value="">Select a spiciness scale</option>

      {[...Array(maxSpicinessScale)].map((value, index) => (
        <option key={uuidv4()} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </MyOwnField>
  </>
);
