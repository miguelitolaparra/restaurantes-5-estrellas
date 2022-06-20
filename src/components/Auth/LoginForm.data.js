/// <summary>
/// In this file we are going to refactor the login
/// we will use YUP as in the Registration form
/// </summary>

import * as Yup from 'yup'

export function initialValues() {
  return {
    email: "",
    password: "",
  }
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatoria"),
  })
}
