import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useForm from '../hooks/useForm';
import validate from '../helpers/validate';
import { addCategories, selectCategories } from '../store/categories';
import {
  Main,
  FormWrapper,
  Input,
  ErrorMessage,
  FormAction,
  Label
} from './Styles';

export default function AddCategory() {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  const { values, errors, reset, handleChange } = useForm(validate);

  const disableAddButton =
    !values.categoryName || Object.keys(errors)?.length !== 0;

  function handleAddCategory(e) {
    const payload = {
      id: new Date().getTime(),
      name: values?.categoryName
    };
    e.preventDefault();
    dispatch(addCategories(payload));
    reset();
  }

  console.log('add categories: ', categories);

  return (
    <Main>
      <h1>Add category</h1>
      <FormWrapper>
        <Label htmlFor="category">Category Name</Label>
        <Input
          id="category"
          type="text"
          name="categoryName"
          placeholder="eg: School"
          value={values.categoryName || ''}
          onChange={handleChange}
        />
        {errors.categoryName && (
          <ErrorMessage>{errors.categoryNameErrorMessage}</ErrorMessage>
        )}

        <FormAction disabled={disableAddButton} onClick={handleAddCategory}>
          Add Category
        </FormAction>
      </FormWrapper>
    </Main>
  );
}
