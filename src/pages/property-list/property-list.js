import { getPropertyList, getSaleTypeList } from './property-list.api'
import { mapFilterToQueryParams, mapPropertyListFromApiToViewModel } from './property-list.mappers'
import { addPropertyRows, clearPropertyRows, setOptions } from './property-list.helpers'
import { bathrooomOptions, maxPriceOptions, minPriceOptions, roomOptions } from './property-list.constants'
import { onSubmitForm, onUpdateField, getSprovinceList } from '../../common/helpers'

Promise.all([
  getPropertyList(),
  getSaleTypeList(),
  getSprovinceList(),
]).then(
  ([propertyList, saleTypeList, provinceList]) => {
    loadPropertyList(propertyList)
    setOptions(saleTypeList, 'select-sale-type', 'Tipo')
    setOptions(provinceList, 'select-province', '¿Dónde?')
    setOptions(roomOptions, 'select-room', 'Nº Habitaciones')
    setOptions(bathrooomOptions, 'select-bathroom', 'Baños')
    setOptions(minPriceOptions, 'select-min-price', 'Precio mínimo')
    setOptions(maxPriceOptions, 'select-max-price', 'Precio máximo')
  }
)
const loadPropertyList = propertyList => {
  const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList)
  addPropertyRows(viewModelPropertyList)
}


let filter = {
  saleTypeId: '',
  provinceId: '',
  minRooms: '',
  minBathrooms: '',
  minPrice: '',
  maxPrice: ''
}

onUpdateField('select-sale-type', (event) => {
  const value = event.target.value
  filter = {
    ...filter,
    saleTypeId: value,
  }
})
onUpdateField('select-province', (event) => {
  const value = event.target.value
  filter = {
    ...filter,
    provinceId: value,
  }
})

onUpdateField('select-room', (event) => {
  const value = event.target.value
  filter = {
    ...filter,
    minRooms: value,
  }
})

onSubmitForm('search-button', () => {
  const queryParams = mapFilterToQueryParams(filter)
  clearPropertyRows()
  getPropertyList(queryParams).then(propertyList => {
    loadPropertyList(propertyList)
  })
})

