import {createFormValidation, Validators} from '@lemoncode/fonk'

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio'
      },
      {
        validator: Validators.email,
        message: 'Email incorrecto'
      }
    ],
    message: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio'
      }
    ],
  },
}

export const formValidation = createFormValidation(validationSchema)
