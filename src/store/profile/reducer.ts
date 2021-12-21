import TOGGLE_SHOW_PROFILE from './action';

const initionalValues = {
  isShow: false
};

export const profileReducer = (state = initionalValues, action: any) => {
  switch (action.type) {
    case TOGGLE_SHOW_PROFILE: {
      return {
        isShow: !state.isShow
      };
    }
    default: {
      return state;
    }
  }
};
