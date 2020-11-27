import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionVote } from '../reducers/anecdoteReducer'
import { actionNotify } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = ({ content, id }) => {
    dispatch(actionVote(id))
    dispatch(actionNotify(`You voted '${content}'`))
    setTimeout(() => {
      dispatch(actionNotify(`Welcome!`))
    }, 5000);
  }

  return (
    <>
      {anecdotes.filter(
        anecdote => !filter 
          || anecdote.content.toLowerCase().indexOf(filter.toLowerCase())>=0
      ).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList