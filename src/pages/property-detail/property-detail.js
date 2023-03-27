import { history } from '../../core/router'
import { getPropertyDetail } from './property-detail.api'
import { setPropertyValues } from './property-detail.helpers'
import { mapPropertyFromApiToViewModel } from './property-detail.mappers'

const params = history.getParams()

getPropertyDetail(params.id).then(property => {
  const propertyDetail = mapPropertyFromApiToViewModel(property)
  console.log('despues de mapper', propertyDetail)
  setPropertyValues(propertyDetail)
})
