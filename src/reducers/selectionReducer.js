import data from './libraryList.json'

export const selectionReducer = ( state = data, action ) => {
  switch(action.type) {
    case "FETCH_CARD":
      return state
    default:
      return state
  }
}

export default selectionReducer
