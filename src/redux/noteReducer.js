import * as types from './noteTypes'
export const initialState = {
  notes: [
  
  ]
}

 const  noteReducer = (state=initialState,action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return {
        ...state, 
        notes: [action.payload,...state.notes]
      }
      case types.UPDATE_NOTE:
      //   const noteId= action.payload.id
			// const noteIndex= state.notes.find(
			// 	(note) => note.id === noteId
			// )
			
      return {
        ...state,
        notes: action.payload
      }
    default:
      return state
  }
}
export default noteReducer