import {getBathroomWord, getRoomWord} from '../Common/common'


export const mapPropertyFromApiToViewModel = (property, equipment) => {
  property = property[0]
  /* Muestra por consola el equipamiento que llega al mapper */
  console.log('Mapper', equipment)
  let result = {
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
    equipments: equipment,
    equipments2: property.equipmentIds,
    images: property.images,
  }
  /* muestro lo que se envía en property.equipments */
  console.log('Equipamiento que se envía al helpers', result.equipments)
  return result
}





