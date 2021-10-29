import React from "react";
import { Formik } from "formik";
import { dishTypes } from "../../utils/dishTypes.js";
import { ButtonSubmit } from "../ButtonSubmit/ButtonSubmit.js";
import { ContactFormStyled } from "./styles/ContactFormStyled";
import { DefaultInputsForm } from "../FormFields/DefaultInputsForm/DefaultInputsForm.js";
import { getAdditionalInputsForm } from "../../utils/getAdditionalInputsForm.js";
import { sendData } from "../../utils/sendData.js";
import { clearForm } from "../../utils/clearForm";
import { cleanObj } from "../../utils/cleanObj";

let ContactForm = (props) => {
  return (
    <Formik
      initialValues={{
        type: false,
        name: "",
        preparation_time: null,
      }}
      onSubmit={(values, { resetForm }) => {
        const data = cleanObj(values);

        if (values.type === dishTypes.SOUP)
          data.spiciness_scale = Number(values.spiciness_scale);

        sendData(
          JSON.stringify(data, null, 2),
          props.setMessageStatus,
          props.setIsSubmit
        );
        clearForm(resetForm);
      }}>
      {(props) => (
        <ContactFormStyled
          onReset={props.handleReset}
          onSubmit={props.handleSubmit}
          isLightThemeColor={props.isLightThemeColor}>
          <DefaultInputsForm values={props.values} />
          {(() => {
            const isDishTypeSelected = props.values.type
              ? props.values.type
              : false;

            if (!isDishTypeSelected) return false;

            const AdditionalInputsComponent = getAdditionalInputsForm(
              props.values.type
            );

            return <AdditionalInputsComponent values={props.values} />;
          })()}
          <ButtonSubmit />
        </ContactFormStyled>
      )}
    </Formik>
  );
};

export default ContactForm;
