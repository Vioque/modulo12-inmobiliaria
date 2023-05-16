export const mapPropertyFromViewModelToApi = (property) => {
  // property = property[0]
  return {
    // mainImage: Array.isArray(property.images) ? property.images[0] : '',
    title: property.title,
    notes: property.notes,
    email: property.email,
    phone: property.phone,
    price: parseInt(property.price),
    saleTypeIds: property.saleTypes,
    address: property.address,
    city: property.city,
    provinceId: property.province,
    squareMeter: parseInt(property.squareMeter),
    rooms: parseInt(property.rooms),
    bathrooms: parseInt(property.bathrooms),
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipmentIds: property.equipmentIds,
    images: property.images,
  }
}
