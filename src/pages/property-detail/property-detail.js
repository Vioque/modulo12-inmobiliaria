import {history} from '../../core/router'
import {getEquipments, getPropertyDetail} from './property-detail.api'
import {setPropertyValues} from './property-detail.helpers'
import {mapPropertyFromApiToViewModel} from './property-detail.mappers'

const params = history.getParams()

getPropertyDetail(params.id).then(property => {
  let equipments = getEquipment(property[0].equipmentIds)
  const propertyDetail = mapPropertyFromApiToViewModel(property, equipments)
  setPropertyValues(propertyDetail)
})

const getEquipment = (equipmentIds) => {
  let equipmentsList = []
  getEquipments().then(equipment => {
    /* Obtengo de la api todos los equipamientos y los muestro en consola para control */
    console.log('Respuesta de la promise', equipment)
    /* Recorro el resultado y recorro el array que trae los ids de la propiedad para comparar y devolver el name*/
    equipment.map(el => {
      equipmentIds.map(id => {
        if (el.id === id) {
          equipmentsList.push(el.name)
        }
      })
    })
  })
  /* muestro por consola el resultado del array, tiene los nombres de los equipamientos, pero no muestra el número y no es capaz de iterar por él */
  console.log('Nombres del equipamiento', equipmentsList)
  equipmentsList.map(eq => console.log(eq))
  return equipmentsList
}


