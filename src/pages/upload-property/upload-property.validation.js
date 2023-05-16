import {createFormValidation, Validators} from '@lemoncode/fonk'
import {arrayRequired} from "@lemoncode/fonk-array-required-validator";

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
      {
        validator: Validators.pattern,
        message: 'Formato no válido',
        customArgs: {pattern: /^(?:(?:\+|00)34[-\s]?)?(?:\(?\d{1,3}\)?[-\s]?)?\d{9}$/},
      }
    ],
    price: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    saleTypes: [
      {
        validator: arrayRequired.validator,
        message: 'Seleccionar al menos una característica',
        customArgs: {minLength: 1},
      }
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
        validator: Validators.pattern,
        message: 'Url no válida',
        customArgs: {pattern: /^https?:\/\/(?:www\.)?google\.com\/maps\/(?:.*[\/?&]pb=)?(?:.*[\/?&]q=)?([^&]+).*/},
      },
    ],
    /* Considero que no es obligatorio añadir características adicionales
    mainFeatures: [
      {
        validator: arrayRequired.validator,
        message: 'S',
        customArgs: {minLength: 1},
      }
    ],*/
    images: [
      {
        validator: Validators.minLength,
        message: 'Debe añadir al menos una imagen',
        customArgs: {length: 1},
      }
    ]
  },
}

export const formValidation = createFormValidation(validationSchema)
