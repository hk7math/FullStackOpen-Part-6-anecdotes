import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = ({ content, id }) => {
    dispatch(actionVote(id))
    dispatch(setNotification(`You voted '${content}'`, 5))
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