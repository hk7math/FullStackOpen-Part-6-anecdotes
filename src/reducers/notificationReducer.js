const initialState = 'Welcome!'
let timeout

export const setNotification = (content, second) => (
  async dispatch => {
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
      dispatch({
        type: 'SET_NOTIFICATION',
        data: 'Welcome!'
      })
    }, second*1e3)

    dispatch({
      type: 'SET_NOTIFICATION',
      data: content
    })
  }
)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data

    default:
      return state
  }
}

export default reducer