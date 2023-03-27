import { history } from '../../core/router'
import { getPropertyDetail } from './property-detail.api'
import { setPropertyValues } from './property-detail.helpers'
import { mapPropertyDetailFromApiToViewModel } from './property-detail.mappers'

const params = history.getParams()

getPropertyDetail(params.id).then(property => {
  const propertyDetail = mapPropertyDetailFromApiToViewModel(property)
  setPropertyValues(propertyDetail)
})
