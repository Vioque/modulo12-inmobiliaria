import {
  getSprovinceList,
  onAddFile,
  onSetError,
  onSetFormErrors,
  onSubmitForm,
  onUpdateField
} from "../../common/helpers";
import {formValidation} from "./upload-property.validation";
import {
  formatDeleteFeatureButtonId,
  onAddFeature,
  onAddImage,
  onRemoveFeature,
  setCheckboxList,
  setOptionList
} from "./upload-property.helpers";
import {getEquipment, getSaleTypeList, insertProperty} from "./upload-property.api";
import {history} from "../../core/router";
import {mapPropertyFromViewModelToApi} from "./upload-property.mappers";


let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypes: [],
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: [],
  equipmentIds: [],
  images: [],

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

getSaleTypeList().then(item => {
  setCheckboxList(item, 'saleTypes')
})

const findTypeElement = id => {
  const index = newProperty.saleTypes.indexOf(id)
  index === -1 ? newProperty.saleTypes.push(id) : newProperty.saleTypes.splice(index, 1)
}


onUpdateField('saleTypes', (event) => {
  const value = event.target.value
  const isChecked = event.target.checked
  isChecked ? newProperty.saleTypes.push(value) : findTypeElement(value)
  formValidation.validateField('saleTypes', newProperty.saleTypes).then(result => {
    onSetError('saleTypes', result)
  })
})

const findFeature = id => {
  const index = newProperty.mainFeatures.indexOf(id)
  if (index !== -1) {
    newProperty.mainFeatures.splice(index, 1)
  }
}

onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value
  if (value !== '') {
    // newProperty = {
    //   ...newProperty,
    //   mainFeatures: value,
    // }
    newProperty.mainFeatures.push(value)
    onAddFeature(value)
    const removeId = formatDeleteFeatureButtonId(value)
    onSubmitForm(removeId, () => {
      findFeature(removeId)
      onRemoveFeature(value)
    })
  }
})


getEquipment().then(item => {
  setCheckboxList(item, 'equipments')
})

const findEquipment = id => {
  const index = newProperty.equipmentIds.indexOf(id)
  index === -1 ? newProperty.equipmentIds.push(id) : newProperty.equipmentIds.splice(index, 1)
}
onUpdateField('equipments', (event) => {
  const value = event.target.value
  const isChecked = event.target.checked
  isChecked ? newProperty.equipmentIds.push(value) : findEquipment(value)
})


onAddFile('add-image', value => {
  // newProperty = {
  //   ...newProperty,
  //   images: value,
  // }
  newProperty.images.push(value)
  onAddImage(value)
})

const onSave = () => insertProperty(newProperty);

onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then(result => {
    onSetFormErrors(result)
    newProperty = mapPropertyFromViewModelToApi(newProperty)
    if (result.succeeded) {
      onSave().then(newProperty => history.push('/'))
    }
  })
})
