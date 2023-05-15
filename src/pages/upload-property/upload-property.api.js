import axios from 'axios'

const url = `${process.env.BASE_API_URL}/saleTypes`
const urlEquipment = `${process.env.BASE_API_URL}/equipments`
const urlProperties = `${process.env.BASE_API_URL}/properties`
export const getSaleTypeList = () =>
  axios.get(`${url}`).then(response => {
    return response.data
  })

export const getEquipment = () =>
  axios.get(`${urlEquipment}`).then(response => {
    return response.data
  })


export const insertProperty = property =>
  Axios.post(`${urlProperties}`, property).then(response => {
    return response.data;
  });
