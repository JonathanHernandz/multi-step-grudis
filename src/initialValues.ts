import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
  nombre1: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  nombre2: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  apellidoPaterno: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  apellidoMaterno: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  curp: {
    value: '',
    error: '',
    required: true,
    minLength: 2,
    maxLength: 20
  },
  rfc: {
    value: '',
    error: '',
    required: true,
    minLength: 2,
    maxLength: 20
  },
  agreenemt: {
    value: false,
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  }
}
