/**************************************
 * Requests
 **************************************/
export const SERVER = 'http://192.168.0.132:8080'
export const POST = {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, cors, *same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
    "Content-Encoding": "gzip",
    // "Content-Type": "application/x-www-form-urlencoded",
  },
  redirect: "follow", // manual, *follow, error
  referrer: "no-referrer", // no-referrer, *client
}
//generic event type for updating state
export const UPDATE = 'UPDATE_STATE'
//generic reducer for updating state
export const reducer = (state, action) => {
  //console.log(action)
  const { type } = action
  switch (type) {
    case UPDATE:
      const a = { ...action }
      delete a.type
      return { ...state, ...a }
    default:
      return state
  }
}