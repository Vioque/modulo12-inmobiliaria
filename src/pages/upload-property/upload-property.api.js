import axios from 'axios'

const url = `${process.env.BASE_API_URL}/saleTypes`
const urlEquipment = `${process.env.BASE_API_URL}/equipments`
export const getSaleTypeList = (property) =>
  axios.get(`${url}?id=${property}`).then(response => {
    return response.data
  })

export const getEquipment = () =>
  axios.get(`${urlEquipment}`).then(response => {
    return response.data
  })
