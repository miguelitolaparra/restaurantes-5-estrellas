/// <summary>
/// We validate that the form data is correct
/// For this we will use 'yup'
/// </summary>

import * as Yup from 'yup'

export function initialValues() {
  return {
    displayName: "",
  }
}

export function validationSchema() { // checking that everything is ok
  return Yup.object({
    displayName: Yup.string().required("El nombre es necesario"),
  })
}
