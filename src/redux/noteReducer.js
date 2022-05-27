import * as types from './noteTypes'
export const initialState = {
  notes: [],
  noted: []
}

 const  noteReducer = (state=initialState,action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return {
        ...state, 
        notes: [action.payload,...state.notes]
      }
      case types.UPDATE_NOTE:
      return {
        ...state,
        notes: action.payload
      }
      case types.EDIT_NOTE:
      return {...state}
    default:
      return state
  }
}
export default noteReducer