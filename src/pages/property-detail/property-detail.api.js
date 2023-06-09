import axios from 'axios'

const url = `${process.env.BASE_API_URL}/properties`
const urlEquipment = `${process.env.BASE_API_URL}/equipments`
export const getPropertyDetail = (property) =>
  axios.get(`${url}?id=${property}`).then(response => {
    return response.data
  })

export const getEquipments = () =>
  axios.get(`${urlEquipment}`).then(response => {
    return response.data
  })
