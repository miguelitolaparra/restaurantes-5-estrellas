/// <summary>
/// We validate that the form data is correct
/// For this we will use 'yup'
/// </summary>

import * as Yup from 'yup'

export function initialValues() {
  return {
    email: "",
    password: "",
  }
}

export function validationSchema() { // checking that everything is ok
  return Yup.object({
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  })
}
