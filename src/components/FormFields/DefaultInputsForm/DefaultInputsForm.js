import { v4 as uuidv4 } from "uuid";
import { MyOwnField } from "../../MyOwnField/MyOwnField";
import { dishTypes } from "../../../utils/dishTypes";

export const DefaultInputsForm = (props) => (
  <>
    <MyOwnField
      id="dishName"
      label="Dish name"
      name="name"
      type="text"
      as="input"
      value={props.name}
      placeholder="Please enter dish name"
      required
    />
    <MyOwnField
      id="dishType"
      as="select"
      name="type"
      label="Dish type"
      required>
      <option value="">Select a dish type</option>
      {Object.values(dishTypes).map((element) => (
        <option key={uuidv4()} value={element}>
          {element}
        </option>
      ))}
    </MyOwnField>
    <MyOwnField
      id="preparationTime"
      label="Preparation time"
      name="preparation_time"
      type="text"
      as="input"
      value={props.preparation_time}
      placeholder="01:25:30"
      required
      pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
    />
  </>
);
