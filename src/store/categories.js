import { createSlice } from '@reduxjs/toolkit';

import { deleteLocation } from './locations';
import {
  showSuccessNotification,
  showErrorNotification
} from './notifications';

// Slice
const categoriesSlice = createSlice({
  name: 'categories',

  initialState: { categories: {} },

  reducers: {
    setAddCategory: (state, action) => ({
      ...state,
      categories: {
        ...state.categories,
        [action.payload.id]: action.payload
      }
    }),

    setEditCategory: (state, action) => {
      return {
        ...state,

        categories: {
          ...state.categories,
          [action.payload.id]: action.payload
        }
      };
    },

    setDeleteCategory: (state, action) => {
      const { id } = action.payload;
      const { categories } = state;
      delete categories[id];
      return {
        ...state,
        categories: { ...categories }
      };
    }
  }
});

//extract actions from slice
const { setAddCategory, setEditCategory, setDeleteCategory } =
  categoriesSlice.actions;

// thunks
const addCategories = payload => (dispatch, getState) => {
  //check if category already exists
  const categories = getState()?.categories?.categories;
  const categoryExists = Object.keys(categories)?.map(
    categoryId => categories[categoryId]?.categoryName === payload?.categoryName
  )?.[0];

  if (categoryExists) {
    dispatch(
      showErrorNotification({
        message: `Sorry, ${payload?.categoryName} category already exists.`
      })
    );
    return;
  }
  dispatch(setAddCategory(payload));
  dispatch(
    showSuccessNotification({
      message: `${payload?.categoryName} has been added to categories successfully.`
    })
  );
};

const editCategory = category => dispatch => {
  dispatch(setEditCategory(category));
  dispatch(
    showSuccessNotification({
      message: `${category?.categoryName} categroy has been edited successfully.`
    })
  );
};

const deleteCategory = id => (dispatch, getState) => {
  const {
    categories: { categories },
    locations: { locations }
  } = getState();
  const categoryName = categories[id]?.categoryName;

  //get locations under the same category name
  const locationsUnderCategory = Object.keys(locations)
    ?.map(locationId => locations[locationId])
    .filter(location => location.categoryName === categoryName);

  //if there are locations under the same category, delete each location under the same category
  if (Boolean(locationsUnderCategory.length))
    locationsUnderCategory.map(location =>
      dispatch(deleteLocation(location?.id))
    );

  //delete category
  dispatch(setDeleteCategory(id));

  dispatch(
    showSuccessNotification({
      message: `${categoryName} category has been deleted successfully`
    })
  );
};

//selectors
const selectCategories = state => state?.categories;

export { addCategories, selectCategories, editCategory, deleteCategory };

export default categoriesSlice.reducer;
