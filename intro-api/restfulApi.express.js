import axios from 'axios'

const login = {
  'username': 'yusuf',
  'email': 'yusuf.hayden@ga.co',
  'password': 'pass1',
  'passwordConfirmation': 'pass1'
}
const cheeseData = {
  name: 'Yusuf fav',
  origin: 'Netherlands',
  image: 'https://ga-cheesebored.herokuapp.com/images/edam.jpeg',
  tastingNotes: 'Mild and nutty'
}

const fetchData = async () => {
  //login
  const loginResponse = await axios.post('https://ga-cheesebored.herokuapp.com/login', login)
  //post cheese
  const cheesesData = await axios.post('https://ga-cheesebored.herokuapp.com/cheeses', cheeseData, {
    headers: { Authorization: `Bearer ${loginResponse.data.token}` }
  })

  //get all chesses
  const getAllCheeses = await axios.get('https://ga-cheesebored.herokuapp.com/cheeses')
  console.log(getAllCheeses)
  //gt one cheese by Id
  const getOneCheese = await axios.get('https://ga-cheesebored.herokuapp.com/cheeses/5fcfde41bea66a9da848d00a')
  console.log('here is your cheese raedy boss ', getOneCheese.data)

  // update cheeseby id
  const updateCheese = axios.put('https://ga-cheesebored.herokuapp.com/cheeses/6025a9cdc834e700177d60b2', {
    name: 'ph',
    origin: 'lolollllllll',
    image: 'https://ga-cheesebored.herokuapp.com/images/edam.jpeg',
    tastingNotes: 'Modified tasting notes'
  }, {
    headers: { Authorization: `Bearer ${loginResponse.data.token}` }
  })
  console.log(updateCheese.data)

  // delete cheese
  // const deletCheese = await axios.delete('https://ga-cheesebored.herokuapp.com/cheeses/6025acf3c834e700177d60bc', {
  //   headers: { Authorization: `Bearer ${loginResponse.data.token}` }
  // })
  // console.log(deletCheese.data)
}
fetchData()

//5fcfde41bea66a9da848d00a

const addNumber = (a, b) => {
  return a + b
}
const deduction = (a, b) => {
  if (a > b) {
    return a - b
  } else {
    return 'first number must be greater than the second number to posive result'
  }
}

export default {
  addNumber,
  deduction
}