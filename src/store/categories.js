import { createSlice } from '@reduxjs/toolkit';

import { deleteLocation } from './locations';

//initial state
const initialState = {
  categories: []
};

// Slice
const categoriesSlice = createSlice({
  name: 'categories',

  initialState: initialState,

  reducers: {
    setAddCategory: (state, action) => {
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    },
    setEditCategory: (state, action) => {
      const categoriesWithoutItem = state.categories.filter(
        category => category.id !== action.payload.id
      );
      return {
        ...state,
        categories: [action.payload, ...categoriesWithoutItem]
      };
    },
    setDeleteCategory: (state, action) => {
      const categoriesWithoutItem = state.categories.filter(
        category => category?.id !== action.payload
      );
      return {
        ...state,
        categories: [...categoriesWithoutItem]
      };
    }
  }
});

//extract actions from slice
const { setAddCategory, setEditCategory, setDeleteCategory } =
  categoriesSlice.actions;

// thunks
const addCategories = payload => dispatch => {
  dispatch(setAddCategory(payload));
};

const editCategory = category => dispatch => {
  dispatch(setEditCategory(category));
};

const deleteCategory = id => (dispatch, getState) => {
  //get category name
  const categoryName = getState()?.categories?.categories?.filter(
    category => category?.id === id
  )?.[0]?.categoryName;

  //get locations under the same category name
  const locationsUnderCategory = getState()?.locations?.locations?.filter(
    location => location.categoryName === categoryName
  );

  //if there are locations under the same category, delete each location under the same category
  if (locationsUnderCategory.length)
    locationsUnderCategory.map(location =>
      dispatch(deleteLocation(location?.id))
    );

  //delete category
  dispatch(setDeleteCategory(id));
};

//selectors
const selectCategories = state => state?.categories?.categories;

export { addCategories, selectCategories, editCategory, deleteCategory };

export default categoriesSlice.reducer;
