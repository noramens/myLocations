import React from 'react';
import Select from 'react-select';

import useForm from '../hooks/useForm';
import validate from '../helpers/validate';
import {
  CoordinatesWrapper,
  CoordinateInput,
  ErrorMessage,
  FieldWrapper,
  FormAction,
  FormWrapper,
  Input,
  Main,
  selectStyle,
  themeStyles,
  Label
} from './Styles';

const options = [
  { id: 1, label: 'School', value: 'school' },
  { id: 2, label: 'Restuarant', value: 'restuarant' },
  { id: 3, label: 'Church', value: 'church' }
];

export default function AddLocation() {
  const { values, setValues, errors, handleChange } = useForm(validate);

  const disableAddButton =
    !values.locationName ||
    !values.address ||
    !values.latitude ||
    !values.longitude ||
    !values.category ||
    Object.keys(errors)?.length !== 0;

  function handleAddCategory(e) {
    e.preventDefault();
  }

  function handleSelectChange(event) {
    setValues(prevValues => ({
      ...prevValues,
      category: event?.value
    }));
  }

  return (
    <Main>
      <h1>Add location</h1>
      <FormWrapper>
        <FieldWrapper>
          <Label htmlFor="location">Location Name*</Label>
          <Input
            id="location"
            name="locationName"
            type="text"
            placeholder="eg: Harvard"
            onChange={handleChange}
          />
          {errors.locationName && (
            <ErrorMessage>{errors.locationNameErrorMessage}</ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label htmlFor="address">Address*</Label>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="eg: 2157 Henderson Highway"
            onChange={handleChange}
          />
          {errors.address && (
            <ErrorMessage>{errors.addressErrorMessage}</ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label htmlFor="coordinates">Coordinates*</Label>

          <CoordinatesWrapper>
            <CoordinateInput
              style={{
                marginRight: '1rem'
              }}
            >
              <Label>Latitude</Label>
              <Input
                coord
                id="coordinates"
                name="latitude"
                type="number"
                placeholder="eg: 38.8951"
                onChange={handleChange}
              />
              {errors.latitude && (
                <ErrorMessage>{errors.latitudeErrorMessage}</ErrorMessage>
              )}
            </CoordinateInput>

            <CoordinateInput>
              <Label>Longitude</Label>
              <Input
                coord
                id="coordinates"
                name="longitude"
                type="number"
                placeholder="eg: -77.0364"
                onChange={handleChange}
              />
              {errors.longitude && (
                <ErrorMessage>{errors.longitudeErrorMessage}</ErrorMessage>
              )}
            </CoordinateInput>
          </CoordinatesWrapper>

          <FieldWrapper style={{ background: '#fff' }}>
            <Label htmlFor="category">Category</Label>

            <Select
              id="category"
              placeholder="select a category"
              options={options}
              value={options.find(option => option.value === values.category)}
              onChange={handleSelectChange}
              theme={themeStyles}
              styles={selectStyle}
            />
          </FieldWrapper>
        </FieldWrapper>

        <FormAction disabled={disableAddButton} onClick={handleAddCategory}>
          Add Location
        </FormAction>
      </FormWrapper>
    </Main>
  );
}
