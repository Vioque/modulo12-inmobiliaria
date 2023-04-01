export const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitación'
}

export const getBathroomWord = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño'
}
