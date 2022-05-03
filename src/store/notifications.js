import { createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
  allNotifications: []
};

//slice
const notificationSlice = createSlice({
  name: 'notifications',

  initialState: initialState,

  reducers: {
    addNotification(state, action) {
      action.payload.id = new Date()?.getTime();
      return {
        ...state,
        allNotifications: [action.payload, ...state.allNotifications]
      };
    }
  }
});

//extract actions from slice
const { addNotification } = notificationSlice.actions;

//thunks
const showSuccessNotification = notification => dispatch => {
  dispatch(
    addNotification({
      ...notification,
      severity: 'success'
    })
  );
};

const showErrorNotification = notification => dispatch => {
  dispatch(
    addNotification({
      ...notification,
      severity: 'error'
    })
  );
};

//selectors
const selectNotifications = state => state.notifications.allNotifications;

export {
  addNotification,
  showSuccessNotification,
  showErrorNotification,
  selectNotifications
};

export default notificationSlice.reducer;
