import { dispatch } from '../index'

export const setName = dispatch((name) => ({  
  type: 'SET_NAME',
  name
}));

export const setNames = dispatch((name1, name2) => ({  
  type: 'SET_NAMES',
  name1,
  name2
}));