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
const {setDrawerState, setDialogState, setPopoverState} = ['Drawer', 'Dialog', 'Popover'].map((name) => ({
  ['set' + name + 'State']: (state) => async (dispatch, getState) => {
    const stateName = name.toLowerCase() + 'State'
    const currentState = getState().appReducer[stateName]
    dispatch({ type: UPDATE, [stateName]: { ...currentState, ...state } })
  }
})).reduce((a, c) => ({...a, ...c}))
export { setDrawerState, setDialogState, setPopoverState }
//reducer
export const appReducer = (state = {

  drawerState: {
    open: false,
  },
  popoverState: {
    open: false,
    anchor: window.document.getElementById('root'), //warning
  },
  dialogState: {
    open: false,
  },
  toggle: false
}, action) => reducer(state, action)
