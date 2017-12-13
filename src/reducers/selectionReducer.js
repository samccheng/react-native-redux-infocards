import data from './libraryList.json'

export const selectionReducer = ( state = null, action ) => {
  switch(action.type) {
    case "FETCH_CARD":
      return action.payload
    default:
      return state
  }
}

export default selectionReducer
