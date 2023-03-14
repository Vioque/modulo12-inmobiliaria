import {getPropertyList, getSaleTypeList, getSprovinceList} from "./property-list.api";
import {mapPropertyListFromApiToViewModel} from "./property-list.mappers";
import {addPropertyRows, setOptions} from "./property-list.helpers";
import {bathrooomOptions, maxPriceOptions, minPriceOptions, roomOptions} from "./property-list.constants";
import {onSubmitForm, onUpdateField} from "../../common/helpers";


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
  console.log({filter})
})

