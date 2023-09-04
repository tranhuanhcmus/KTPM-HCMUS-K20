import {StatusColor} from '../components/Overlay/SlideMessage';
import {createSlice} from '@reduxjs/toolkit';

const initialStatusState = {
  isLoading: false,
};

export const setLoading = bool => {
  return {type: 'setLoading', payload: bool};
};

export const StatusReducer = (state = initialStatusState, action) => {
  switch (action.type) {
    case 'setLoading':
      return {isLoading: action.payload};
    default:
      return state;
  }
};

const initialMessageState = {
  status: StatusColor.error,
  message: '',
  key: '',
};

export const showMessage = (status, message) => {
  const id = new Date().toString();

  return {type: 'showMessage', status, message, key: id};
};

export const MessageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case 'showMessage':
      return {status: action.status, message: action.message, key: action.key};
    default:
      return state;
  }
};

const initialState = {
  origin: null,
  destination: null,
  LocationCustomer: null,
  step: {name: 'init'},
  travelTimeinformations: null,
};

export const navSlices = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTimeinformations = action.payload;
    },
    setLocationCustomer: (state, action) => {
      state.LocationCustomer = action.payload;
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setTravelTime,
  setStep,
  setLocationCustomer,
} = navSlices.actions;

// selector
export const selectorigin = state => state.nav.origin;
export const selectdestination = state => state.nav.destination;
export const selecttravelTime = state => state.nav.travelTimeinformations;
export const selectStep = state => state.nav.step;
export const selectLocationCustomer = state => state.nav.LocationCustomer;

export default navSlices.reducer;