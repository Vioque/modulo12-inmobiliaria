// export const mapPropertyDetailFromApiToViewModel = (propertyDetail) => {
//   return propertyDetail.map((property) => mapPropertyFromApiToViewModel(property))
// }

 export const mapPropertyFromApiToViewModel = (property) => {
  return {
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    title: property.title,
    city: property.city,
    rooms: property.rooms,
    squareMeter: property.squareMeter,
    bathrooms: property.bathrooms,
    price: property.price,
    notes: property.notes,
    locationUrl: property.locationUrl,
    images: property.images,
    mainFeatures: property.mainFeatures,
    equipments: property.equipments,
  }
}
