import { createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
  isActive: false,
  messsage: '',
  severity: ''
};

//slice
const notificationSlice = createSlice({
  name: 'notifications',

  initialState: initialState,

  reducers: {
    addNotification(state, action) {
      return {
        ...state,
        ...action.payload,
        isActive: true
      };
    },
    removeNotification(state, action) {
      return {
        ...state,
        ...action.payload,
        isActive: false
      };
    }
  }
});

//extract actions from slice
const { addNotification, removeNotification } = notificationSlice.actions;

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

export {
  addNotification,
  showSuccessNotification,
  showErrorNotification,
  removeNotification
};

export default notificationSlice.reducer;
