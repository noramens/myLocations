import { createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
  categories: []
};

// Slice
const categoriesSlice = createSlice({
  name: 'categories',

  initialState: initialState,

  reducers: {
    setAddCategories: (state, action) => {
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    }
  }
});

//extract actions from slice
const { setAddCategories } = categoriesSlice.actions;

// thunks
const addCategories = payload => dispatch => {
  dispatch(setAddCategories(payload));
};

//selectors
const selectCategories = state => state?.categories?.categories;

export { addCategories, selectCategories };

export default categoriesSlice.reducer;
