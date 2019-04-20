import { reducer, UPDATE } from '../util/redux-util'
//state
export const appState = ({ appReducer: { ...keys } }) => (keys)
//dispatch
export const appDispatch = (dispatch) => ({
  onToggle: (toggle) => dispatch({ type: UPDATE, toggle }),
  onMount: () => dispatch(mount()),
});
//functions
export const mount = () => async (dispatch, getState) => {
  console.log('REDUX: app mount')
  const { toggle } = getState().appReducer
  dispatch({ type: UPDATE, toggle })
}
//reducer
export const appReducer = (state = {
  toggle: false
}, action) => reducer(state, action)
