import {createFormValidation, Validators} from '@lemoncode/fonk'

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      }
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
      {
        validator: Validators.email,
        message: 'Email no válido'
      },
    ],
    phone: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    price: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    address: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    city: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    squareMeter: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    rooms: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    bathrooms: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    locationUrl: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
  },
}

export const formValidation = createFormValidation(validationSchema)
