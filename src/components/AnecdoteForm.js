import React from 'react'
import { useDispatch } from 'react-redux'
import { actionAdd } from '../reducers/anecdoteReducer'
import { actionNotify } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(actionAdd(content))
    dispatch(actionNotify(`You created '${content}'`))
    setTimeout(() => {
      dispatch(actionNotify(`Welcome!`))
    }, 5000);
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm