const initialState = 'Welcome!'

export const actionNotify = (content) => ({
  type: 'SET_NOTIFICATION',
  data: content
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export default reducer