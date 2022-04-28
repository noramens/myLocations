import { createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
  locations: []
};

// Slice
const locationsSlice = createSlice({
  name: 'locations',

  initialState: initialState,

  reducers: {
    setAddLocations: (state, action) => {
      return {
        ...state,
        locations: [...state.locations, action.payload]
      };
    }
  }
});

//extract actions from slice
const { setAddLocations } = locationsSlice.actions;

// thunks
const addLocation = payload => dispatch => {
  dispatch(setAddLocations(payload));
};

//selectors
const selectLocations = state => state?.locations?.locations;

export { addLocation, selectLocations };

export default locationsSlice.reducer;
