import {getBathroomWord, getRoomWord} from '../Common/common'
import {getEquipments} from "./property-detail.api";


export const mapPropertyFromApiToViewModel = (property) => {
  property = property[0]
  return {
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    title: property.title,
    city: property.city,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter} m2`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    price: `${property.price.toLocaleString()} €`,
    notes: property.notes,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments: getEquipment(property.equipmentIds),
    images: property.images,
  }
}

const getEquipment = (equipmentId) => {
  let equipmentsList = []
  let name = ''
  equipmentId.forEach(id => {
      getEquipments(id).then(equipment => {
        equipment.forEach(element => {
          console.log('equipment', element.name)
          equipmentsList.push(element.name)
        })

      })
    }
  )
  console.log('equipmentsList', equipmentsList)
  equipmentsList.forEach(element => {
    console.log('Iterable', element)
  })
  return equipmentsList
}



