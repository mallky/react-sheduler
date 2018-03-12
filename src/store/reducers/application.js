import { OPEN_HOUR_MODAL } from './../types/consts';

const initialState = {
  openHourModal: false
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_HOUR_MODAL:
      return {
        ...state,
        openHourModal: !state.openHourModal
      };
    default:
      return state;
  }
};

export default application;
