import * as types from './noteTypes'

export const addNotes = (data) => ({
  type: types.ADD_NOTE,
  payload: data
})
export const updateNotes = (data) => ({
  type: types.UPDATE_NOTE,
  payload: data
})
export const addValue = (data) => ({
  type: types.ADD_VALUE,
  payload: data
})