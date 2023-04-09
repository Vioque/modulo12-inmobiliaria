import {getSprovinceList, onSetError, onUpdateField} from "../../common/helpers";
import {formValidation} from "./upload-property.validation";
import {onAddFeature, setOptionList} from "./upload-property.helpers";


let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: [],
  equipmentIds: '',
  images: '',

}

onUpdateField('title', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    title: value,
  }
  formValidation.validateField('title', newProperty.title).then(result => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    notes: value,
  }
  formValidation.validateField('notes', newProperty.notes).then(result => {
    onSetError('notes', result);
  });
})

onUpdateField('email', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    email: value,
  }
  formValidation.validateField('email', newProperty.email).then(result => {
    onSetError('email', result);
  });
})

onUpdateField('phone', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    phone: value,
  }
  formValidation.validateField('phone', newProperty.phone).then(result => {
    onSetError('phone', result);
  });
})

onUpdateField('price', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    price: value,
  }
  formValidation.validateField('price', newProperty.price).then(result => {
    onSetError('price', result);
  });
})

onUpdateField('address', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    address: value,
  }
  formValidation.validateField('address', newProperty.address).then(result => {
    onSetError('address', result);
  });
})

onUpdateField('city', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    city: value,
  }
  formValidation.validateField('city', newProperty.city).then(result => {
    onSetError('city', result);
  });
})
onUpdateField('province', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    province: value,
  }
  // formValidation.validateField('province', newProperty.province).then(result => {
  //   onSetError('province', result);
  // });
})

onUpdateField('squareMeter', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    squareMeter: value,
  }
  formValidation.validateField('squareMeter', newProperty.squareMeter).then(result => {
    onSetError('squareMeter', result);
  });
})

onUpdateField('rooms', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    rooms: value,
  }
  formValidation.validateField('rooms', newProperty.rooms).then(result => {
    onSetError('rooms', result);
  });
})

onUpdateField('bathrooms', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    bathrooms: value,
  }
  formValidation.validateField('bathrooms', newProperty.bathrooms).then(result => {
    onSetError('bathrooms', result);
  });
})

onUpdateField('locationUrl', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    locationUrl: value,
  }
  formValidation.validateField('locationUrl', newProperty.locationUrl).then(result => {
    onSetError('locationUrl', result);
  });
})


getSprovinceList().then(provinceList => {
    setOptionList(provinceList, 'province')
  }
)


onAddFeature('newFeature', (event) => {
  const value = event.target.value
  newProperty = {
    ...newProperty,
    mainFeatures: value,
  }
})


// onSubmitForm('search-button', () => {
//   const queryParams = mapFilterToQueryParams(newProperty)
//   clearPropertyRows()
//   getPropertyList(queryParams).then(propertyList => {
//     loadPropertyList(propertyList)
//   })
// })
