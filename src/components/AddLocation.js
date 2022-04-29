import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';

import { addLocation } from '../store/locations';
import useForm from '../hooks/useForm';
import validate from '../helpers/validate';
import { options } from '../helpers/constants';
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

export default function AddLocation() {
  const dispatch = useDispatch();

  const { values, reset, setValues, errors, handleChange } = useForm(validate);

  const disableAddButton =
    !values.locationName ||
    !values.address ||
    !values.latitude ||
    !values.longitude ||
    !values.categoryName ||
    Object.keys(errors)?.length !== 0;

  function handleAddCategory(e) {
    e.preventDefault();
    dispatch(addLocation(values));
    reset();
  }

  function handleSelectChange(event) {
    setValues(prevValues => ({
      ...prevValues,
      categoryName: event?.value
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
            value={values.locationName || ''}
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
            value={values.address || ''}
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
                value={values.latitude || ''}
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
                value={values.longitude || ''}
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
              value={
                options.find(option => option.value === values.categoryName) ||
                ''
              }
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
