import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

import useForm from '../../hooks/useForm';
import validate from '../../helpers/validate';
import { editCategory, selectCategories } from '../../store/categories';
import { FormWrapper, Label, Input, ErrorMessage, FormAction } from '../Styles';

export default function EditCategory({
  open,
  setOpen,
  selectedRow,
  setSelectedRow
}) {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories)?.categories;

  const { values, errors, setValues, handleChange } = useForm(validate);

  const categoryDetails = categories[selectedRow[0]];
  const disableSaveChanges =
    !values.categoryName || Object.keys(errors)?.length !== 0;

  function handleDialogClose() {
    setOpen(false);
    setValues({});
  }

  function handleSaveChanges() {
    const payload = { ...categoryDetails, ...values };
    dispatch(editCategory(payload));
    handleDialogClose();
    setSelectedRow([]);
  }

  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      open={open}
      onClose={handleDialogClose}
    >
      <DialogTitle>Edit Category</DialogTitle>

      <DialogContent>
        <FormWrapper>
          <Label htmlFor="category">Category Name</Label>
          <Input
            id="category"
            type="text"
            name="categoryName"
            placeholder="eg: School"
            defaultValue={categoryDetails?.categoryName || ''}
            onChange={handleChange}
          />
          {errors.categoryName && (
            <ErrorMessage>{errors.categoryNameErrorMessage}</ErrorMessage>
          )}
        </FormWrapper>
      </DialogContent>
      <DialogActions>
        <FormAction
          secondary
          onClick={handleDialogClose}
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

EditCategory.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  selectedRow: PropTypes.array.isRequired,
  setSelectedRow: PropTypes.func.isRequired
};
