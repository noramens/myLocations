import { createSlice } from '@reduxjs/toolkit';

import {
  showSuccessNotification,
  showErrorNotification
} from './notifications';

//initial state

// Slice
const locationsSlice = createSlice({
  name: 'locations',

  initialState: { locations: {} },

  reducers: {
    setAddLocations: (state, action) => {
      return {
        ...state,
        locations: {
          ...state.locations,
          [action.payload.id]: action.payload
        }
      };
    },

    setEditLocation: (state, action) => {
      return {
        ...state,
        locations: {
          ...state.locations,
          [action.payload.id]: action.payload
        }
      };
    },

    setDeleteLocation: (state, action) => {
      const { id } = action.payload;
      const newState = Object.assign({}, state);
      const { locations } = newState;
      delete locations[id];
      return newState;
    }
  }
});

//extract actions from slice
const { setAddLocations, setEditLocation, setDeleteLocation } =
  locationsSlice.actions;

// thunks
const addLocation = payload => (dispatch, getState) => {
  //check if location already exists
  const locations = getState()?.locations?.locations;
  const locationExists = Object.keys(locations)?.map(
    locationId => locations[locationId]?.locationName === payload?.locationName
  )?.[0];

  if (locationExists) {
    dispatch(
      showErrorNotification({
        message: `Sorry, location with location name, ${payload?.locationName} already exists.`
      })
    );
    return;
  }

  dispatch(setAddLocations(payload));
  dispatch(
    showSuccessNotification({
      message: `${payload?.locationName} location has been added successfully`
    })
  );
};

const editLocation = location => dispatch => {
  dispatch(setEditLocation(location));
  dispatch(
    showSuccessNotification({
      message: `${location?.locationName} location has been edited successfully`
    })
  );
};

const deleteLocation = id => (dispatch, getState) => {
  //get location name
  const { locations } = getState()?.locations;
  const locationName = locations[id]?.locationName;

  dispatch(setDeleteLocation(id));

  dispatch(
    showSuccessNotification({
      message: `${locationName} location has been deleted successfully`
    })
  );
};

//selectors
const selectLocations = state => state?.locations?.locations;

export { addLocation, selectLocations, editLocation, deleteLocation };

export default locationsSlice.reducer;
