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
        locations: [action.payload, ...state.locations]
      };
    },

    setEditLocation: (state, action) => {
      const locationsWithoutItem = state.locations.filter(
        location => location.id !== action.payload.id
      );
      return {
        ...state,
        locations: [action.payload, ...locationsWithoutItem]
      };
    },

    setDeleteLocation: (state, action) => {
      const filteredLocation = state.locations.filter(
        location => location?.id !== action.payload
      );

      return {
        ...state,
        locations: [...filteredLocation]
      };
    }
  }
});

//extract actions from slice
const { setAddLocations, setEditLocation, setDeleteLocation } =
  locationsSlice.actions;

// thunks
const addLocation = payload => dispatch => {
  dispatch(setAddLocations(payload));
};

const editLocation = location => dispatch => {
  dispatch(setEditLocation(location));
};

const deleteLocation = id => dispatch => {
  dispatch(setDeleteLocation(id));
};

//selectors
const selectLocations = state => state?.locations?.locations;

export { addLocation, selectLocations, editLocation, deleteLocation };

export default locationsSlice.reducer;
