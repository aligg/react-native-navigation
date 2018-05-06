import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from '../actions/types'

const INITITAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE: 
      // action.payload === { prop: 'name', value: 'jane' }
      // square braces are not an array, they are for key interpolation
      return { ...state, [action.payload.prop]: action.payload.value }
    case EMPLOYEE_CREATE:
      return INITITAL_STATE
    default:
      return state
  }
}
