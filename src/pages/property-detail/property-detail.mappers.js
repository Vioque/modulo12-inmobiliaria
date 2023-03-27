import { getRoomWord } from '../Common/common'
import { getEquipments } from './property-detail.api'

export const mapPropertyDetailFromApiToViewModel = (property) => {
  return property.map((property) => mapPropertyFromApiToViewModel(property))
}

const mapPropertyFromApiToViewModel = (property) => {
  return {
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    title: property.title,
    city: property.city,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    bathrooms: property.bathrooms,
    price: `${property.price} €`,
    notes: property.notes,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments:,
  }
}

getEquipments(equipmentIds).then(equipment => {
  const equipmentName = mapPropertyDetailFromApiToViewModel(equipment)
  return {}
})

