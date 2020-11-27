import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const addNew = async (content) => {
  const obj = { content, votes: 0 }
  const res = await axios.post(baseUrl, obj)
  return res.data
}

const addVote = async (id) => {
  const temp = await axios.get(`${baseUrl}/${id}`)
  const res = await axios.put(`${baseUrl}/${id}`, { ...temp.data, votes: temp.data.votes + 1 })
  return res.data
}

export default { getAll, addNew, addVote }