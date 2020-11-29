import React from 'react'
import { connect } from 'react-redux'
import { actionFilter } from '../reducers/filterReducer'

const Filter = ({ filter, actionFilter }) => {
  const handleChange = (event) => {
    actionFilter(event.target.value)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={filter} />
    </div>
  )
}

const mapStateToProps = ({ filter }) => ({ filter })

const mapDispatchToProps = { actionFilter }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)