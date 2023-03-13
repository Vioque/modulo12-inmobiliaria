import {getPropertyList} from "./property-list.api";
import {mapPropertyListFromApiToViewModel} from "./property-list.mappers";
import {addPropertyRows} from "./property-list.helpers";

getPropertyList().then(propertyList => {
  const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList)
  addPropertyRows(viewModelPropertyList)
})
