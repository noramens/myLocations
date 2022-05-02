import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

import { selectLocations, editLocation } from '../../store/locations';
import { prepareCategorySelectOptions } from '../../helpers/utils';
import { selectCategories } from '../../store/categories';
import useForm from '../../hooks/useForm';
import validate from '../../helpers/validate';
import {
  FormAction,
  FormWrapper,
  FieldWrapper,
  Label,
  Input,
  CoordinateInput,
  CoordinatesWrapper,
  ErrorMessage,
  themeStyles,
  selectStyle
} from '../Styles';

export default function EditLocation({
  open,
  setOpen,
  selectedRow,
  setSelectedRow
}) {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const locations = useSelector(selectLocations);

  const { values, setValues, handleChange, errors } = useForm(validate);

  const [categoryOptions, setCategoryOptions] = useState([]);

  const locationDetails = locations.filter(
    location => location.id === selectedRow?.[0]
  )?.[0];
  const disableSaveChanges =
    (!values.locationName &&
      !values.address &&
      !values.latitude &&
      !values.longitude &&
      !values.categoryName) ||
    Object.keys(errors)?.length !== 0;

  useEffect(() => {
    setCategoryOptions(prepareCategorySelectOptions(categories));
  }, [categories]);

  function handleSelectChange(event) {
    setValues(prevValues => ({
      ...prevValues,
      categoryName: event?.label
    }));
  }

  function handleModalClose() {
    setOpen(false);
    setValues({});
  }

  function handleSaveChanges() {
    const payload = { ...locationDetails, ...values };
    dispatch(editLocation(payload));
    handleModalClose();
    setSelectedRow([]);
  }

  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      open={open}
      onClose={handleModalClose}
    >
      <DialogTitle>Edit location</DialogTitle>

      <DialogContent>
        <FormWrapper>
          <FieldWrapper>
            <Label htmlFor="location">Location Name*</Label>
            <Input
              id="location"
              name="locationName"
              type="text"
              placeholder="eg: Harvard"
              defaultValue={locationDetails?.locationName}
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
              defaultValue={locationDetails?.address}
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
                  defaultValue={locationDetails?.latitude}
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
                  defaultValue={locationDetails?.longitude}
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
                options={categoryOptions}
                value={
                  categoryOptions.find(
                    option => option.label === locationDetails?.categoryName
                  ) || ''
                }
                onChange={handleSelectChange}
                theme={themeStyles}
                styles={selectStyle}
              />
            </FieldWrapper>
          </FieldWrapper>
        </FormWrapper>
      </DialogContent>

      <DialogActions>
        <FormAction
          secondary
          onClick={handleModalClose}
          disabled={disableSaveChanges}
        >
          Close
        </FormAction>
        <FormAction disabled={disableSaveChanges} onClick={handleSaveChanges}>
          Save Changes
        </FormAction>
      </DialogActions>
    </Dialog>
  );
}

EditLocation.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  selectedRow: PropTypes.array.isRequired,
  setSelectedRow: PropTypes.func.isRequired
};
