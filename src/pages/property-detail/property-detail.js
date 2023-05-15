import {history} from '../../core/router'
import {getEquipments, getPropertyDetail} from './property-detail.api'
import {setPropertyValues} from './property-detail.helpers'
import {mapPropertyFromApiToViewModel} from './property-detail.mappers'
import {onSetError, onUpdateField} from "../../common/helpers";
import {formValidation} from "./property-detail.validation";

const params = history.getParams()

getPropertyDetail(params.id).then(async property => {
  let equipments = await getEquipment(property[0].equipmentIds)
  const propertyDetail = mapPropertyFromApiToViewModel(property, equipments)
  setPropertyValues(propertyDetail)
})

const getEquipment = async (equipmentIds) => {
  let equipmentsList = []
  await getEquipments().then(equipment => {
    equipment.map(el => {
      equipmentIds.map(id => {
        if (el.id === id) {
          equipmentsList.push(el.name)
        }
      })
    })
  })
  return equipmentsList
}


onUpdateField('email', (event) => {
  const value = event.target.value
  formValidation.validateField('email', value).then(result => {
    onSetError('email', result);
  });
})

onUpdateField('message', (event) => {
  const value = event.target.value
  formValidation.validateField('message', value).then(result => {
    onSetError('message', result);
  });
})
