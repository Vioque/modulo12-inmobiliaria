import {getBathroomWord, getRoomWord} from '../Common/common'


export const mapPropertyFromApiToViewModel = (property, equipments) => {
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
    equipments: equipments,
    images: property.images,
  }
}





