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
export const setDialogState = (newState) => async (dispatch, getState) => {
  const { dialogState } = getState().appReducer
  dispatch({ type: UPDATE, dialogState: { ...dialogState, ...newState } })
}
//reducer
export const appReducer = (state = {
  dialogState: {
    open: false,
    title: '',
    content: '',
  },
  toggle: false
}, action) => reducer(state, action)
