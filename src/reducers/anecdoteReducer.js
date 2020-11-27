const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

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

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export default reducer