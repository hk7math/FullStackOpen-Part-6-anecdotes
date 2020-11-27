export const getId = () => (100000 * Math.random()).toFixed(0)

export const actionVote = (id) => ({ 
  type: 'VOTE_ANECDOTE',
  data: { id }
})

export const actionAdd = (content) => ({
  type: 'ADD_ANECDOTE',
  data: {
    content,
    id: getId(),
    votes: 0
  }
})

export const actionInit = (anecdotes) => ({
  type: 'INIT_ANECDOTE',
  data: anecdotes
})

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE_ANECDOTE':
      const { id } = action.data
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