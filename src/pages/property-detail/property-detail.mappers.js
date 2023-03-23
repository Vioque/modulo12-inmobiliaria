export const mapPropertyDetailFromApiToViewModel = (propertyDetail) => {
  console.log(propertyDetail.map((property) => mapPropertyFromApiToViewModel(property)))
}

const mapPropertyFromApiToViewModel = (property) => {
  return {
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    title: property.title,
    city: property.city,
    rooms: property.rooms,
    squareMeter: property.squareMeter,
    bathrooms: property.bathrooms,
    price: `${property.price.toLocaleString()} €`,
    notes: `${property.notes.substring(0, 240)}...`,
    locationUrl: property.locationUrl,
  }
}
