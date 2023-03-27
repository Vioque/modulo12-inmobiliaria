import { getRoomWord } from '../Common/common'

export const mapPropertyFromApiToViewModel = (property) => {
  console.log('dentro del mapper', property)
  const propertyMapper =
    {
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
      equipments: property.equipments,
      images: property.images,
    }
  console.log(propertyMapper)
  return propertyMapper
}

// getEquipments(equipments).then(equipmentName => {
//   const name =  equipmentName.name
//   return name
//   }
// )

