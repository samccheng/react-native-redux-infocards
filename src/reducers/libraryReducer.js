import data from './libraryList.json'

const libraryReducer = ( state = data, action ) => {
  switch(action.type) {
    case "FETCH_LIST":
      return state
    default:
      return state
  }
}

export default libraryReducer
