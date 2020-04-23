import axios from 'axios'

const url = 'http://localhost:3000/'

export default {
  async farms () {
    return (await axios.get(url + 'farms')).data
  }
}
