import anecdoteService from '../services/anecdotes'

export const getId = () => (100000 * Math.random()).toFixed(0)

export const actionVote = data => ({ 
  type: 'VOTE_ANECDOTE',
  data
})

export const actionAdd = (anecdote) => (
  async dispatch => {
    const data = await anecdoteService.addNew(anecdote)
    dispatch({
      type: 'ADD_ANECDOTE',
      data
    })
}
)

export const actionInit = () => (
  async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data
    })
  }
)

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE_ANECDOTE':
      const id = action.data
      return state.map(anecdote => 
        anecdote.id !== id 
        ? anecdote 
        : { ...anecdote, votes: anecdote.votes + 1 })
        .sort((a, b) => b.votes - a.votes)

    case 'ADD_ANECDOTE':
      const anecdote = action.data
      return [...state, anecdote]

    case 'INIT_ANECDOTE':
      const anecdotes = action.data
      return [...anecdotes]

    default:
      return state
  }
}

export default reducer