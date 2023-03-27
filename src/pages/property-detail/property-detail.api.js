import axios from 'axios'

const url = `${process.env.BASE_API_URL}/properties`

export const getPropertyDetail = (property) =>
  axios.get(`${url}?id=${property}`).then(response => {
    return response.data
  })

export const getEquipments = (equipmentIds) => {
  axios.get(`${url}?id=${equipmentIds}`).then(response => {
    return response.data
  })
