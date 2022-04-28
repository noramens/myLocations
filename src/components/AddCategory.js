import React from 'react';

import useForm from '../hooks/useForm';
import validate from '../helpers/validate';
import { Main, FormWrapper, Input, ErrorMessage, FormAction } from './Styles';

export default function AddCategory() {
  const { values, errors, handleChange } = useForm(validate);

  const disableAddButton =
    !values.categoryName || Object.keys(errors)?.length !== 0;

  function handleAddCategory(e) {
    e.preventDefault();
  }

  return (
    <Main>
      <h1>Add category</h1>
      <FormWrapper>
        <label htmlFor="category">Category Name</label>
        <Input
          id="category"
          type="text"
          name="categoryName"
          placeholder="eg: School"
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
