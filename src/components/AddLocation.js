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
  themeStyles
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
          <label htmlFor="location">Location Name*</label>
          <Input
            id="location"
            name="locationName"
            type="text"
            placeholder="eg: Harvard"
            onChange={handleChange}
          />
          {errors.locationName && (
            <ErrorMessage>{errors.errorMessage}</ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <label htmlFor="address">Address*</label>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="eg: 2157 Henderson Highway"
            onChange={handleChange}
          />
          {errors.address && <ErrorMessage>{errors.errorMessage}</ErrorMessage>}
        </FieldWrapper>

        <FieldWrapper>
          <label htmlFor="coordinates">Coordinates*</label>

          <CoordinatesWrapper>
            <CoordinateInput
              style={{
                marginRight: '1rem'
              }}
            >
              <label>Latitude</label>
              <Input
                coord
                id="coordinates"
                name="latitude"
                type="number"
                placeholder="eg: 38.8951"
                onChange={handleChange}
              />
              {errors.latitude && (
                <ErrorMessage>{errors.errorMessage}</ErrorMessage>
              )}
            </CoordinateInput>

            <CoordinateInput>
              <label>Longitude</label>
              <Input
                coord
                id="coordinates"
                name="longitude"
                type="number"
                placeholder="eg: -77.0364"
                onChange={handleChange}
              />
              {errors.longitude && (
                <ErrorMessage>{errors.errorMessage}</ErrorMessage>
              )}
            </CoordinateInput>
          </CoordinatesWrapper>

          <FieldWrapper style={{ background: '#fff' }}>
            <label htmlFor="category">Category</label>

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
