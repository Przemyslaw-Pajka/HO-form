import { PizzaAdditionalInputsForm } from "../components/FormFields/PizzaAdditionalInputsForm/PizzaAdditionalInputsForm";
import { SoupAdditionalInputsForm } from "../components/FormFields/SoupAdditionalInputsForm/SoupAdditionalInputsForm";
import { SandwichAdditionalInputsForm } from "../components/FormFields/SandwichAdditionalInputsForm/SandwichAdditionalInputsForm";
import { dishTypes } from "./dishTypes";

export const getAdditionalInputsForm = (dishType) => {
  switch (dishType) {
    case dishTypes.PIZZA:
      return PizzaAdditionalInputsForm;
    case dishTypes.SOUP:
      return SoupAdditionalInputsForm;
    case dishTypes.SANDWICH:
      return SandwichAdditionalInputsForm;
    default:
      return false;
  }
};
