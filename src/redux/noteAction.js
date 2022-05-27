import * as types from './noteTypes'

export const addNotes = (data) => ({
  type: types.ADD_NOTE,
  payload: data
})
export const updateNotes = (data) => ({
  type: types.UPDATE_NOTE,
  payload: data
})
export const editNotes = (data) => ({
  type: types.EDIT_NOTE,
  payload: data
})
