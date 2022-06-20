/// <summary>
/// In this file we are going to refactor the registration...
/// ... form data for which we will use YUP
/// </summary>

import * as Yup from "yup"

// object that has the elements of the form
export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  }
}

// validate the form data whit Yup
export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El email no es correcto")
      .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  
    repeatPassword: Yup.string()  // validate that the passwords are the same
      .required("La contraseña es obligatoria")
      .oneOf([Yup.ref("password")], "Las contraseñas tienen que ser iguales"),
  })
}
