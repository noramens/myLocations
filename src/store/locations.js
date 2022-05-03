import { createSlice } from '@reduxjs/toolkit';

import {
  showSuccessNotification,
  showErrorNotification
} from './notifications';

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
      const locationsWithoutItem = state.locations.filter(
        location => location?.id !== action.payload
      );

      return {
        ...state,
        locations: [...locationsWithoutItem]
      };
    }
  }
});

//extract actions from slice
const { setAddLocations, setEditLocation, setDeleteLocation } =
  locationsSlice.actions;

// thunks
const addLocation = payload => (dispatch, getState) => {
  //check if location already exists
  const locationExists = Boolean(
    getState()?.locations?.locations?.filter(
      location => location.locationName === payload.locationName
    )?.length
  );

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
  const locationName = getState()?.locations?.locations?.filter(
    location => location?.id === id
  )?.[0]?.categoryName;

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
