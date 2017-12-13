export const selectCard = (id) => {
  return {
    type: "FETCH_CARD",
    payload: id
  }
}
