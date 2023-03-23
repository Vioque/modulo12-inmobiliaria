import axios from 'axios'

const url = `${process.env.BASE_API_URL}/properties`

export const getPropertyList = (queryParams) =>
  axios.get(`${url}?${queryParams}`).then(response => {
    return response.data
  })

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`

export const getSaleTypeList = () =>
  axios.get(saleTypeListUrl).then(respose => {
    return respose.data
  })

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`

export const getSprovinceList = () =>
  axios.get(provinceListUrl).then(respose => {
    return respose.data
  })
