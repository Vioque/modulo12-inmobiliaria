import {history} from '../../core/router'
import {getEquipments, getPropertyDetail} from './property-detail.api'
import {setPropertyValues} from './property-detail.helpers'
import {mapPropertyFromApiToViewModel} from './property-detail.mappers'

const params = history.getParams()

getPropertyDetail(params.id).then(property => {
  let equipments = getEquipment(property[0].equipmentIds)
  console.log(equipments)
  const propertyDetail = mapPropertyFromApiToViewModel(property, equipments)
  setPropertyValues(propertyDetail)
})

const getEquipment = (equipmentIds) => {
  let equipmentsList = []
  getEquipments().then(equipment => {
    equipment.map(element => {
      equipmentIds.map(id => {
        if (element.id === id) {
          equipmentsList.push(element.name)
        }
      })
    })
  })
  return equipmentsList
}
