import PropTypes from 'prop-types';

const nameRegex = /^[a-zA-Z .'-]*$/;

/*
    supports optional uppercase
    supports french also
    numbers (required)
    letters, chars and spaces
    at least one common address keyword (required)
    as many chars you want before the line break 
 */
const addressRegex =
  /[0-9]+[ |[a-zà-ú.,-]* ((highway)|(autoroute)|(north)|(nord)|(south)|(sud)|(east)|(est)|(west)|(ouest)|(avenue)|(lane)|(voie)|(ruelle)|(road)|(rue)|(route)|(drive)|(boulevard)|(circle)|(cercle)|(street)|(cer\.)|(cir\.)|(blvd\.)|(hway\.)|(st\.)|(aut\.)|(ave\.)|(ln\.)|(rd\.)|(hw\.)|(dr\.)|(a\.))([ .,-]*[a-zà-ú0-9]*)*/i;

export default function validate(values) {
  const { locationName, categoryName, address, latitude, longitude } = values;
  let errors = {};

  const checkLocationName = validateName(locationName, 'Location Name');
  const checkCategoryName = validateName(categoryName, 'Category Name');
  const checkAddress = validateAddress(address, 'Address');
  const checkLatitude = validateLatitude(latitude);
  const checkLongitude = validateLongitude(longitude);

  if (checkLocationName) {
    errors.locationName = true;
    errors.locationNameErrorMessage = checkLocationName;
  }

  if (checkCategoryName) {
    errors.categoryName = true;
    errors.categoryNameErrorMessage = checkCategoryName;
  }

  if (checkAddress) {
    errors.address = true;
    errors.addressErrorMessage = checkAddress;
  }

  if (checkLatitude) {
    errors.latitude = true;
    errors.latitudeErrorMessage = checkLatitude;
  }

  if (checkLongitude) {
    errors.longitude = true;
    errors.longitudeErrorMessage = checkLongitude;
  }

  return errors;
}

function validateName(value, type) {
  const fieldName = type ? type : 'this field';
  if (value?.trim() === '') {
    return `${fieldName} cannot be empty`;
  } else if (value?.trim()?.length < 2) {
    return `${fieldName} cannot be less than 2 letters`;
  } else if (!nameRegex.test(value)) {
    return "This field can contain only alphabets & these special characters (- ' .)";
  } else return null;
}

function validateAddress(value, type) {
  const fieldName = type ? type : 'this field';

  if (value?.trim() === '') {
    return `${fieldName} cannot be empty`;
  } else if (value?.trim()?.length < 2) {
    return `${fieldName} cannot be less than 2 letters`;
  } else if (value && !addressRegex.test(value)) {
    return 'Enter a valid address';
  }
}

function validateLatitude(value) {
  const coord = parseFloat(value);

  if (coord && !(coord >= -90 && coord <= 90)) {
    return 'Enter a valid longitude';
  }
}

function validateLongitude(value) {
  const coord = parseFloat(value);

  if (coord && !(coord >= -180 && coord <= 180)) {
    return 'Enter a valid longitude';
  }
}

validate.propTypes = {
  locationName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};
