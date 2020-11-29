import React from 'react'
import { connect } from 'react-redux'
import { actionVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ anecdotes, filter, actionVote, setNotification }) => {
  const vote = ({ content, id }) => {
    actionVote(id)
    setNotification(`You voted '${content}'`, 5)
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

const mapStateToProps = ({ anecdotes, filter }) => ({ anecdotes, filter })

const mapDispatchToProps = {
  actionVote,
  setNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)